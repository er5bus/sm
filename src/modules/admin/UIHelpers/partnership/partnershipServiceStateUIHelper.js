export const PARTNERSHIP_ASSOCIATE_SERVICE_STATE = { 
  1: "PARTNERSHIP.ASSOCIATE_SERVICE_STATE.IN_PROGRESS",
  2: "PARTNERSHIP.ASSOCIATE_SERVICE_STATE.SUSPENDED",
  3: "PARTNERSHIP.ASSOCIATE_SERVICE_STATE.FINISHED",
  4: "PARTNERSHIP.ASSOCIATE_SERVICE_STATE.PERMANENT" 
}

export const PARTNERSHIP_ASSOCIATE_SERVICE_STATE_COLOR = {
  1: "success",
  2: "danger",
  3: "warning",
  4: "primary"
}

export const partnershipServiceStateUIHelper = (intl) =>
  Object.keys(PARTNERSHIP_ASSOCIATE_SERVICE_STATE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: PARTNERSHIP_ASSOCIATE_SERVICE_STATE[key] }),
  }))
