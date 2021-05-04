import { get, isString, isEmpty, isArray, isObject } from "lodash"
//import {getLang} from "../i18n"


const getLang = () => ""

const getAttrFromString = (object, name, defaultValue) => {
  if (isString(name) && name.includes("[]")){
    return getAttrFromStringAsArray(object, name, defaultValue)
  }
  return get(object, name, defaultValue) || defaultValue
}

const getAttrFromStringAsArray = (object, name = "", defaultValue) => {
  const arrayOfObjects = get(object, name.substring(0, name.indexOf("[]")), [])
  if (isArray(arrayOfObjects)) {
    const value = arrayOfObjects.map((obj) => getAttrFromString(obj, name.substring(name.indexOf("[]") +1 ), undefined))
    if (!value.every(isEmpty)){
      return value.join(" ")
    }
  }
  return defaultValue
}

const getAttrFromArray = (object, name = [], defaultValue) => {
  const value = name.map((val) => getAttrFromString(object, val, undefined))
  if (value.every((val) => isEmpty(val))) {
    return defaultValue
  }
  return value.join(" ")
}

const getAttrFromObject = (object, nameObj, defaultValue) => {
  const name = nameObj[getLang()]
  if (isString(name)){
    return getAttrFromString(object, name, defaultValue)
  }else if (isArray(name)){
    return getAttrFromArray(object, name, defaultValue)
  }
  return defaultValue
}

export const getAttr = (object, name, defaultValue) => {
  if (isString(name)){
    return getAttrFromString(object, name, defaultValue)
  }else if (isArray(name)){
    return getAttrFromArray(object, name, defaultValue)
  }else if (isObject(name)){
    return getAttrFromObject(object, name, defaultValue)
  }

  return defaultValue
}


export const convertToSnakeCase = (string) => string.charAt(0).toLowerCase() + string.slice(1) // lowercase the first character
  .replace(/\W+/g, " ") // Remove all excess white space and replace & , . etc.
  .replace(/([a-z])([A-Z])([a-z])/g, "$1 $2$3") // Put a space at the position of a camelCase -> camel Case
  .split(/\B(?=[A-Z]{2,})/) // Now split the multi-uppercases customerID -> customer,ID
  .join(' ') // And join back with spaces.
  .split(' ') // Split all the spaces again, this time we're fully converted
  .join('_') // And finally snake_case things up
  .toLowerCase() // With a nice lower case
