export const RELATIONSHIP = { 
  1: "FOLDER.FAMILTY_INFORMATION.GOOD_RELATIONSHIP_INDICATION",
  2: "FOLDER.FAMILTY_INFORMATION.NORMAL_RELATIONSHIP_INDICATION",
  3: "FOLDER.FAMILTY_INFORMATION.NERVOUS_RELATIONSHIP_INDICATION",
  4: "FOLDER.FAMILTY_INFORMATION.HOSTILITY_RELATIONSHIP_INDICATION",
  5: "FOLDER.FAMILTY_INFORMATION.BREAK_RELATIONSHIP_INDICATION",
}

export const relationShipUIHelper = (intl) =>
  Object.keys(RELATIONSHIP).map((value) => ({
    value: parseInt(value),
    label: intl.formatMessage({ id: RELATIONSHIP[value] }),
  }))