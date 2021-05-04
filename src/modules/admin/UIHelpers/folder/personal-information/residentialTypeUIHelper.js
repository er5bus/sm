export const RESIDENTIAL_TYPES = { 
    1: "RESIDENTIAL_TYPE.HOUSE_RESIDENTIAL_TYPE",
    2: "RESIDENTIAL_TYPE.APARTMENT_RESIDENTIAL_TYPE",
    3: "RESIDENTIAL_TYPE.FARMHOUSE_RESIDENTIAL_TYPE",
  }
  
export const residentialTypesUIHelper = (intl) =>
    Object.keys(RESIDENTIAL_TYPES).map((key) => ({
      value: parseInt(key),
      label: intl.formatMessage({ id: RESIDENTIAL_TYPES[key] }),
    }))
  
    