export const STATUS_INFIRM = 1
export const STATUS_HANDICAP = 2
export const STATUS_NORMAL = 3
export const STATUS = {
    [STATUS_INFIRM]: "STATUS_INFIRM",
    [STATUS_HANDICAP]: "STATUS_HANDICAP",
    [STATUS_NORMAL]: "STATUS_NORMAL",
  }
  
export const healthStatusUIHelper = (intl) =>
    Object.keys(STATUS).map((key) => ({
      value: parseInt(key),
      label: intl.formatMessage({ id: STATUS[key] }),
    }))
  
    