export const THEME = { 
  1: "EVENT.THEME.ACCESS_TO_EMPLOYMENT",
  2: "EVENT.THEME.TRAINING",
  3: "EVENT.THEME.PROJECT",
  4: "EVENT.THEME.HEALTH",
  5: "EVENT.THEME.CITIZENSHIP",
  6: "EVENT.THEME.CULTURE",
  7: "EVENT.THEME.HOBBIES"
}

export const eventThemeUIHelper = (intl) =>
  Object.keys(THEME).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: THEME[key] }),
  }))

