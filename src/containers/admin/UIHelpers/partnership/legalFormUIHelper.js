export const LEGAL_FORM = { 
  1: "PARTNERSHIP.LEGAL_FORM.COMPANY_FORM",
  2: "PARTNERSHIP.LEGAL_FORM.INDIVIDUAL_FORM",
  3: "PARTNERSHIP.LEGAL_FORM.ASSOCIATION_FORM" ,
  4: "PARTNERSHIP.LEGAL_FORM.NGO_FORM",
  5: "PARTNERSHIP.LEGAL_FORM.PUBLIC_FORM"
}


export const legalFormUIHelper = (intl) =>
  Object.keys(LEGAL_FORM).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: LEGAL_FORM[key] }),
  }))
