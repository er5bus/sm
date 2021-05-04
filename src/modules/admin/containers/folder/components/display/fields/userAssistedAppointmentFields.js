import * as Yup from "yup"
import _ from "lodash"
import {
  SELECT,
  CHECKBOX,
  TEXTAREA,
} from "./../../../../../../../components/partials"

import { eventNatureUIHelper, DEFAULT_NATURE_VALUE, eventStatusUIHelper, eventContextUIHelper, eventThemeUIHelper } from "./../../../../../UIHelpers"


// Validation schema
export const appointmentFieldsAr = ({ intl }) => [
  {
    name: "observationrAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200).required(),
    required: true,
  },
];


export const appointmentFieldsFr = ({ intl }) => [
  {
    name: "observationFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 12,
  }
];


export const appointmentEditFields = _.memoize(({ intl }) => [
  {
    name: "isCanceled",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.CANCEL_APPOINTMENT" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12,
  },
])

// Validation schema
export const appointmentFields = _.memoize(({ intl }) => [
  {
    name: "subject",
    component: SELECT,
    options: eventNatureUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    validation: Yup.number().required(),
    required: true,
    initialValue: DEFAULT_NATURE_VALUE,
    size: 12,
  },
  {
    name: "context",
    component: SELECT,
    options: eventContextUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONTEXT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CONTEXT" }),
    size: 4,
    validation: Yup.number().required(),
  },
  {
    name: "way",
    component: SELECT,
    options: eventStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.WAY" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.WAY" }),
    size: 4,
    validation: Yup.number().required(),
  },
  {
    name: "theme",
    component: SELECT,
    options: eventThemeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    size: 4,
    validation: Yup.number().required(),
  }
]);
