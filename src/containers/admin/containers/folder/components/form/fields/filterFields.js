import * as Yup from "yup";

import {
  addressUIHelper, 
  schoolsUIHelper,
  genderUIHelper,
  folderStatusUIHelper,
  folderStateUIHelper,
  consultantUIHelper 
} from "./../../../../../UIHelpers"

import {
  ASYNC_SELECT,
  SELECT,
  INPUT,
  INPUT_MASK,
  RADIO,
  DATE_PICKER
} from "./../../../../../../../components/partials";

// Validation schema
export const personalDataFields = ({ intl }) => [
  {
    name: "gender",
    component: RADIO,
    options: genderUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.GENDER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.GENDER" }),
    validation: Yup.number(),
    size: 4
  },
  {
    name: "status",
    component: RADIO,
    options: folderStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.STATUS" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.STATUS" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "state",
    component: RADIO,
    options: folderStateUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "birthday",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY" }),
    size: 4,
  },
  {
    name: "birthActNumber",
    component: INPUT_MASK,
    mask: "9999/99999/99",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTH_ACT_NUMBRE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTH_ACT_NUMBRE" }),
    validation: Yup.string(),
    size: 4,
  },
  {
    name: "idNumber",
    type: "number",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    size: 4,
    validation: Yup.number(),
  },
  {
    name: "headAddressExternalId",
    component: ASYNC_SELECT,
    loadOptions: addressUIHelper,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    validation: Yup.number(),
    size: 4,
  },  
  {
    name: "lastSchoolExternalId",
    component: ASYNC_SELECT,
    loadOptions: schoolsUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_SCHOOL" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_SCHOOL" }),
    validation: Yup.number(),
    size: 4
  },
  {
    name: "dropoutDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DROPOUT_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DROPOUT_DATE" }),
    size: 4,
  },
  {
    name: "cp",
    component: SELECT,
    loadOptions: consultantUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.RESPOSIBLE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.RESPOSIBLE" }),
    size: 3,
    validation: Yup.number(),
  },
  
  {
    name: "phone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PHONE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PHONE" }),
    validation: Yup.number().phone(),
    size: 3,
  },
  {
    name: "phoneParent",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PHONE_PARENT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PHONE_PARENT" }),
    validation: Yup.number().phone(),
    required: false,
    size: 3,
  },
  {
    name: "createdAt",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_CREATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE_CREATE" }),
    size: 3,
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
    validation: Yup.string().min(2).max(200),
  },
  {
    name: "lastNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
    validation: Yup.string().min(2).max(200),
    size: 6,
  },
  {
    name: "birthdayPlaceAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_AR" }),
    validation: Yup.string().min(2).max(200),
    size: 6,
  },
  {
    name: "streetNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    validation: Yup.string().min(2).max(110),
    size: 6,
  },
  {
    name: "schoolLevelAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_AR" }),
    validation: Yup.string().max(255),
    size: 6,
  }
];


export const personalDataFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_FR" }),
    validation: Yup.string().min(2).max(200),
    size: 6,
  },
  {
    name: "lastNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_FR" }),
    validation: Yup.string().min(2).max(200),
    size: 6,
  },
  {
    name: "birthdayPlaceFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_FR" }),
    validation: Yup.string().min(2).max(200),
    size: 6,
  },
  {
    name: "streetNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    validation: Yup.string().min(2).max(110),
    size: 6,
  },
  {
    name: "schoolLevelFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    validation: Yup.string().max(255),
    size: 6,
  }
];
