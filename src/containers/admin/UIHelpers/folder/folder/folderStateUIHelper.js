export const FOLDER_STATE = { 
  1: "FOLDER.STATE.ACTIVE",
  2: "FOLDER.STATE.PENDING",
  3: "FOLDER.STATE.CLASSIFED" 
}


export const FOLDER_STATE_COLOR = { 
  1: "warning",
  2: "primary",
  3: "success" 
}


export const folderStateUIHelper = (intl) =>
  Object.keys(FOLDER_STATE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: FOLDER_STATE[key] }),
  }))
