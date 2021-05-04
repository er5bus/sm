import * as Yup from "yup"
import _ from "lodash"
import {
  WEEK_PICKER
} from "./../../../../../../../components/partials"

// Validation schema
export const downloadScheduleFields = _.memoize(({ intl }) => [
  {
    name: "week",
    component: WEEK_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.WEEK" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.WEEK" }),
    validation: Yup.string().nullable().required(),
    required: true,
  }
]);
