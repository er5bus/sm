
export const SCHOOL_TYPE_PUBLIC = 1
export const SCHOOL_TYPE_PRIVATE = 2
export const SCHOOL_TYPE_ONG = 3
export const SCHOOL_TYPE_ORGANIZATION = 4


export const SCHOOL_TYPE = {
  [SCHOOL_TYPE_PUBLIC]: "SCHOOL_TYPE.PUBLIC",
  [SCHOOL_TYPE_PRIVATE]: "SCHOOL_TYPE.PRIVATE",
  [SCHOOL_TYPE_ONG]: "SCHOOL_TYPE.ONG" ,
  [SCHOOL_TYPE_ORGANIZATION]: "SCHOOL_TYPE.ORGANIZATION"
}


export const schoolTypeUIHelper = (intl) =>
  Object.keys(SCHOOL_TYPE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: SCHOOL_TYPE[key] }),
  }))
