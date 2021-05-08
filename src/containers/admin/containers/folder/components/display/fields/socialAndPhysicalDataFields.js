import {
  basicUtilitiesUIHelper,
  familyEconomicSituationsUIHelper,
  socialCoverageTypesUIHelper,
  residentialTypesUIHelper,
  exploitationFormulaTypesUIHelper
} from "./../../../../../UIHelpers"


// Validation schema
export const socialAndPhysicalDataFields = ({ intl }) => [
  {
    name: "residentialType",
    options: residentialTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.RESIDENTIAL_TYPE" }),
    size: 6,
  },
  {
    name: "exploitationFormulaType",
    options: exploitationFormulaTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.EXPLOITATION_FORMULA" }),
    size: 6,
  },
  {
    name: "basicUtilities",
    options: basicUtilitiesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.BASIC_UTILITIES" }),
    size: 12,
  },
  {
    name: "healthFacilities",
    options: basicUtilitiesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.HEALTH_FACILITIES" }),
    size: 6
  },
  {
    name: "familyEconomicSituation",
    options: familyEconomicSituationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.FAMILY_ECONOMIC_SITUATION" }),
    size: 6
  },
  {
    name: "hasSocialCoverage",
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.HAS_SOCIAL_COVERAGE" }),
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    size: 6
  },
  {
    name: "socialCoverageType",
    options: socialCoverageTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.SOCIAL_COVERAGE_TYPE" }),
    size: 6,
    hide: true,
    hideOn: "hasSocialCoverage",
  }

]

// Validation schema
export const socialAndPhysicalDataFieldsAr = ({ intl }) => [
  {
    name: "situationExplanationAr",
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.ECONOMIC_SITUATION_EXPLANATION_AR" }),
    size: 6
  }
]

export const socialAndPhysicalDataFieldsFr = ({ intl }) => [
  {
    name: "situationExplanationFr",
    label: intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.INPUT.ECONOMIC_SITUATION_EXPLANATION_FR" }),
    size: 12
  }
]
