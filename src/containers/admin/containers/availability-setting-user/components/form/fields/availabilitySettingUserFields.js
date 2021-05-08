import * as Yup from "yup"
import { TIME_PICKER, DATE_PICKER, SELECT, PRELOADED_TABLE, CHECKBOX, ASYNC_SELECT } from "./../../../../../../../components/partials"
import { workshopsDurationUIHelper, weekUIHelper, consultantUIHelper } from "./../../../../../UIHelpers"
import * as columnFormatters from "./../../column-formatters"

const availabilitySettingUserFields = ({ intl }) => [
  {
    name: "user",
    label: intl.formatMessage({ id: "FOLDER.INPUT.USER" })  ,
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.USER" }),
    component: ASYNC_SELECT,
    loadOptions: consultantUIHelper,
    size: 4,
    required: true,
    validation: Yup.string().required(),
  },
  {
    name: "startDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    validation: Yup.string().nullable().required(),
    required: true,
    timeFormat: true,
    size: 4
  },
  {
    name: "endDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_END" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE_END" }),
    validation: Yup.string().nullable().required(),
    required: true,
    timeFormat: true,
    size: 4
  },
  {
    name: "defaultDays",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.DEFAULT_DAYS" }) }
    ],
    initialValue: true,
    defaultValue: false,
    checkboxSize: "sm",
    size: 12,
  },
  {
    name: "days",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DAYS" })  ,
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DAYS" }),
    component: SELECT,
    options: weekUIHelper(intl),
    size: 4,
    multiple: true,
    required: true,
    hide: true,
    hideOn: "defaultDays",
    condition: false,
    initialValue: [],
    validation: Yup.array().when('defaultDays', {
      is: false,
      then: Yup.array().nullable().required(),
      otherwise: Yup.array().nullable(),
    }),
  },
  {
    name: "defaultTime",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.DEFAULT_TIME" }) }
    ],
    initialValue: true,
    defaultValue: false,
    checkboxSize: "sm",
    size: 12,
  },
  {
    name: "beforeMiddayStartHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_START_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_START_DATE" }),
    timeFormat: true,
    initialValue: null,
    hide: true,
    hideOn: "defaultTime",
    condition: false,
    required: true,
    validation: Yup.string().when('defaultTime', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    size: 3
  },
  {
    name: "beforeMiddayEndHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_END_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_END_DATE" }),
    validation: Yup.string().when('defaultTime', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    required: true,
    timeFormat: true,
    initialValue: null,
    hide: true,
    hideOn: "defaultTime",
    condition: false,
    size: 3
  },
  {
    name: "afterMiddayStartHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_START_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_START_DATE" }),
    validation: Yup.string().when('defaultTime', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    timeFormat: true,
    required: true,
    hide: true,
    initialValue: null,
    hideOn: "defaultTime",
    condition: false,
    size: 3
  },
  {
    name: "afterMiddayEndHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_END_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_END_DATE" }),
    validation: Yup.string().when('defaultTime', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    required: true,
    timeFormat: true,
    hide: true,
    initialValue: null,
    hideOn: "defaultTime",
    condition: false,
    size: 3
  },
  {
    name: "timeBetweenAppointment",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TIME_BETWEEN_APPOINTMENT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TIME_BETWEEN_APPOINTMENT" }),
    validation: Yup.string().when('defaultTime', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    timeFormat: true,
    hide: true,
    initialValue: null,
    hideOn: "defaultTime",
    condition: false,
    required: true,
    size: 4
  },
  {
    name: "defaultWorkshopsDuration",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.DEFAULT_WORKSHOP_DURATIONS" }) }
    ],
    initialValue: true,
    defaultValue: false,
    checkboxSize: "sm",
    size: 12,
  },
  {
    name: "workshopsDurationSet",
    component: PRELOADED_TABLE,
    loadAttrName: "workshopsDurationSetDetails",
    columns: [
      {
        dataField: "eventNature",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.NATURE"
        }),
        formatter: columnFormatters.NatureColumnFormatter
      },
      {
        dataField: "sessionTime",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.SESSTION_TIME"
        }),
        fieldType: TIME_PICKER,
        format: "HH:mm",
        editable: true
      },
    ],
    keyField: "eventNature",
    initialValue: workshopsDurationUIHelper(intl),
    validation: Yup.array().when('defaultWorkshopsDuration', {
      is: false,
      then: Yup.array().nullable().required(),
      otherwise: Yup.array().nullable(),
    }),
    hide: true,
    hideOn: "defaultWorkshopsDuration",
    condition: false,
    label: intl.formatMessage({ id: "FOLDER.INPUT.AVAILABILITY" })
  }
]


export default availabilitySettingUserFields
