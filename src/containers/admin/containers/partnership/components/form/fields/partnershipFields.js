import * as Yup from "yup"
import _ from "lodash"
import {
  SELECT,
  TEXTAREA,
  UPLOAD,
  DATE_PICKER,
  INPUT,
  ASYNC_SELECT
} from "./../../../../../../../components/partials"

import { legalFormUIHelper, partnershipTypeUIHelper, partnershipThemesUIHelper } from "./../../../../../UIHelpers"


export const partnershipFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    size: 6,
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "addressFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "activityFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "avantagesFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_FR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
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
    validation: Yup.string().max(30).required(),
    required: true,
  },
  {
    name: "addressAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "activityAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_AR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
  {
    name: "avantagesAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_AR" }),
    size: 6,
    validation: Yup.string().max(500).required(),
    required: true,
  },
];


// Validation schema
export const partnershipFields = _.memoize(({ intl }) => [
  {
    name: "signatureDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    validation: Yup.string().required(),
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
    validation: Yup.number().required(),
  },
  {
    name: "legalForm",
    component: SELECT,
    options: legalFormUIHelper(intl),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    size: 3,
    validation: Yup.number().required(),
  },
  {
    name: "themeExternalId",
    component: ASYNC_SELECT,
    loadOptions: partnershipThemesUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    size: 3,
    validation: Yup.number().required(),
  },
  {
    name: "logo",
    component: UPLOAD,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LOGO" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LOGO" }),
    required: true,
    size: 12,
  }
]);
