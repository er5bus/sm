export const GOALS_TYPES = { 
    1: "GOALS_TYPE.RETURN_TO_SCHOOL_GOALS_TYPE",
    2: "GOALS_TYPE.VOCATIONAL_TRAINING_GOALS_TYPE",
    3: "GOALS_TYPE.GO_JOB_GOALS_TYPE",
  }
  
export const goalsTypesUIHelper = (intl) =>
    Object.keys(GOALS_TYPES).map((key) => ({
      value: parseInt(key),
      label: intl.formatMessage({ id: GOALS_TYPES[key] }),
    }))
  
    