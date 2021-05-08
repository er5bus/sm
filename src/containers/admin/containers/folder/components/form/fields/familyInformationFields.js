import * as Yup from "yup";

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

import {
  CHECKBOX,
  RADIO,
  TEXTAREA
} from "./../../../../../../../components/partials";


// Validation schema
export const familyInformationFields = ({ intl }) => [
  {
    name: "isNormalCombination",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_NORMAL_COMBINATION" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12,
  },
  {
    name: "hasOneParentType",
    component: RADIO,
    options: hasOneParentIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.HAS_ONE_PARENT_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.HAS_ONE_PARENT_TYPE" }),
    size: 3,
    checkboxSize: "sm",
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    maxLength: 8
  },
  {
    name: "disjointedType",
    component: RADIO,
    options: disjointedIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.DISJOINTED_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DISJOINTED_TYPE" }),
    checkboxSize: "sm",
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    size: 3
  },
  {
    name: "oneParentAbsenceType",
    component: RADIO,
    options: oneParentAbsenceIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.ONE_PARENT_ABSENCE_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.ONE_PARENT_ABSENCE_TYPE" }),
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    checkboxSize: "sm",
    size: 3,
  },
  {
    name: "withoutSupportType",
    component: RADIO,
    options: withoutSupportTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.WITHOUT_SUPPORT_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.WITHOUT_SUPPORT_TYPE" }),
    hide: true,
    hideOn: "isNormalCombination",
    condition: true,
    checkboxSize: "sm",
    size: 3
  },
  {
    name: "isRegenerativeFormula",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_REGENERATIVE_FORMULA" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 4,
  },
  {
    name: "isExtendedFamily",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_EXTENDED_FAMILY" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 4,
  },
  {
    name: "isFamilyReception",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_FAMILY_RECEPTION" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 4,
  },
  {
    name: "regenerativeFormulaType",
    component: RADIO,
    options: regenerativeFormulaTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.REGENERATIVE_FORMULA_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.REGENERATIVE_FORMULA_TYPE" }),
    checkboxSize: "sm",
    hide: true,
    hideOn: "isRegenerativeFormula",
    condition: true,
    // required: true,
    size: 4,
  },
  {
    name: "extendedFamilyType",
    component: RADIO,
    options: extendedFamilyTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.EXTENDED_FAMILY_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EXTENDED_FAMILY_TYPE" }),
    hide: true,
    hideOn: "isExtendedFamily",
    condition: true,
    checkboxSize: "sm",
    size: 4,
  },
  {
    name: "familyReceptionType",
    component: RADIO,
    options: familyReceptionTypeIndicationsUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.FAMILY_RECEPTION_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.FAMILY_RECEPTION_TYPE" }),
    hide: true,
    hideOn: "isFamilyReception",
    condition: true,
    checkboxSize: "sm",
    size: 4,
  },
  {
    name: "childrenMotherRelationship",
    component: RADIO,
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CHILDREN_MOTHER_RELATIONSHIP" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CHILDREN_MOTHER_RELATIONSHIP" }),
    size: 4,
  },
  {
    name: "childrenFatherRelationship",
    component: RADIO,
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CHILDREN_FATHER_RELATIONSHIP" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CHILDREN_FATHER_RELATIONSHIP" }),
    size: 4,
  },
  {
    name: "brothersRelationship",
    component: RADIO,
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.BROTHERS_RELATIONSHIP" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BROTHERS_RELATIONSHIP" }),
    size: 4,
  },
  {
    name: "beneficiaryRelationshipFamily",
    component: RADIO,
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.BENEFICIARY_RELATIONSHIP_FAMILY" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BENEFICIARY_RELATIONSHIP_FAMILY" }),
    size: 4,
  },
  {
    name: "parentalRelationship",
    component: RADIO,
    options: relationShipUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARENTAL_RELATIONSHIP" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARENTAL_RELATIONSHIP" }),
    size: 4,
  },

];


// Validation schema
export const familyInformationFieldsAr = ({ intl }) => [
  {
    name: "conclusionsAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONCLUSIONS_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CONCLUSIONS_AR" }),
    validation: Yup.string(),
    size: 12,
  },
];


export const familyInformationFieldsFr = ({ intl }) => [
  {
    name: "conclusionsFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONCLUSIONS_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CONCLUSIONS_FR" }),
    validation: Yup.string(),
    size: 12,
  },
];
