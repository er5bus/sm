export const OTHER_SITUATIONS = { 
  1: "ORIENTATION.OTHER_SITUATION.DISEASE_INDICATION",
  2: "ORIENTATION.OTHER_SITUATION.DETENTION_INDICATION",
  3: "ORIENTATION.OTHER_SITUATION.RELOCATION_INDICATION" ,
  4: "ORIENTATION.OTHER_SITUATION.MORE_REACHABLE_INDICATION",
}

export const orientationOtherSituationUIHelper = (intl) =>
  Object.keys(OTHER_SITUATIONS).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: OTHER_SITUATIONS[key] }),
  }))
