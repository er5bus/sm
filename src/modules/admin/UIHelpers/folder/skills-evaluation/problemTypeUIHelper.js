export const PROBLEM_TYPE = { 
  1: "SKILLS_EVALUATION.PROBLEM_TYPE.PERSONAL_OR_FAMILY_ISSUES",
  2: "SKILLS_EVALUATION.PROBLEM_TYPE.EDUCATIONAL_ISSUES",
  3: "SKILLS_EVALUATION.PROBLEM_TYPE.Professional_issues" 
}


export const problemTypeUIHelper = (intl) =>
  Object.keys(PROBLEM_TYPE).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: PROBLEM_TYPE[key] }),
  }))
