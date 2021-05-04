import * as Yup from "yup";

import {
  civilStatusUIHelper,
  nationalityUIHelper 
} from "./../../../../../UIHelpers";

import {
  SELECT,
  INPUT,
  INPUT_MASK,
  CHECKBOX,
  DATE_PICKER,
  TEXTAREA
} from "./../../../../../../../components/partials";


// Validation schema
export const parentInformationFields = ({ intl }) => [
  {
    name: "birthday",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY" }),
    validation: Yup.string().required(),
    required: true,
    size: 3,
  },
  {
    name: "civilStatus",
    component: SELECT,
    options: civilStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIVIL_STATUS" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CIVIL_STATUS" }),
    validation: Yup.number().required(),
    size: 3,
  },
  {
    name: "idNumber",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    validation: Yup.string().required(),
    required: true,
    size: 3,
  },
  {
    name: "cnssNumber",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.CNSS_NUMBER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CNSS_NUMBER" }),
    size: 3,
    validation: Yup.string(),
    maxLength: 8
  },
  {
    name: "cnamNumber",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.CNAM_NUMBER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CNAM_NUMBER" }),
    size: 3,
    validation: Yup.string(),
    maxLength: 8
  },

  {
    name: "phone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARENT_PHONE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARENT_PHONE" }),
    validation: Yup.number().phone().required(),
    required: true,
    size: 3,
  },
  {
    name: "nationality",
    component: SELECT,
    options: nationalityUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.NATIONALITY" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.NATIONALITY" }),
    validation: Yup.number().required(),
    size: 3,
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EMAIL" }),
    size: 3,
    validation: Yup.string().email(),
  },
  {
    name: 'isLegalResponsible',
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: 'FOLDER.INPUT.IS_LEGAL_RESPONSIBLE' }) }
    ],
    initialValue: false,
    checkboxSize: 'sm',
    size: 12
  }
];

// Validation schema
export const parentInformationFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    size: 6,
    validation: Yup.string().min(2).max(255).required(),
    required: true,
  },
  {
    name: "lastNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6,
  },
  {
    name: "birthdayPlaceAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_AR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 6,
  },
  {
    name: "healthStatusAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_AR" }),
    validation: Yup.string().min(2).max(110).required(),
    required: true,

    size: 6,
  },
  {
    name: "schoolLevelAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_AR" }),
    validation: Yup.string().max(255).required(),
    size: 6,
  },
  {
    name: "professionAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROFESSION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PROFESSION_AR" }),
    validation: Yup.string().required(),
    size: 6,
    required: true,
  },
];


export const parentInformationFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6,
  },
  {
    name: "lastNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6,
  },
  {
    name: "birthdayPlaceFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 6,
  },
  {
    name: "healthStatusFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_FR" }),
    validation: Yup.string().min(2).max(110).required(),
    required: true,

    size: 6,
  },
  {
    name: "schoolLevelFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    validation: Yup.string().max(255).required(),
    size: 6,
    required: true
  },
  {
    name: "professionFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROFESSION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PROFESSION_FR" }),
    validation: Yup.string().required(),
    size: 6,
    required: true,
  },
];
