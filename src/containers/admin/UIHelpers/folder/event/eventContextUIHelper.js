export const CONTEXT = { 
  1: "EVENT.CONTEXT.GENERAL_EVENT",
  2: "EVENT.CONTEXT.GUIDE_CAREER",
  3: "EVENT.CONTEXT.FOLLOW_UP" ,
  4: "EVENT.CONTEXT.OTHER"
}

export const eventContextUIHelper = (intl) =>
  Object.keys(CONTEXT).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: CONTEXT[key] }),
  }))
