export const EVENT_STATE = {
  1: "EVENT.STATE.NEW",
  2: "EVENT.STATE.CLOSED",
}

export const EVENT_STATE_COLOR = {
  1: "success",
  2: "danger",
}

export const eventStateUIHelper = (intl) =>
  Object.keys(EVENT_STATE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: EVENT_STATE[key] }),
  }))
