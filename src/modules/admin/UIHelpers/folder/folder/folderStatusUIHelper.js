export const FOLDER_STATUS_CODE = 3
export const FOLDER_EXIT_COURSE = 4
export const FOLDER_ORIENTED = 5
export const FOLDER_STATUS = { 
  1: "FOLDER.STATUS.BEING_PROCESSEDY",
  2: "FOLDER.STATUS.SUPPORTING_DOCUMENTS",
  [FOLDER_STATUS_CODE]: "FOLDER.STATUS.COMPLETE",
  [FOLDER_EXIT_COURSE]: "FOLDER.STATUS.EXIT_COURSE",
  [FOLDER_ORIENTED]: "FOLDER.STATUS.ORIENTED"
}

export const FOLDER_STATUS_COLOR = { 
  1: "primary",
  2: "warning",
  [FOLDER_STATUS_CODE]: "success",
  [FOLDER_EXIT_COURSE]: "danger",
  [FOLDER_ORIENTED]: "warning"
}


export const folderStatusUIHelper = (intl) =>
  Object.keys(FOLDER_STATUS).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: FOLDER_STATUS[key] }),
  }))
