import _ from "lodash"
import {
  orientationSituationTypeUIHelper,
  orientationToEstablishmentUIHelper,
  orientationOtherSituationUIHelper,
  TRAINING_INDICATION, 
  OCCUPATIONAL_INTEGRATION_INDICATION,
  OTHER_INDICATION,
} from "../../../../../../../UIHelpers"
import {AR, FR} from "../../../../../../../../../constants"

export const orientationFieldsAr = _.memoize(({ intl }) => [
  {
    name: "targetTrainingAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_TRAINING_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
  },
  {
    name: "targetedDiplomaAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_EDDIPLOMA_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
  },
  {
    name: "LevelAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.LEVEL_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
  },
  {
    name: "proposedProfessionAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROPOSED_PROFESSION_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: OCCUPATIONAL_INTEGRATION_INDICATION,
    size: 12,
  },
  {
    name: "commentAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    hide: true,
    hideOn: "situationType",
    condition: OTHER_INDICATION,
    size: 12,
  },

])


export const orientationFieldsFr = _.memoize(({ intl }) => [
  {
    name: "targetTrainingFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_TRAINING_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
  },
  {
    name: "targetedDiplomaFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TARGET_EDDIPLOMA_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
  },
  {
    name: "LevelAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.LEVEL_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 4,
  },
  {
    name: "proposedProfessionAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROPOSED_PROFESSION_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: OCCUPATIONAL_INTEGRATION_INDICATION,
    size: 12,
  },
  {
    name: "commentFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_FR" }),
    hide: true,
    hideOn: "situationType",
    condition: OTHER_INDICATION,
    size: 12,
  },

])

// Validation schema
export const orientationFields = _.memoize(({ intl }) => [
  {
    name: "date",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    size: 6,
  },
  {
    name: "situationType",
    options: orientationSituationTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_TYPE" }),
    size: 6,
    required: true,
  },
  {
    name: "toEstablishment",
    options: orientationToEstablishmentUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.TO_ESTABLISHMENT" }),
    hide: true,
    hideOn: "situationType",
    condition: TRAINING_INDICATION,
    size: 12,
  },
  {
    name: "otherSituation",
    options: orientationOtherSituationUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.OTHER_SITUATION" }),
    hide: true,
    hideOn: "situationType",
    initialValue: null,
    condition: OTHER_INDICATION,
    size: 12,
  },
  {
    name: {
      [FR]: "partnerDetails.nameFr",
      [AR]: "partnerDetails.nameAr",
    },
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    size: 6,
    hide: true,
    hideOn: "situationType",
    condition: [ TRAINING_INDICATION, OCCUPATIONAL_INTEGRATION_INDICATION ],
  },
  {
    name: {
      [FR]: "partnerServiceDetails.placeFr",
      [AR]: "partnerServiceDetails.placeAr"
    },
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER_SERVICE" }),
    hide: true,
    hideOn: "situationType",
    condition: [ TRAINING_INDICATION, OCCUPATIONAL_INTEGRATION_INDICATION ],
    size: 6
  },
]);
