import * as Yup from "yup";

import { documentTypeUIHelper } from "./../../../../../../../UIHelpers";

import {
  SELECT,
  INPUT,
  UPLOAD,
  CHECKBOX,
} from "./../../../../../../../../../components/partials";

// Validation schema
export const folderDocumentFields = ({ intl }) => [
  
  {
    name: "file",
    component: UPLOAD,
    label: intl.formatMessage({ id: "DOCUMENT.INPUT.FILE" }),
    placeholder: intl.formatMessage({ id: "DOCUMENT.INPUT.FILE" }),
    validation: Yup.string(),
    required: true,
    size: 12,
  },
  {
    name: "tag",
    component: SELECT,
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "DOCUMENT.INPUT.TAG" }),
    placeholder: intl.formatMessage({ id: "DOCUMENT.INPUT.TAG" }),
    size: 12,
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "isValid",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "DOCUMENT.INPUT.DOCUMENT_IS_VALID" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12
  }
];


// Validation schema
export const folderDocumentFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "DOCUMENT.INPUT.NAME_AR" }),
    placeholder: intl.formatMessage({ id: "DOCUMENT.INPUT.NAME_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200),
  },
];


export const folderDocumentFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "DOCUMENT.INPUT.NAME_FR" }),
    placeholder: intl.formatMessage({ id: "DOCUMENT.INPUT.NAME_FR" }),
    validation: Yup.string().min(2).max(200),
    size: 12
  },
];
