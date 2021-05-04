export const IN_DEPTH_INTERVIEW = 7
export const INDIVIDUAL_INTERVIEW = 2
export const COLLECTIVE_WORKSHOP_OR_PROJECT_INFORMATION = 3
export const VISIT = 4
export const MEDIATION = 5
export const ADMINISTRATIVE = 6
export const FIRST_INTERVIEW = 1
export const NATURE = {
  [IN_DEPTH_INTERVIEW]: "EVENT.NATURE.IN-DEPTH_INTERVIEW",
  [INDIVIDUAL_INTERVIEW]: "EVENT.NATURE.INDIVIDUAL_INTERVIEW",
  [COLLECTIVE_WORKSHOP_OR_PROJECT_INFORMATION]: "EVENT.NATURE.COLLECTIVE_WORKSHOP_OR_PROJECT_INFORMATION",
  [VISIT]: "EVENT.NATURE.VISIT",
  [MEDIATION]: "EVENT.NATURE.MEDIATION",
  [ADMINISTRATIVE]: "EVENT.NATURE.ADMINISTRATIVE",
  [FIRST_INTERVIEW]: "EVENT.NATURE.FIRST_INTERVIEW",
}

export const NATURE_GROUP = {
  3: "EVENT.NATURE.COLLECTIVE_WORKSHOP_OR_PROJECT_INFORMATION",
}

export const DEFAULT_NATURE_GROUP_VALUE = 3

export const DEFAULT_NATURE_VALUE = 1

export const NATURE_CODE_COLOR = {
  1: "#3699FF",
  2: "#8950FC",
  3: "#1BC5BD",
  4: "#FFA800",
  5: "#181C32",
  6: "#20c997",
  7: "#0dcaf0",
}

export const NATURE_COLOR = {
  1: "primary",
  2: "info",
  3: "success",
  4: "warning",
  5: "dark",
  6: "teal",
  7: "cyan",
}

export const eventNatureUIHelper = (intl) =>
  Object.keys(NATURE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: NATURE[key] }),
  }))


export const eventGroupNatureUIHelper = (intl) =>
  Object.keys(NATURE_GROUP).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: NATURE_GROUP[key] }),
  }))
