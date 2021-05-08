export const SITUATION_TYPES = { 
    1: "SITUATION_TYPE.SCHOOLED",
    2: "SITUATION_TYPE.TRAINING",
    3: "SITUATION_TYPE.EMPLOYED",
    4: "SITUATION_TYPE.DROPOUT",
    5: "SITUATION_TYPE.UNIVERSITY",
    6: "SITUATION_TYPE.UNEMPLOYED",
  }
  
export const situationTypesUIHelper = (intl) =>
    Object.keys(SITUATION_TYPES).map((key) => ({
      value: parseInt(key),
      label: intl.formatMessage({ id: SITUATION_TYPES[key] }),
    }))
  
    