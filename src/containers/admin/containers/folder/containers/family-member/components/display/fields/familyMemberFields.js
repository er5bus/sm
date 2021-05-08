import { documentTypeUIHelper, situationTypesUIHelper } from "./../../../../../../../UIHelpers";

// Validation schema
export const familyMemberFields = ({ intl }) => [
  {
    name: "age",
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.AGE" }),
    size: 4
  },
  {
    name: "situationType",
    options: situationTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.SITUATION_TYPE" }),
    size: 4,
  },
];


// Validation schema
export const familyMemberFieldsAr = ({ intl }) => [
  {
    name: "firstNameAr",
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.FIRST_NAME_AR" }),
    size: 6,
  },
  {
    name: "lastNameAr",
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.LAST_NAME_AR" }),
    size: 6,
  },
  {
    name: "schoolLevelAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_AR" }),
    size: 6,
  },
  {
    name: "notesAr",
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.NOTES_AR" }),
    size: 6,
  },
  
];


export const familyMemberFieldsFr = ({ intl }) => [
  {
    name: "firstNameFr",
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.FIRST_NAME_FR" }),
    size: 6,
  },
  {
    name: "lastNameFr",
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.LAST_NAME_FR" }),
    size: 6,
  },
  {
    name: "schoolLevelFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.SCHOOL_LEVEL_FR" }),
    size: 6,
  },
  {
    name: "notesFr",
    options: documentTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FAMILY_MEMBER.INPUT.NOTES_FR" }),
    size: 6,
  },
];
