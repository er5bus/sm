import _ from "lodash"
import * as Yup from "yup"
import { TIME_PICKER, DATE_PICKER, SELECT, PRELOADED_TABLE, CHECKBOX } from "./../../../../../../../components/partials"
import { workshopsDurationUIHelper, weekUIHelper } from "./../../../../../UIHelpers"
import * as columnFormatters from "./../../column-formatters"

const availabilitySettingStructureFields = ({ intl }) => [
  {
    name: "days",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DAYS" })  ,
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DAYS" }),
    component: SELECT,
    options: weekUIHelper(intl),
    size: 6,
    multiple: true,
    required: true,
    validation: Yup.array().required(),
  },
  {
    name: "timeBetweenAppointment",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TIME_BETWEEN_APPOINTMENT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TIME_BETWEEN_APPOINTMENT" }),
    validation: Yup.string().required(),
    timeFormat: true,
    required: true,
    size: 6
  },
  {
    name: "beforeMiddayStartHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_START_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_START_DATE" }),
    validation: Yup.string().required(),
    timeFormat: true,
    required: true,
    size: 3
  },
  {
    name: "beforeMiddayEndHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_END_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_END_DATE" }),
    validation: Yup.string().required(),
    required: true,
    timeFormat: true,
    size: 3
  },
  {
    name: "afterMiddayStartHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_START_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_START_DATE" }),
    validation: Yup.string().required(),
    timeFormat: true,
    required: true,
    size: 3
  },
  {
    name: "afterMiddayEndHour",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_END_DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_END_DATE" }),
    validation: Yup.string().required(),
    required: true,
    timeFormat: true,
    size: 3
  },
  {
    name: "isDefault",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_DEFAULT" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12,
  },
  {
    name: "startDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    validation: Yup.string().when('isDefault', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    hide: false,
    hideOn: "isDefault",
    condition: true,
    required: true,
    timeFormat: true,
    size: 6
  },
  {
    name: "endDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    validation: Yup.string().when('isDefault', {
      is: false,
      then: Yup.string().nullable().required(),
      otherwise: Yup.string().nullable(),
    }),
    required: true,
    timeFormat: true,
    hide: false,
    hideOn: "isDefault",
    condition: true,
    size: 6
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
    validation: Yup.array().required(),
    label: intl.formatMessage({ id: "FOLDER.INPUT.AVAILABILITY" })
  }
]


export default _.memoize(availabilitySettingStructureFields)
