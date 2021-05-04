export const ESTABLISHMENTS = { 
  1: "ORIENTATION.ESTABLISHMENT.MINISTRY_EDUCATION_INDICATION",
  2: "ORIENTATION.ESTABLISHMENT.TRAINING_CENTER_INDICATION",
  3: "ORIENTATION.ESTABLISHMENT.CDIS_INDICATION",
  4: "ORIENTATION.ESTABLISHMENT.ILTAL9_INDICATION",
}

export const orientationToEstablishmentUIHelper = (intl) =>
  Object.keys(ESTABLISHMENTS).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: ESTABLISHMENTS[key] }),
  }))

