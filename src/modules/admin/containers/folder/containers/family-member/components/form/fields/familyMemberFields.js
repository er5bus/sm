import * as Yup from "yup";

import { documentTypeUIHelper, situationTypesUIHelper } from "./../../../../../../../UIHelpers";

import {
  INPUT,
  /*DATE_PICKER,*/
  TEXTAREA,
  SELECT, INPUT_MASK
} from "./../../../../../../../../../components/partials";


// Validation schema
export const familyMemberFields = ({ intl }) => [
  {
    name: "age",
    component: INPUT_MASK,
    mask: "99",
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.AGE" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.AGE" }),
    validation: Yup.string(),
    required: true,
    size: 4
  },
  {
    name: "situationType",
    component: SELECT,
    options: situationTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.SITUATION_TYPE" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.SITUATION_TYPE" }),
    validation: Yup.number(),
    size: 4,
  },
];


// Validation schema
export const familyMemberFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.FIRST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.FIRST_NAME_AR" }),
    validation: Yup.string().required(),
    required: true,
    size: 6,
  },
  {
    name: "lastNameAr",
    component: INPUT,
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.LAST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.LAST_NAME_AR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
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
    name: "notesAr",
    component: TEXTAREA,
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.NOTES_AR" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.NOTES_AR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  
];


export const familyMemberFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.FIRST_NAME_FR" }),
    validation: Yup.string(),
    required: true,
    size: 6,
  },
  {
    name: "lastNameFr",
    component: INPUT,
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.LAST_NAME_FR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "schoolLevelFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    validation: Yup.string().max(255).required(),
    size: 6,
  },
  {
    name: "notesFr",
    component: TEXTAREA,
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.NOTES_FR" }),
    placeholder: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.NOTES_FR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
];
