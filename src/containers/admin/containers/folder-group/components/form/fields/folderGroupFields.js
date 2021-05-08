import * as Yup from "yup"
import routes from "../../../../../routes"

import {userUIHelper, folderUIHelper} from "../../../../../UIHelpers"
import { INPUT, MULTISELECT_TABLE, SELECT } from "./../../../../../../../components/partials"
import * as columnFormatters from "./../../column-formatters"


export const folderGroupFieldsAr = ({ intl }) => [
  {
    name: "nameAr",
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.NAME_AR" })  ,
    placeholder: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.NAME_AR" }),
    component: INPUT,
    size: 12,
    required: true,
    validation: Yup.string().required(),
  }
]


export const folderGroupFieldsFr = ({ intl }) => [
  {
    name: "nameFr",
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.NAME_FR" })  ,
    placeholder: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.NAME_FR" }),
    component: INPUT,
    size: 12,
    required: true,
    validation: Yup.string().required(),
  }
]


export const folderGroupFields = ({ intl }) => [
  {
    name: "responsible",
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.RESPONSIBLE" })  ,
    placeholder: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.RESPONSIBLE" }),
    component: SELECT,
    loadOptions: userUIHelper,
    size: 12,
    required: true,
    validation: Yup.number().required(),
  },
  {
    name: "folders",
    loadAttrName: "folderDetails",
    label: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.FOLDERS" })  ,
    tableLabel: intl.formatMessage({ id: "FOLDER_GROUP.INPUT.FOLDER_LIST" }),
    component: MULTISELECT_TABLE,
    loadData: folderUIHelper,
    openShowPage: ({ id }, history) => history.push(routes.folderShow.path.replace(":param", id)),
    columns: [
      {
        dataField: "id",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.ID",
        }),
      },
      {
        dataField: "",
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
    size: 12,
    required: true,
    validation: Yup.array().required(),
  },
]
