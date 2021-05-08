import * as Yup from "yup"
import _ from "lodash"
import {
  INPUT,
  SELECT,
  DATE_PICKER
} from "../../../../../../../../../components/partials"

import {
  orientationSituationTypeUIHelper,
  orientationToEstablishmentUIHelper,
  orientationOtherSituationUIHelper,
  orientationPartnershipsUIHelper,
  TRAINING_INDICATION, 
  OCCUPATIONAL_INTEGRATION_INDICATION,
  OTHER_INDICATION,
  orientationPartnershipServicesUIHelper
} from "../../../../../../../UIHelpers"


export const orientationFieldsAr = _.memoize(({ intl }) => [
  {
    name: "targetTrainingAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_TRAINING_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_TRAINING_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
    validation: Yup.string().min(2).max(200),
  },
  {
    name: "targetedDiplomaAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_EDDIPLOMA_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_EDDIPLOMA_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "LevelAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LEVEL_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LEVEL_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "proposedProfessionAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROPOSED_PROFESSION_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PROPOSED_PROFESSION_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: OCCUPATIONAL_INTEGRATION_INDICATION,
    size: 12,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "commentAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: OTHER_INDICATION,
    size: 12,
    validation: Yup.string().min(2).max(200)
  },

])


export const orientationFieldsFr = _.memoize(({ intl }) => [
  {
    name: "targetTrainingFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_TRAINING_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_TRAINING_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
    validation: Yup.string().min(2).max(200),
  },
  {
    name: "targetedDiplomaFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_EDDIPLOMA_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_EDDIPLOMA_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "LevelAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.LEVEL_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.LEVEL_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "proposedProfessionAr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROPOSED_PROFESSION_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PROPOSED_PROFESSION_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: OCCUPATIONAL_INTEGRATION_INDICATION,
    size: 12,
    validation: Yup.string().min(2).max(200)
  },
  {
    name: "commentFr",
    component: INPUT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: OTHER_INDICATION,
    size: 12,
    validation: Yup.string().min(2).max(200)
  },

])

// Validation schema
export const orientationFields = _.memoize(({ intl }) => [
  {
    name: "date",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    validation: Yup.string().required(),
    required: true,
    size: 6,
  },
  {
    name: "situationType",
    component: SELECT,
    options: orientationSituationTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_TYPE" }),
    size: 6,
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "toEstablishment",
    component: SELECT,
    options: orientationToEstablishmentUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.TO_ESTABLISHMENT" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.TO_ESTABLISHMENT" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 12,
    initialValue: null,
    validation: Yup.number().nullable()
  },
  {
    name: "otherSituation",
    component: SELECT,
    options: orientationOtherSituationUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.OTHER_SITUATION" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.OTHER_SITUATION" }),
    hide: true,
    hideOn: "situationType",
    initialValue: null,
    condition: OTHER_INDICATION,
    size: 12,
    validation: Yup.number().nullable()
  },
  {
    name: "partner",
    component: SELECT,
    loadOptions: orientationPartnershipsUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    hide: true,
    hideOn: "situationType",
    initialValue: null,
    condition: [ TRAINING_INDICATION, OCCUPATIONAL_INTEGRATION_INDICATION, OTHER_INDICATION ],
    size: 6,
    validation: Yup.number().nullable()
  },
  {
    name: "partnerService",
    component: SELECT,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER_SERVICE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER_SERVICE" }),
    hide: true,
    hideOn: "situationType",
    initialValue: null,
    condition: [ TRAINING_INDICATION, OCCUPATIONAL_INTEGRATION_INDICATION, OTHER_INDICATION ],
    chainedOptions: (callback, { partner = null }) => orientationPartnershipServicesUIHelper(callback, partner),
    size: 6,
    validation: Yup.number().nullable()
  },
]);
