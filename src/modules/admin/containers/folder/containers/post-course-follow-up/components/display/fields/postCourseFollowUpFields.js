import _ from "lodash"

import {
  eventContextUIHelper,
  eventThemeUIHelper,
  eventStateUIHelper,
  eventNatureUIHelper,
  eventStatusUIHelper,
  EVENT_INFO_BY_A_THIRD_PARTY,
  EVENT_SERVICE_OFFER_BY_A_PARTNER,
} from "./../../../../../../../UIHelpers"
import {AR, FR} from "../../../../../../../../../constants"


export const postCourseFollowUpFieldsAr = _.memoize(({ intl }) => [
  {
    name: "placeAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_AR" }),
    size: 12,
  },
  {
    name: 'descriptionAr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.DESCRIPTION_AR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 12,
  },
  {
    name: 'sponsorAr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SPONSOR_AR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
  },
  {
    name: 'educatorAr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.EDUCATOR_AR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
  },
  {
    name: 'socialServiceAr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SOCIAL_SERVICE_AR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
  },
  {
    name: 'commentAr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.COMMENT_AR' }),
    size: 12,
  }
])


export const postCourseFollowUpFieldsFr = _.memoize(({ intl }) => [
  {
    name: "placeFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PLACE_FR" }),
    size: 12
  },
  {
    name: 'descriptionFr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.DESCRIPTION_FR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 12,
  },
  {
    name: 'sponsorFr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SPONSOR_FR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
  },
  {
    name: 'educatorFr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.EDUCATOR_FR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
  },
  {
    name: 'socialServiceFr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SOCIAL_SERVICE_FR' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_INFO_BY_A_THIRD_PARTY,
    size: 4,
  },
  {
    name: 'commentFr',
    label: intl.formatMessage({ id: 'FOLDER.INPUT.COMMENT_FR' }),
    size: 12,
  }
])

// Validation schema
export const postCourseFollowUpFields = _.memoize(({ intl }) => [
  {
    name: "date",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    size: 4,
  },
  {
    name: "context",
    options: eventContextUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONTEXT" }),
    size: 4,
  },
  {
    name: "way",
    options: eventStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.WAY" }),
    size: 4,
  },
  {
    name: {
      [FR]: "partnerDetails.nameFr",
      [AR]: "partnerDetails.nameAr",
    },
    label: intl.formatMessage({ id: 'FOLDER.INPUT.PARTNER' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 6,
  },
  {
    name: {
      [FR]: "serviceDetails.placeFr",
      [AR]: "serviceDetails.placeAr"
    },
    label: intl.formatMessage({ id: 'FOLDER.INPUT.PARTNER_SERVICE' }),
    hide: true,
    hideOn: 'way',
    condition: EVENT_SERVICE_OFFER_BY_A_PARTNER,
    size: 6,
  },
  {
    name: "theme",
    options: eventThemeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    size: 4,
  },
  {
    name: "nature",
    options: eventNatureUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.NATURE" }),
    size: 4,
  },
  {
    name: "state",
    options: eventStateUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.STATE" }),
    size: 4,
  },

  {
    name: "isPresent",
    label: intl.formatMessage({ id: "FOLDER.INPUT.IS_PRESENT" }),
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    size: 12,
  } ,
  {
    name: "isCanceled",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CANCEL_APPOINTMENT" }),
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    size: 12,
  },
  {
    name: "report",
    label: intl.formatMessage({ id: "FOLDER.INPUT.REPORT" }),
    size: 12,
    html: true,
  }
]);
