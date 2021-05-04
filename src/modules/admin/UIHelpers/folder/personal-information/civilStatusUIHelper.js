export const CIVIL_STATUS = { 
  1: "FOLDER.CIVIL_STATUS.MARRIED",
  2: "FOLDER.CIVIL_STATUS.DIVORCED",
  3: "FOLDER.CIVIL_STATUS.WIDOWER" ,
  4: "FOLDER.CIVIL_STATUS.SINGLE" 
}


export const CIVIL_STATUS_COLOR = { 
  1: "warning",
  2: "primary",
  3: "success" 
}


export const civilStatusUIHelper = (intl) =>
  Object.keys(CIVIL_STATUS).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: CIVIL_STATUS[key] }),
  }))
