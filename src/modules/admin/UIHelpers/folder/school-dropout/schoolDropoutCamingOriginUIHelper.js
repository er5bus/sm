export const CAME_ORIGIN = { 
  1: "SCHOOL_DROPOUT.CAME_ORIGIN.ORGANIZATION",
  2: "SCHOOL_DROPOUT.CAME_ORIGIN.MEDIA",
  3: "SCHOOL_DROPOUT.CAME_ORIGIN.WORD_OF_MOUTH" ,
  4: "SCHOOL_DROPOUT.CAME_ORIGIN.PARTNER"
}


export const schoolDropoutCamingOriginUIHelper = (intl) =>
  Object.keys(CAME_ORIGIN).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: CAME_ORIGIN[key] }),
  }))
