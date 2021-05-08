export const GENDER_MALE = 1
export const GENDER_FEMALE = 2

export const GENDER = { 
  [GENDER_MALE]: "USER.MALE",
  [GENDER_FEMALE]: "USER.FEMALE",
}

export const genderUIHelper = (intl) =>
  Object.keys(GENDER).map((value) => ({
    value: parseInt(value),
    label: intl.formatMessage({ id: GENDER[value] }),
  }))
