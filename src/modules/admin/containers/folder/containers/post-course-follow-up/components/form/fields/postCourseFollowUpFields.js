import * as Yup from "yup"
import _ from "lodash"
import {
  INPUT,
  SELECT,
  CHECKBOX,
  WYSIWYG_EDITOR,
  DATE_PICKER,
  TEXTAREA
} from "./../../../../../../../../../components/partials"

import {
  eventContextUIHelper,
  eventThemeUIHelper,
  eventStateUIHelper,
  eventNatureUIHelper,
  eventStatusUIHelper, 
  EVENT_INFO_BY_A_THIRD_PARTY,
  EVENT_SERVICE_OFFER_BY_A_PARTNER,
  orientationPartnershipServicesUIHelper,
  orientationPartnershipsUIHelper
} from "./../../../../../../../UIHelpers"


export const postCourseFollowUpFieldsAr = _.memoize(({ intl }) => [
  {
    name: "placeAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200).required(),
    required: true,
  },
  {
    name: "descriptionAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DESCRIPTION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DESCRIPTION_AR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 12,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "sponsorAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SPONSOR_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SPONSOR_AR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "educatorAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.EDUCATOR_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EDUCATOR_AR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "socialServiceAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SOCIAL_SERVICE_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SOCIAL_SERVICE_AR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "commentAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200)
  }
])


export const postCourseFollowUpFieldsFr = _.memoize(({ intl }) => [
  {
    name: "placeFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,
    size: 12
  },
  {
    name: "descriptionFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DESCRIPTION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DESCRIPTION_FR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 12,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "sponsorFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SPONSOR_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SPONSOR_FR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "educatorFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.EDUCATOR_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EDUCATOR_FR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "socialServiceFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.SOCIAL_SERVICE_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SOCIAL_SERVICE_FR" }),
    hide: true,
    hideOn: "way",
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "commentFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_FR" }),
    size: 12,
    validation: Yup.string().min(2).max(200)
  }
])

export const postCourseFollowUpEditFields = _.memoize(({ intl }) => [
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
export const postCourseFollowUpFields = _.memoize(({ intl }) => [
  {
    name: "date",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    validation: Yup.string().required(),
    required: true,
    size: 4,
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
    name: "partner",
    component: SELECT,
    loadOptions: orientationPartnershipsUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    hide: true,
    initialValue: null,
    hideOn: "way",
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 6,
    validation: Yup.number().nullable()
  },
  {
    name: "service",
    component: SELECT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER_SERVICE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER_SERVICE" }),
    initialValue: null,
    hide: true,
    hideOn: "way",
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    chainedOptions: (callback, { partner = null }) => orientationPartnershipServicesUIHelper(callback, partner),
    size: 6,
    validation: Yup.number().nullable()
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
    name: "nature",
    component: SELECT,
    options: eventNatureUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.NATURE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.NATURE" }),
    size: 4,
    validation: Yup.number().required(),
  },
  {
    name: "state",
    component: SELECT,
    options: eventStateUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    size: 4,
    validation: Yup.number().required(),
  },

  {
    name: "isPresent",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "FOLDER.INPUT.IS_PRESENT" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 12,
  } ,
  {
    name: "report",
    component: WYSIWYG_EDITOR,
    label: intl.formatMessage({ id: "FOLDER.INPUT.REPORT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.REPORT" }),
    size: 12,
    validation: Yup.string().required(),
    required: true,
  }
]);
