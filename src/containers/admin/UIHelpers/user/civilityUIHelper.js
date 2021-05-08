export const CIVILITIES = [
  { value: 1, label: "USER.CIVILITIES.MR" },
  { value: 2, label: "USER.CIVILITIES.MRS" },
  /*{ value: 3, label: "USER.CIVILITIES.MISS" }*/
]

export const civilityUIHelper = (intl) =>
  CIVILITIES.map((value) => ({
    ...value,
    label: intl.formatMessage({ id: value.label }),
  }))
