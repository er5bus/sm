import * as Yup from 'yup'
import { INPUT, DATE_PICKER, SELECT, ASYNC_SELECT, RADIO, TEXTAREA } from '../../../../../../../components/partials'
import {
  addressUIHelper,
  schoolsUIHelper,
  schoolTypeUIHelper,
  healthStatusUIHelper,
  schoolDropoutCamingOriginUIHelper,
  schoolDropoutTrackingStatusUIHelper,
  schoolLevelsUIHelper,
  schoolDropoutTrainingLevelUIHelper,
  SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED,
  genderUIHelper,
  schoolDropoutReasonDropoutUIHelper,
  SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED, PROFESSIONAL_TRAINING
} from '../../../../../UIHelpers'

// Validation schema
export const schoolDropoutFields = ({ intl }) => [
  {
    name: 'birthDate',
    component: DATE_PICKER,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.BIRTH_DATE' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.BIRTH_DATE' }),
    validation: Yup.string().nullable().required(),
    required: true,
    size: 3
  },
  {
    name: 'gender',
    component: RADIO,
    options: genderUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.GENDER' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.GENDER' }),
    validation: Yup.number(),
    required: true,
    size: 3
  },
  {
    name: 'dropoutDate',
    format: 'MM/YYYY',
    component: DATE_PICKER,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.DROPOUT_DATE' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.DROPOUT_DATE' }),
    validation: Yup.string().nullable().required(),
    required: true,
    size: 3
  },
  {
    name: 'comingOrigin',
    component: SELECT,
    options: schoolDropoutCamingOriginUIHelper(intl),
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.COMING_ORIGIN_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.COMING_ORIGIN_AR' }),
    size: 3,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'trackingStatus',
    component: SELECT,
    options: schoolDropoutTrackingStatusUIHelper(intl),
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.TRACKING_STATUS' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.TRACKING_STATUS' }),
    validation: Yup.number().required(),
    size: 3
  },
  {
    name: 'headAddressExternalId',
    component: ASYNC_SELECT,
    loadOptions: addressUIHelper,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.ADDRESS' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.ADDRESS' }),
    validation: Yup.number().required(),
    required: true,
    size: 3
  },
  {
    name: 'lastSchoolExternalId',
    component: ASYNC_SELECT,
    loadOptions: schoolsUIHelper,
    label: intl.formatMessage({ id: 'FOLDER.INPUT.LAST_SCHOOL' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.LAST_SCHOOL' }),
    validation: Yup.number().required(),
    required: true,
    size: 3
  },
  {
    name: 'schoolLevel',
    component: SELECT,
    options: schoolLevelsUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_LEVEL' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_LEVEL' }),
    validation: Yup.number().required(),
    size: 6
  },
  {
    name: 'trainingLevel',
    component: SELECT,
    options: schoolDropoutTrainingLevelUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.TRAINING_LEVEL' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.TRAINING_LEVEL' }),
    validation: Yup.number().required(),
    size: 6,
    hide: true,
    hideOn: 'schoolLevel',
    condition: PROFESSIONAL_TRAINING
  },
  {
    name: 'trainingEstablishment',
    component: INPUT,
    label: intl.formatMessage({ id: 'FOLDER.INPUT.TRAINING_ESTABLISHMENT' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.TRAINING_ESTABLISHMENT' }),
    size: 6,
    validation: Yup.string().required(),
    hide: true,
    hideOn: 'schoolLevel',
    condition: PROFESSIONAL_TRAINING
  },
  {
    name: 'healthStatus',
    component: SELECT,
    options: healthStatusUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.HEALTH_STATUS' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.HEALTH_STATUS' }),
    validation: Yup.number().required(),
    size: 3
  },
  {
    name: 'schoolType',
    component: SELECT,
    options: schoolTypeUIHelper(intl),
    label: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_TYPE' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.SCHOOL_TYPE' }),
    validation: Yup.number(),
    size: 3
  }
]

export const schoolDropoutFieldsAr = ({ intl }) => [
  {
    name: 'firstNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FIRST_NAME_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FIRST_NAME_AR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'lastNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.LAST_NAME_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.LAST_NAME_AR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'addressAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.ADDRESS_STRING' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.ADDRESS_STRING' }),
    size: 12,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'code',
    component: INPUT,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.CODE' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.CODE' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'cityAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.CITY' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.CITY' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'birthPlaceAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.BIRTH_PLACE_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.BIRTH_PLACE_AR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'reportingPersonAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.REPORTING_PERSON_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.REPORTING_PERSON_AR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'comingReasonAr',
    components: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.COMING_REASON_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.COMING_REASON_AR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'dropoutReasonAr',
    component: SELECT,
    options: schoolDropoutReasonDropoutUIHelper(intl),
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.dropout_Reason_Ar' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.dropout_Reason_Ar' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'formationAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FORMATION_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FORMATION_AR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'resultAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.RESULT_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.RESULT_AR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'observationAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.OBSERVATION_AR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.OBSERVATION_AR' }),
    size: 6,
    hide: true,
    hideOn: 'trackingStatus',
    condition: [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED, SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED],
    validation: Yup.string().required(),
    required: true
  }
]

export const schoolDropoutFieldsFr = ({ intl }) => [
  {
    name: 'firstNameFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FIRST_NAME_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FIRST_NAME_FR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'lastNameFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.LAST_NAME_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.LAST_NAME_FR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'addressFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.ADDRESS_STRING' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.ADDRESS_STRING' }),
    size: 12,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'code',
    component: INPUT,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.CODE' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.CODE' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'cityFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'ADDRESS.INPUT.CITY' }),
    placeholder: intl.formatMessage({ id: 'ADDRESS.INPUT.CITY' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'birthPlaceFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.BIRTH_PLACE_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.BIRTH_PLACE_FR' }),
    size: 6,
    validation: Yup.string().required(),
    required: true
  },
  {
    name: 'reportingPersonFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.REPORTING_PERSON_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.REPORTING_PERSON_FR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'comingReasonFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.COMING_REASON_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.COMING_REASON_FR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'dropoutReasonFr',
    component: SELECT,
    options: schoolDropoutReasonDropoutUIHelper(intl),
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.dropout_Reason_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.dropout_Reason_FR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'formationFr',
    component: INPUT,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FORMATION_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.FORMATION_FR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'resultFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.RESULT_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.RESULT_FR' }),
    size: 6,
    validation: Yup.string(),
    required: true
  },
  {
    name: 'observationFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.OBSERVATION_FR' }),
    placeholder: intl.formatMessage({ id: 'SCHOOL_DROPOUT.INPUT.OBSERVATION_FR' }),
    size: 6,
    hide: true,
    hideOn: 'trackingStatus',
    condition: [SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED, SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_TRANSFORMED],
    validation: Yup.string(),
    required: true
  }
]
