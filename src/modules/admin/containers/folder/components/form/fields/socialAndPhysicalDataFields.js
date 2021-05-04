import * as Yup from "yup"

import {
  basicUtilitiesUIHelper,
  familyEconomicSituationsUIHelper,
  socialCoverageTypesUIHelper,
  residentialTypesUIHelper,
  exploitationFormulaTypesUIHelper
} from "./../../../../../UIHelpers"

import {
  CHECKBOX,
  SELECT,
  TEXTAREA
} from "./../../../../../../../components/partials"

// Validation schema
export const socialAndPhysicalDataFields = ({ intl }) => [
  {
    name: "residentialType",
    component: SELECT,
    options: residentialTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.RESIDENTIAL_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.RESIDENTIAL_TYPE" }),
    size: 6,
    validation: Yup.number()
  },
  {
    name: "exploitationFormulaType",
    component: SELECT,
    options: exploitationFormulaTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.EXPLOITATION_FORMULA" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.EXPLOITATION_FORMULA" }),
    size: 6,
    validation: Yup.number()
  },
  {
    name: "basicUtilities",
    component: SELECT,
    options: basicUtilitiesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.BASIC_UTILITIES" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.BASIC_UTILITIES" }),
    size: 4,
    validation: Yup.number()
  },
  {
    name: "healthFacilities",
    component: SELECT,
    options: basicUtilitiesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.HEALTH_FACILITIES" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.HEALTH_FACILITIES" }),
    validation: Yup.number(),
    size: 4
  },
  {
    name: "familyEconomicSituation",
    component: SELECT,
    options: familyEconomicSituationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.FAMILY_ECONOMIC_SITUATION" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.FAMILY_ECONOMIC_SITUATION" }),
    validation: Yup.number(),
    size: 4
  },
  {
    name: "hasSocialCoverage",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.HAS_SOCIAL_COVERAGE" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12
  },
  {
    name: "socialCoverageType",
    component: SELECT,
    options: socialCoverageTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.SOCIAL_COVERAGE_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.SOCIAL_COVERAGE_TYPE" }),
    validation: Yup.number(),
    size: 6,
    hide: true,
    hideOn: "hasSocialCoverage",
  }

]

// Validation schema
export const socialAndPhysicalDataFieldsAr = ({ intl }) => [
  {
    name: "situationExplanationAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.ECONOMIC_SITUATION_EXPLANATION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.ECONOMIC_SITUATION_EXPLANATION_AR" }),
    validation: Yup.string().min(2).max(200),
    size: 6
  }
]

export const socialAndPhysicalDataFieldsFr = ({ intl }) => [
  {
    name: "situationExplanationFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.ECONOMIC_SITUATION_EXPLANATION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.ECONOMIC_SITUATION_EXPLANATION_FR" }),
    validation: Yup.string().min(2).max(200),
    size: 12
  }
]
