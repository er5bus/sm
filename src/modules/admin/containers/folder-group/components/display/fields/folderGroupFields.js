import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import {AR, FR} from "../../../../../../../constants";
import routes from "../../../../../routes";
import * as columnFormatters from "./../../column-formatters"

//import DescriptionIcon from '@material-ui/icons/Description';


export const folderGroupFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.NAME_FR" }),
    //icon: DescriptionIcon,
    size: 12,
  },
]


export const folderGroupFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.NAME_AR" }),
    //icon: DescriptionIcon,
    size: 12,
  },
]


export const folderGroupFields = ({ intl }) => [
  {
    name: {
      [AR]: ["responsibleDetails.firstNameAr", "responsibleDetails.lastNameFr"],
      [FR]: ["responsibleDetails.firstName", "responsibleDetails.lastName"],
    },
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.RESPONSIBLE" }),
    //icon: DescriptionIcon,
    size: 12,
  },
  {
    name: "folderDetails",
    openShowPage: ({ id }, history) => history.push(routes.folderShow.path.replace(":param", id)),
    columns: [
      {
        dataField: "id",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.ID",
        }),
      },
      {
        dataField: "firstNameAr",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.FULL_NAME",
        }),
        formatter: columnFormatters.BeneficiaryColumnFormatter    
      },
      {
        dataField: "birthday",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.BIRTHDAY",
        }),
      },
      {
        dataField: "status",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.STATUS",
        }),
        formatter: columnFormatters.StatusColumnFormatter
      },
      {
        dataField: "cpDetails",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.CP_FULL_NAME",
        }),
        formatter: columnFormatters.ResponsibleColumnFormatter
      },
      {
        dataField: "createdAt",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.DATE_CREATE",
        }),
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.FOLDERS" }),
    size: 12,
  },
]
