import * as Yup from "yup"
import { INPUT, TEXTAREA, ASYNC_SELECT } from "../../../../../../../components/partials"
import { ServiceTypeUIHelper } from "../../../../../UIHelpers"


export const serviceFields = ({ intl }) => [
  {
    name: "serviceTypeExternalId",
    component: ASYNC_SELECT,
    loadOptions: ServiceTypeUIHelper,
    label: intl.formatMessage({ id: "SERVICE.INPUT.SERVICE_TYPE" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.SERVICE_TYPE" }),
    validation: Yup.number().required(),
    required: true,
    size: 6,
  },
]

// Validation schema
export const serviceFieldsAr = ({ intl }) => [
  {
    name: "labelAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SERVICE.INPUT.LABEL_AR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.LABEL_AR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "targetAudienceAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SERVICE.INPUT.TARGET_AUDIENCE_AR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.TARGET_AUDIENCE_AR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "placeAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SERVICE.INPUT.PLACE_AR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.PLACE_AR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "organizationalModalitiesAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "SERVICE.INPUT.ORGANIZATIONAL_MODALITIES_AR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.ORGANIZATIONAL_MODALITIES_AR" }),
    size: 6,
    validation: Yup.string()
  },
  {
    name: "goalsAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "SERVICE.INPUT.GOALS_AR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.GOALS_AR" }),
    size: 12,
    validation: Yup.string()
  },

]

export const serviceFieldsFr = ({ intl }) => [
  {
    name: "labelFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SERVICE.INPUT.LABEL_FR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.LABEL_FR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "targetAudienceFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SERVICE.INPUT.TARGET_AUDIENCE_FR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.TARGET_AUDIENCE_FR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "placeFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SERVICE.INPUT.PLACE_FR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.PLACE_FR" }),
    size: 6,
    validation: Yup.string().required(),
    required: true,
  },
  {
    name: "organizationalModalitiesFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "SERVICE.INPUT.ORGANIZATIONAL_MODALITIES_FR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.ORGANIZATIONAL_MODALITIES_FR" }),
    size: 6,
    validation: Yup.string()
  },
  {
    name: "goalsFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "SERVICE.INPUT.GOALS_FR" }),
    placeholder: intl.formatMessage({ id: "SERVICE.INPUT.GOALS_FR" }),
    size: 12,
    validation: Yup.string()
  },
]
