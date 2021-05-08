import {
  genderUIHelper,
  healthStatusUIHelper,
  schoolTypeUIHelper,
  schoolLevelsUIHelper,
} from "./../../../../../UIHelpers";
import {AR, FR} from "../../../../../../../constants";

// Validation schema
export const personalDataFields = ({ intl }) => [
  
  {
    name: "birthday",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY" }),
    size: 3,
  },
  {
    name: "birthActNumber",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTH_ACT_NUMBRE" }),
    size: 3,
  },
  {
    name: "idNumber",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    size: 3,
  },
  {
    name: "gender",
    options: genderUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.GENDER" }),
    size: 3
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
    name: "dropoutDate",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DROPOUT_DATE" }),
    size: 4,
  },
  {
    name: "phone",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PHONE" }),
    size: 4,
  },
  {
    name: "phoneParent",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PHONE_PARENT" }),
    size: 4,
  },
  {
    name: "email",
    label: intl.formatMessage({ id: "FOLDER.INPUT.EMAIL" }),
    size: 4,
  },
  {
    name: "healthStatus",
    options: healthStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.HEALTH_STATUS" }),
    size: 4
  },
];


// Validation schema
export const personalDataFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_AR" }),
    size: 6,
  },
  {
    name: "lastNameAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_AR" }),
    size: 6,
  },
  {
    name: "streetNameAr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
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
    name: "birthdayPlaceAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_AR" }),
    size: 6,
  },
  {
    name: "situationAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_AR" }),
    size: 6,
  },
];


export const personalDataFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.FIRST_NAME_FR" }),
    size: 6,
  },
  {
    name: "lastNameFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.LAST_NAME_FR" }),
    size: 6,
  },
  {
    name: "streetNameFr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
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
    name: "birthdayPlaceFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_FR" }),
    size: 6,
  },
  {
    name: "situationFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SITUATION_FR" }),
    size: 6,
  },
];
