export const DIAGNOSIS_FORM = { 
  1: "SKILLS_EVALUATION.DIAGNOSIS_FORM.COLLECTIVE_WORKSHOP",
  2: "SKILLS_EVALUATION.DIAGNOSIS_FORM.INDIVIDUAL_INTERVIEW",
}


export const diagnosisFormUIHelper = (intl) =>
  Object.keys(DIAGNOSIS_FORM).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: DIAGNOSIS_FORM[key] }),
  }))
