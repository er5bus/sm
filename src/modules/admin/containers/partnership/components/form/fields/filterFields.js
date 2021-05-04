import * as Yup from "yup";

import {legalFormUIHelper, partnershipThemesUIHelper, partnershipTypeUIHelper} from "../../../../../UIHelpers";


import {
  ASYNC_SELECT,
  SELECT,
  INPUT,
  DATE_PICKER
} from "./../../../../../../../components/partials";

// Validation schema
export const partnershipFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "addressFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "activityFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "avantagesFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_FR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
];

export const partnershipFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "addressAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "activityAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
  {
    name: "avantagesAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_AR" }),
    size: 6,
    validation: Yup.string(),
    required: true,
  },
];


// Validation schema
export const partnershipFields = ({ intl }) => [
  {
    name: "signatureDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    required: true,
    size: 3,
  },
  {
    name: "partnerTypeExternalId",
    component: ASYNC_SELECT,
    loadOptions: partnershipTypeUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PARTNER_TYPE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PARTNER_TYPE" }),
    size: 3,
    validation: Yup.number(),
  },
  {
    name: "legalForm",
    component: SELECT,
    options: legalFormUIHelper(intl),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    size: 3,
    validation: Yup.number(),
  },
  {
    name: "themeExternalId",
    component: ASYNC_SELECT,
    loadOptions: partnershipThemesUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    size: 3,
    validation: Yup.number(),
  },
];
