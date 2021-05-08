export const DAYS = {
  1: "DAYS.MONDAY",
  2: "DAYS.TUESDAY",
  3: "DAYS.WEDNESDAY",
  4: "DAYS.THURSDAY",
  5: "DAYS.FRIDAY",
  6: "DAYS.SATURDAY",
  7: "DAYS.SUNDAY"
}

export const weekUIHelper = (intl) => Object.keys(DAYS)
  .map((key) => ({ value: parseInt(key, 10), label: intl.formatMessage({ id: DAYS[key] }) }))
