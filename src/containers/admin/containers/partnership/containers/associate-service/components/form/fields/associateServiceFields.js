import * as Yup from "yup"
import _ from "lodash"
import {
  INPUT,
  CHECKBOX,
  DATE_PICKER,
  SELECT
} from "./../../../../../../../../../components/partials"

import {partnershipServicesUIHelper} from "../../../../../../../UIHelpers"


export const associateServiceFieldsAr = _.memoize(({ intl }) => [
  {
    name: "placeAr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.PLACE_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.PLACE_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200).required(),
    required: true,
  }
])


export const associateServiceFieldsFr = _.memoize(({ intl }) => [
  {
    name: "placeFr",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.PLACE_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.PLACE_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 12
  },
])

// Validation schema
export const associateServiceFields = _.memoize(({ intl }) => [
  {
    name: "service",
    component: SELECT,
    loadOptions: partnershipServicesUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.ASSOCIATE_SERVICE_DETAIL" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.ASSOCIATE_SERVICE_DETAIL" }),
    size: 12,
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "startDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.START_DATE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.START_DATE" }),
    validation: Yup.string().required(),
    required: true,
    size: 6
  },
  {
    name: "endDate",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.END_DATE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.END_DATE" }),
    required: true,
    show: true,
    hideOn: "state",
    condition: 4,
    validation: Yup.string().nullable(),
    initialValue: null,
    size: 6
  },
  {
    name: "state",
    component: CHECKBOX,
    options: [
      { value: 4, label: intl.formatMessage({ id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.IS_PERMANENT" }) }
    ],
    initialValue: 1,
    checkboxSize: "sm",
    size: 12,
  }
]);
