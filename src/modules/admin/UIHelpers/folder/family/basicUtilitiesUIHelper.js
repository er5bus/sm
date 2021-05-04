export const BASIC_UTILITIES = { 
    1: "BASIC_UTILITIES.AVAILABLE",
    2: "BASIC_UTILITIES.IMPERFECT",
    3: "BASIC_UTILITIES.NOT_AVAILABLE",
  }
  
export const basicUtilitiesUIHelper = (intl) =>
    Object.keys(BASIC_UTILITIES).map((key) => ({
      value: parseInt(key),
      label: intl.formatMessage({ id: BASIC_UTILITIES[key] }),
    }))
  
