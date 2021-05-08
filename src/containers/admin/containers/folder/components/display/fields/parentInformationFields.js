import {
  civilStatusUIHelper,
  nationalityUIHelper 
} from "./../../../../../UIHelpers";

// Validation schema
export const parentInformationFields = ({ intl }) => [
  {
    name: "birthday",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY" }),
    size: 3,
  },
  {
    name: "civilStatus",
    options: civilStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIVIL_STATUS" }),
    size: 3,
  },
  {
    name: "idNumber",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CIN" }),
    size: 3,
  },
  {
    name: "cnssNumber",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CNSS_NUMBER" }),
    size: 3,
  },
  {
    name: "cnamNumber",
    label: intl.formatMessage({ id: "FOLDER.INPUT.CNAM_NUMBER" }),
    size: 3,
  },

  {
    name: "phone",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARENT_PHONE" }),
    size: 3,
  },
  {
    name: "nationality",
    options: nationalityUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.NATIONALITY" }),
    size: 3,
  },
  {
    name: "email",
    label: intl.formatMessage({ id: "FOLDER.INPUT.EMAIL" }),
    size: 3,
  },
  {
    name: 'isLegalResponsible',
    options: [
      { value: true, label: intl.formatMessage({ id: 'GENERAL.YES' }) },
      { value: false, label: intl.formatMessage({ id: 'GENERAL.NO' }) }
    ],
    label: intl.formatMessage({ id: 'FOLDER.INPUT.IS_LEGAL_RESPONSIBLE' }),
    size: 12
  }
];

// Validation schema
export const parentInformationFieldsAr = ({ intl }) => [
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
    name: "birthdayPlaceAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_AR" }),
    size: 6,
  },
  {
    name: "healthStatusAr",
    label: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_AR" }),
    size: 6,
  },
  {
    name: "schoolLevelAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_AR" }),
    size: 6,
  },
  {
    name: "professionAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROFESSION_AR" }),
    size: 6,
  },
];


export const parentInformationFieldsFr = ({ intl }) => [
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
    name: "birthdayPlaceFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BIRTHDAY_PLACE_FR" }),
    size: 6,
  },
  {
    name: "healthStatusFr",
    label: intl.formatMessage({ id: "FOLDER.PARENT.INPUT.HEALTH_STATUS_FR" }),
    size: 6,
  },
  {
    name: "schoolLevelFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    size: 6,
  },
  {
    name: "professionFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.PROFESSION_FR" }),
    size: 6,
  },
];
