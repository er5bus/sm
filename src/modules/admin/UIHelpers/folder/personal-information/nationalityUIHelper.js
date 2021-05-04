export const NATIONALITY = { 
  1: "FOLDER.NATIONALITY.TUNISIAN",
}


export const NATIONALITY_COLOR = { 
  1: "warning",
  2: "primary",
  3: "success" 
}


export const nationalityUIHelper = (intl) =>
  Object.keys(NATIONALITY).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: NATIONALITY[key] }),
  }))
