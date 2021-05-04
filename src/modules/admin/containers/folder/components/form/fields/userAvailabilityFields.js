import * as Yup from "yup"
import _ from "lodash"
import {
  INPUT_MASK,
  TIME_PICKER,
} from "./../../../../../../../components/partials"


// Validation schema
export const userAvailabilityFields = _.memoize(({ intl }) => [
  {
    name: "sessionTime",
    component: TIME_PICKER,
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SESSTION_TIME" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SESSTION_TIME" }),
    validation: Yup.string().required(),
    required: true,
    timeFormat: true,
    size: 2
  },
  {
    name: "numberOfdaysOfWork",
    component: INPUT_MASK,
    mask: "9",
    label: intl.formatMessage({ id: "FOLDER.INPUT.NUMBER_OF_DAYS" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.NUMBER_OF_DAYS" }),
    validation: Yup.string().required(),
    required: true,
    size: 2
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
    size: 2,
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
    size: 2
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
    size: 2
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
    size: 2
  },
]);
