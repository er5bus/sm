import * as Yup from "yup"
import _ from "lodash"
import {
  CREATABLE_SELECT,
  SELECT,
  TEXTAREA,
  DATE_PICKER,
  CHECKBOX,
  TIME_PICKER
} from "./../../../../../../../components/partials"

import { consultantUIHelper, eventNatureUIHelper, DEFAULT_NATURE_VALUE, eventStatusUIHelper, eventContextUIHelper, eventThemeUIHelper } from "./../../../../../UIHelpers"

export const folderFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    size: 6,
  },
  {
    name: "lastNameAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
    size: 6,
  }
];

export const folderFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_FR" }),
    size: 6,
  },
  {
    name: "lastNameFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_FR" }),
    size: 6,
  },
];

export const appointmentFieldsAr = ({ intl }) => [
  {
    name: "observationrAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200),
    required: true,
  },
];


export const appointmentFieldsFr = ({ intl }) => [
  {
    name: "observationFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    validation: Yup.string().min(2).max(200),
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
    name: "date",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    validation: Yup.string().nullable().required(),
    required: true,
    size: 4,
  },
  {
    name: "startHour",
    component: TIME_PICKER,
    dateFormat: false,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.START_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.START_DATE" }),
    validation: Yup.string().required(),
    timeFormat: true,
    required: true,
    size: 4,
  },
  {
    name: "endHour",
    component: TIME_PICKER,
    dateFormat: false,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.END_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.END_DATE" }),
    validation: Yup.string().required(),
    required: true,
    timeFormat: true,
    size: 4
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
  },
  {
    name: "participants",
    component: SELECT,
    loadOptions: consultantUIHelper,
    multiple: true,
    initialValue: [],
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTICIPANTS" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARTICIPANTS" }),
    validation: Yup.array(),
    required: true,
    size: 6
  },
  {
    name: "externalParticipants",
    component: CREATABLE_SELECT,
    multiple: true,
    initialValue: [],
    label: intl.formatMessage({ id: "FOLDER.INPUT.EXTERNAL_PARTICIPANTS" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EXTERNAL_PARTICIPANTS" }),
    validation: Yup.array().of(Yup.string().email()),
    required: true,
    size: 6
  },
  {
    name: "joinMe",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.JOIN_ME" }) }
    ],
    checkboxSize: "sm",
    initialValue: false,
    size: 12,
  },
]);
