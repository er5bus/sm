export const LEVEL_1_SCHOOL = 1
export const LEVEL_2_SCHOOL = 2
export const LEVEL_3_SCHOOL = 3
export const LEVEL_4_SCHOOL = 4
export const LEVEL_5_SCHOOL = 5
export const LEVEL_6_SCHOOL = 6
export const LEVEL_1_MIDDLE_SCHOOL = 7
export const LEVEL_2_MIDDLE_SCHOOL = 8
export const LEVEL_3_MIDDLE_SCHOOL = 9
export const LEVEL_1_SECONDARY = 10
export const LEVEL_2_SECONDARY = 11
export const LEVEL_3_SECONDARY = 12
export const LEVEL_4_SECONDARY = 13
export const NOT_EDUCATED = 14
export const PROFESSIONAL_TRAINING = 15
export const SCHOOL_LEVELS = {
    [LEVEL_1_SCHOOL]: "SCHOOL_LEVELS.LEVEL_1_SCHOOL",
    [LEVEL_2_SCHOOL]: "SCHOOL_LEVELS.LEVEL_2_SCHOOL",
    [LEVEL_3_SCHOOL]: "SCHOOL_LEVELS.LEVEL_3_SCHOOL",
    [LEVEL_4_SCHOOL]: "SCHOOL_LEVELS.LEVEL_4_SCHOOL",
    [LEVEL_5_SCHOOL]: "SCHOOL_LEVELS.LEVEL_5_SCHOOL",
    [LEVEL_6_SCHOOL]: "SCHOOL_LEVELS.LEVEL_6_SCHOOL",
    [LEVEL_1_MIDDLE_SCHOOL]: "SCHOOL_LEVELS.LEVEL_1_MIDDLE_SCHOOL",
    [LEVEL_2_MIDDLE_SCHOOL]: "SCHOOL_LEVELS.LEVEL_2_MIDDLE_SCHOOL",
    [LEVEL_3_MIDDLE_SCHOOL]: "SCHOOL_LEVELS.LEVEL_3_MIDDLE_SCHOOL",
    [LEVEL_1_SECONDARY]: "SCHOOL_LEVELS.LEVEL_1_SECONDARY",
    [LEVEL_2_SECONDARY]: "SCHOOL_LEVELS.LEVEL_2_SECONDARY",
    [LEVEL_3_SECONDARY]: "SCHOOL_LEVELS.LEVEL_3_SECONDARY",
    [LEVEL_4_SECONDARY]: "SCHOOL_LEVELS.LEVEL_4_SECONDARY",
    [NOT_EDUCATED]: "SCHOOL_LEVELS.NOT_EDUCATED",
    [PROFESSIONAL_TRAINING]: "SCHOOL_LEVELS.PROFESSIONAL_TRAINING",
  }
  
export const schoolLevelsUIHelper = (intl) =>
    Object.keys(SCHOOL_LEVELS).map((key) => ({
      value: parseInt(key),
      label: intl.formatMessage({ id: SCHOOL_LEVELS[key] }),
    }))
  
    