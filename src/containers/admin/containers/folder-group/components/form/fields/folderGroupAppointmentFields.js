import * as Yup from "yup"
import _ from "lodash"
import {
  SELECT,
  TEXTAREA,
  DATE_PICKER,
  TIME_PICKER,
  CHECKBOX
} from "./../../../../../../../components/partials"

import { eventStatusUIHelper, eventContextUIHelper, eventThemeUIHelper, eventGroupNatureUIHelper, DEFAULT_NATURE_GROUP_VALUE } from "./../../../../../UIHelpers"


export const appointmentEditFields = ({ intl }) => [
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
]


export const appointmentFieldsAr = ({ intl }) => [
  {
    name: "observationAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    size: 12,
    validation: Yup.string().max(1000),
    required: true,
  },
];


export const appointmentFieldsFr = ({ intl }) => [
  {
    name: "observationFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    validation: Yup.string().max(1000),
    required: true,
    size: 12,
  }
];

// Validation schema
export const appointmentFields = _.memoize(({ intl }) => [
  {
    name: "subject",
    component: SELECT,
    options: eventGroupNatureUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    validation: Yup.number().required(),
    required: true,
    initialValue: DEFAULT_NATURE_GROUP_VALUE,
    size: 12,
  },
  {
    name: "date",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    validation: Yup.string().required().nullable(),
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
  }
]);


export const appointmentDisplayFields = ({ intl }) => [
  /*{
    name: {
      [FR]: "folderGroupDetails.nameFr",
      [AR]: "folderGroupDetails.nameAr"
    },
    size: 12,
    label: intl.formatMessage({ id: "FOLDER.INPUT.GROUP_FOLDER" }),
  },
  {
    name: "folders",
    openShowPage: ({ id }, history) => history.push(routes.folderShow.path.replace(":param", id)),
    addAnotherActions: [
      {
        "label": intl.formatMessage({ id: "GENERAL.ADD_EVENT" }),
        "iconPath": "/media/svg/icons/Navigation/Plus.svg",
        "onShowCondition": ({ hasEvent }) => !hasEvent,
        "onClick": ({ id }, history, item) => {
          const { subject, context, theme, way, date } = item
          history.push({
            pathname: eventRoutes.eventCreate.path.replace(":param", id),
            search: "?" + querystring.stringify({
              nature: subject,
              theme,
              context,
              way,
              state: 1,
              date
            })
          })
        }
      },
      {
        "label": intl.formatMessage({ id: "GENERAL.SHOW_EVENT" }),
        "iconPath": "/media/svg/icons/General/Clipboard.svg",
        "onShowCondition": ({ hasEvent }) => hasEvent,
        "onClick": ({ id, event }, history) => history.push(eventRoutes.eventShow.path.replace(":param", id).replace(":eventParam", event.id ) )
      }
    ],
    columns: [
      {
        dataField: "id",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.ID",
        }),
      },
      {
        dataField: "firstNameAr",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.FULL_NAME",
        }),
        formatter: columnFormatters.BeneficiaryColumnFormatter
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "FOLDER.INPUT.FOLDERS" }),
    size: 12,
  },*/
]
