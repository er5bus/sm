import {AR, FR} from "../../../../../../../constants"
import {
  schoolDropoutTrackingStatusUIHelper,
  SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED,
  SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED,
  PROFESSIONAL_TRAINING,
  schoolLevelsUIHelper,
  genderUIHelper,
  healthStatusUIHelper,
  schoolTypeUIHelper,
  schoolDropoutReasonDropoutUIHelper,
  schoolDropoutTrainingLevelUIHelper
} from "../../../../../UIHelpers"

// Validation schema
export const schoolDropoutFields = ({ intl }) => [
  {
    name: "birthDate",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.BIRTH_DATE" }),
    size: 3,
  },
  {
    name: "gender",
    options: genderUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.GENDER" }),
    size: 3
  },
  {
    name: "dropoutDate",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.DROPOUT_DATE" }),
    size: 3,
  },
  {
    name: "comingOrigin",
    options: schoolDropoutTrackingStatusUIHelper(intl),
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.COMING_ORIGIN_AR" }),
    size: 3,
  },
  {
    name: "trackingStatus",
    options: schoolDropoutTrackingStatusUIHelper(intl),
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.TRACKING_STATUS" }),
    size: 3,
  },
  {
    name: {
      [FR]: "headAddress.french",
      [AR]: "headAddress.arabic",
    },
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    size: 3,
  },
  {
    name: {
      [FR]: "lastSchool.labelFr",
      [AR]: "lastSchool.labelAr",
    },
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_SCHOOL" }),
    size: 3
  },
  {
    name: 'schoolLevel',
    options: schoolLevelsUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_LEVEL' }),
    size: 3
  },
  {
    name: 'schoolType',
    options: schoolTypeUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_TYPE' }),
    size: 3
  },
  {
    name: "trainingLevel",
    options: schoolDropoutTrainingLevelUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.TRAINING_LEVEL" }),
    size: 6,
    hide: true,
    hideOn: "schoolLevel",
    condition: PROFESSIONAL_TRAINING,
  },
  {
    name: "trainingEstablishment",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TRAINING_ESTABLISHMENT" }),
    size: 6,
    hide: true,
    hideOn: "schoolLevel",
    condition: PROFESSIONAL_TRAINING,
  },
  {
    name: "healthStatus",
    options: healthStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.HEALTH_STATUS" }),
    size: 4
  },
]

export const schoolDropoutFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.FIRST_NAME_AR" }),
    required: true,
    size: 6,
  },
  {
    name: "lastNameAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.LAST_NAME_AR" }),
    size: 6,
  },
  {
    name: "addressAr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS_STRING" }),
    size: 12,
  },
  {
    name: "code",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CODE" }),
    size: 6,
  },
  {
    name: "cityAr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CITY" }),
    size: 6,
  },
  {
    name: "birthPlaceAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.BIRTH_PLACE_AR" }),
    size: 6,
  },
  {
    name: "reportingPersonAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.REPORTING_PERSON_AR" }),
    size: 6,
  },
  {
    name: "comingReasonAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.COMING_REASON_AR" }),
    size: 6,
  },
  {
    name: "dropoutReasonAr",
    options: schoolDropoutReasonDropoutUIHelper(intl),
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.dropout_Reason_Ar" }),
    size: 6,
  },
  {
    name: "formationAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.FORMATION_AR" }),
    size: 6,
  },
  {
    name: "resultAr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.RESULT_AR" }),
    size: 6,
  },
  {
    name: "observationFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.OBSERVATION_FR" }),
    size: 6,
    hide: true,
    hideOn: "trackingStatus",
    condition: [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED, SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED],
  },
]

export const schoolDropoutFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.FIRST_NAME_FR" }),
    size: 6,
  },
  {
    name: "lastNameFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.LAST_NAME_FR" }),
    size: 6,
  },
  {
    name: "addressFr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS_STRING" }),
    size: 12,
  },
  {
    name: "code",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CODE" }),
    size: 6,
  },
  {
    name: "cityFr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.CITY" }),
    size: 6,
  },
  {
    name: "birthPlaceFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.BIRTH_PLACE_FR" }),
    size: 6,
  },
  {
    name: "reportingPersonFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.REPORTING_PERSON_FR" }),
    size: 6,
  },
  {
    name: "comingReasonFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.COMING_ORIGIN_FR" }),
    size: 6,
  },
  {
    name: "dropoutReasonFr",
    options: schoolDropoutReasonDropoutUIHelper(intl),
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.dropout_Reason_FR" }),
    size: 6,
  },
  {
    name: "formationFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.FORMATION_FR" }),
    size: 6,
  },
  {
    name: "resultFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.RESULT_FR" }),
    size: 6,
  },
  {
    name: "observationFr",
    label: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.OBSERVATION_FR" }),
    size: 6,
    hide: true,
    hideOn: "trackingStatus",
    condition: [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED, SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED],
  },
]
