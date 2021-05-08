import {
  relationShipUIHelper,
  hasOneParentIndicationsUIHelper,
  disjointedIndicationsUIHelper,
  oneParentAbsenceIndicationsUIHelper,
  withoutSupportTypeIndicationsUIHelper,
  regenerativeFormulaTypeIndicationsUIHelper,
  extendedFamilyTypeIndicationsUIHelper,
  familyReceptionTypeIndicationsUIHelper
} from "./../../../../../UIHelpers";


// Validation schema
export const familyInformationFields = ({ intl }) => [
  {
    name: "isNormalCombination",
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    label: intl.formatMessage({ id: "FOLDER.INPUT.IS_NORMAL_COMBINATION" }),
    initialValue: false,
    size: 12,
  },
  {
    name: "hasOneParentType",
    options: hasOneParentIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.HAS_ONE_PARENT_TYPE" }),
    size: 6,
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
  },
  {
    name: "disjointedType",
    options: disjointedIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.DISJOINTED_TYPE" }),
    checkboxSize: "sm",
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    size: 6
  },
  {
    name: "oneParentAbsenceType",
    options: oneParentAbsenceIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.ONE_PARENT_ABSENCE_TYPE" }),
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    size: 6,
  },
  {
    name: "withoutSupportType",
    options: withoutSupportTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.WITHOUT_SUPPORT_TYPE" }),
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    size: 6
  },
  {
    name: "isRegenerativeFormula",
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    label: intl.formatMessage({ id: "FOLDER.INPUT.IS_REGENERATIVE_FORMULA" }),
    initialValue: false,
    checkboxSize: "sm",
    size: 4,
  },
  {
    name: "isExtendedFamily",
    label: intl.formatMessage({ id: "FOLDER.INPUT.IS_EXTENDED_FAMILY" }),
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    initialValue: false,
    size: 4,
  },
  {
    name: "isFamilyReception",
    label: intl.formatMessage({ id: "FOLDER.INPUT.IS_FAMILY_RECEPTION" }),
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    initialValue: false,
    size: 4,
  },
  {
    name: "regenerativeFormulaType",
    options: regenerativeFormulaTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.REGENERATIVE_FORMULA_TYPE" }),
    hide: true,
    hideOn: "isRegenerativeFormula",
    condition: true,
    size: 4,
  },
  {
    name: "extendedFamilyType",
    options: extendedFamilyTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.EXTENDED_FAMILY_TYPE" }),
    hide: true,
    hideOn: "isExtendedFamily",
    condition: true,
    size: 4,
  },
  {
    name: "familyReceptionType",
    options: familyReceptionTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.FAMILY_RECEPTION_TYPE" }),
    hide: true,
    hideOn: "isFamilyReception",
    condition: true,
    size: 4,
  },
  {
    name: "childrenMotherRelationship",
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CHILDREN_MOTHER_RELATIONSHIP" }),
    size: 4,
  },
  {
    name: "childrenFatherRelationship",
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CHILDREN_FATHER_RELATIONSHIP" }),
    size: 4,
  },
  {
    name: "brothersRelationship",
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.BROTHERS_RELATIONSHIP" }),
    size: 4,
  },
  {
    name: "beneficiaryRelationshipFamily",
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.BENEFICIARY_RELATIONSHIP_FAMILY" }),
    size: 4,
  },
  {
    name: "parentalRelationship",
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARENTAL_RELATIONSHIP" }),
    size: 4,
  },

];


// Validation schema
export const familyInformationFieldsAr = ({ intl }) => [
  {
    name: "conclusionsAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONCLUSIONS_AR" }),
    size: 12,
  },
];


export const familyInformationFieldsFr = ({ intl }) => [
  {
    name: "conclusionsFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONCLUSIONS_FR" }),
    size: 12,
  },
];
