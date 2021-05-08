export const ORIENTATION_STATE = { 
  1: "ORIENTATION.STATE.TO_VALIDATE_INDICATION",
  2: "ORIENTATION.STATE.IS_APPROVED_INDICATION",
  3: "ORIENTATION.STATE.CANCELED_INDICATION" 
}


export const ORIENTATION_STATE_COLOR = { 
  1: "warning",
  2: "success",
  3: "danger"
}


export const orientationStateUIHelper = (intl) =>
  Object.keys(ORIENTATION_STATE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: ORIENTATION_STATE[key] }),
  }))
