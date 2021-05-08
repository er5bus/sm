import * as Yup from "yup";

import {
  addressUIHelper,
  healthStatusUIHelper,
  schoolsUIHelper,
  schoolTypeUIHelper,
  genderUIHelper,
  schoolLevelsUIHelper
} from "./../../../../../UIHelpers";

import {
  ASYNC_SELECT,
  INPUT,
  INPUT_MASK,
  RADIO,
  DATE_PICKER,
  TEXTAREA,
  SELECT
} from "./../../../../../../../components/partials";

// Validation schema
export const personalDataFields = ({ intl }) => [
  
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
    name: "birthActNumber",
    component: INPUT_MASK,
    mask: "9999999/9999/9999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTH_ACT_NUMBRE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTH_ACT_NUMBRE" }),
    validation: Yup.string(),
    size: 3,
  },
  {
    name: "idNumber",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    size: 3,
    validation: Yup.string(),
    maxLength: 8
  },
  {
    name: "gender",
    component: RADIO,
    options: genderUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.GENDER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.GENDER" }),
    validation: Yup.number(),
    required: true,
    size: 3
  },
  {
    name: "headAddressExternalId",
    component: ASYNC_SELECT,
    loadOptions: addressUIHelper,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    validation: Yup.number().required(),
    required: true,
    size: 3,
  },
  {
    name: "lastSchoolExternalId",
    component: ASYNC_SELECT,
    loadOptions: schoolsUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_SCHOOL" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_SCHOOL" }),
    validation: Yup.number().required(),
    required: true,
    size: 3
  },
  {
    name: 'schoolType',
    component: SELECT,
    options: schoolTypeUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_TYPE' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_TYPE' }),
    validation: Yup.number(),
    size: 3
  },
  {
    name: 'schoolLevel',
    component: SELECT,
    options: schoolLevelsUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_LEVEL' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_LEVEL' }),
    validation: Yup.number(),
    size: 3
  },
  {
    name: "dropoutDate",
    component: DATE_PICKER,
    format: "MM/YYYY",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DROPOUT_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DROPOUT_DATE" }),
    validation: Yup.string(),
    // required: true,
    size: 4,
  },
  {
    name: "phone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PHONE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PHONE" }),
    validation: Yup.number().phone().required(),
    size: 4,
  },
  {
    name: "phoneParent",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PHONE_PARENT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PHONE_PARENT" }),
    validation: Yup.number().phone().required(),
    size: 4,
  },
  {
    name: "email",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EMAIL" }),
    size: 4,
    validation: Yup.string().email(),
  },
  {
    name: "healthStatus",
    component: SELECT,
    options: healthStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.HEALTH_STATUS" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.HEALTH_STATUS" }),
    validation: Yup.number().required(),
    size: 4
  },
];


// Validation schema
export const personalDataFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    size: 6,
    validation: Yup.string().min(2).max(200).required(),
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
    name: "streetNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    validation: Yup.string().min(2).max(110).required(),
    required: true,

    size: 12,
  },
  {
    name: "code",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CODE" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.CODE" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "cityAr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CITY" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.CITY" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
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
    name: "situationAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_AR" }),
    validation: Yup.string().required(),
    size: 6,
    required: true,
  },
];


export const personalDataFieldsFr = ({ intl }) => [
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
    name: "streetNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    validation: Yup.string().min(2).max(110).required(),
    required: true,

    size: 12,
  },
  {
    name: "code",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CODE" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.CODE" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "cityFr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CITY" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.CITY" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
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
    name: "situationFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_FR" }),
    validation: Yup.string().required(),
    size: 6,
    required: true,
  },
];
