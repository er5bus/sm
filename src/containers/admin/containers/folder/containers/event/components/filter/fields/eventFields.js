import * as Yup from "yup"
import _ from "lodash"
import {
  INPUT,
  SELECT,
  CHECKBOX,
  DATE_PICKER
} from "./../../../../../../../../../components/partials"

import {
  eventContextUIHelper, 
  eventThemeUIHelper, 
  eventStateUIHelper,
  eventNatureUIHelper,
  eventStatusUIHelper
} from "./../../../../../../../UIHelpers"


export const eventFieldsAr = _.memoize(({ intl }) => [
  {
    name: "placeAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_AR" }),
    size: 12,
    validation: Yup.string(),
    required: true,
  }
])


export const eventFieldsFr = _.memoize(({ intl }) => [
  {
    name: "placeFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_FR" }),
    validation: Yup.string(),
    required: true,
    size: 12
  },
])

export const eventEditFields = _.memoize(({ intl }) => [
  {
    name: "isCanceled",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.CANCEL_APPOINTMENT" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12,
  },
])

// Validation schema
export const eventFields = _.memoize(({ intl }) => [
  {
    name: "date",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    validation: Yup.string(),
    required: true,
    size: 4,
  },
  {
    name: "context",
    component: SELECT,
    options: eventContextUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONTEXT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CONTEXT" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "way",
    component: SELECT,
    options: eventStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.WAY" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.WAY" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "theme",
    component: SELECT,
    options: eventThemeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "nature",
    component: SELECT,
    options: eventNatureUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.NATURE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.NATURE" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "state",
    component: SELECT,
    options: eventStateUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "isPresent",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_PRESENT" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12,
  } ,
]);
