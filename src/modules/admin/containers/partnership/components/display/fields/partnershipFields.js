import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import {AR, FR} from "../../../../../../../constants";
import {getLang} from "../../../../../../../i18n";
//import routes from "../../../../../routes";
import {legalFormUIHelper} from "../../../../../UIHelpers";

//import DescriptionIcon from '@material-ui/icons/Description';

const FIRST_NAME_DATA_FIELD = {
  [AR] : "firstNameAr",
  [FR] : "firstNameFr"
}

const FIRST_NAME_LABEL = {
  [AR] : "PARTNERSHIP.INPUT.FIRST_NAME_AR",
  [FR] : "PARTNERSHIP.INPUT.FIRST_NAME_FR"
}

const LAST_NAME_DATA_FIELD = {
  [AR] : "lastNameAr",
  [FR] : "lastNameFr"
}

const LAST_NAME_LABEL = {
  [AR] : "PARTNERSHIP.INPUT.LAST_NAME_AR",
  [FR] : "PARTNERSHIP.INPUT.LAST_NAME_FR"
}


export const partnershipFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_FR" }),
    size: 6,
  },
  {
    name: "addressFr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_FR" }),
    size: 6,
  },
  {
    name: "activityFr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_FR" }),
    size: 6,
  },
  {
    name: "avantagesFr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_FR" }),
    size: 6,
  },
];

export const partnershipFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.NAME_AR" }),
    size: 6,
  },
  {
    name: "addressAr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ADDRESS_AR" }),
    size: 6,
  },
  {
    name: "activityAr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.ACTIVITY_AR" }),
    size: 6,
  },
  {
    name: "avantagesAr",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.AVANTAGES_AR" }),
    size: 6,
  },
];


// Validation schema
export const partnershipFields = ({ intl }) => [
  {
    name: "signatureDate",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.DATE" }),
    size: 3,
  },
  {
    name: {
      [FR]: "partnerType.labelFr",
      [AR]: "partnerType.labelAr",
    },
    //loadOptions: PAR,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PARTNER_TYPE" }),
    size: 3,
  },
  {
    name: "legalForm",
    options: legalFormUIHelper(intl),
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LEGAL_FORM" }),
    size: 3,
  },
  {
    name: {
      [FR]: "theme.thematicFr",
      [AR]: "theme.thematicAr",
    },
    //loadOptions: partnershipThemesUIHelper,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.THEME" }),
    size: 3,
  },
  {
    name: "contactSet",
    showActions: false,
    columns: [
      {
        dataField: FIRST_NAME_DATA_FIELD[getLang()],
        text: intl.formatMessage({
          id: FIRST_NAME_LABEL[getLang()],
        }),
      },
      {
        dataField: LAST_NAME_DATA_FIELD[getLang()],
        text: intl.formatMessage({
          id: LAST_NAME_LABEL[getLang()],
        }),
      },
      {
        dataField: "email",
        text: intl.formatMessage({
          id: "PARTNERSHIP.INPUT.EMAIL",
        }),
      },
      {
        dataField: "phone",
        text: intl.formatMessage({
          id: "PARTNERSHIP.INPUT.PHONE",
        }),
      },
      {
        dataField: "isPrincipal",
        text: intl.formatMessage({
          id: "PARTNERSHIP.INPUT.IS_PRINCIPAL",
        }),
        formatter: (cellContent) => cellContent ? intl.formatMessage({ id: "GENERAL.YES" }) : intl.formatMessage({ id: "GENERAL.NO" })
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "PARTNERSHIP.CONTACT.TITLE" }),
    size: 12,
  },
]
