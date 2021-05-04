import { AR, FR, HTTP_METHODS } from "./../../../../../constants"
import { makeCall } from "./../../../../../helpers"
import { store } from "./../../../../../configureStore"
import {getLang} from "../../../../../i18n"
import { get } from "lodash"

const FETCH_FOLDERS_ENDPOINT = "/api/folder-groups/folders"

const BENEFICIARY_VALUE = {
  [AR]: ["firstNameAr", "lastNameAr"],
  [FR]: ["firstNameFr", "lastNameFr"]
}

const AUTHOR_VALUE = {
  [AR]: ["createdByDetail.firstNameAr", "createdByDetail.lastNameAr"],
  [FR]: ["createdByDetail.firstName", "createdByDetail.lastName"]
}

const RESPONSIBLE_VALUE = {
  [AR]: ["cpDetail.firstNameAr", "cpDetail.lastNameAr"],
  [FR]: ["cpDetail.firstName", "cpDetail.lastName"]
}


const getValue = (obj, value) => value.map((val) => get(obj, val)).join(" ")

const formatFolders = (folders) => folders.map((folder) => ({ 
  beneficiary: getValue(folder, BENEFICIARY_VALUE[getLang()]), 
  author: getValue(folder, AUTHOR_VALUE[getLang()]),
  responsible: getValue(folder, RESPONSIBLE_VALUE[getLang()]), 
  ...folder
}))

export const folderUIHelper = (params, fetchCallback=f=>f, dataCallback=f=>f, totalSizeCallBack=f=>f) => {

  const { token } = store.getState().common.auth || {}

  fetchCallback(true)
  return new Promise((resolve, reject) =>
    makeCall(HTTP_METHODS.GET, FETCH_FOLDERS_ENDPOINT, {}, {'Authorization': `Bearer ${token.access}`}, params )
    .then(resp => {
      resolve(dataCallback(formatFolders( resp.data.results )))
      fetchCallback(false)
      totalSizeCallBack(resp.data.count)
    })
    .catch(() => reject(dataCallback([])))
  )
}
