import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../../column-formatters"


const NAME_VALUE = {
  [AR]: "nameAr",
  [FR]: "nameFr"
}

const NAME_LABEL = {
  [AR]: "FOLDER_GROUP.INPUT.NAME_AR",
  [FR]: "FOLDER_GROUP.INPUT.NAME_FR"
}


const columns = ({ intl, folderGroupsUIProps }) => [
  {
    dataField: NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: NAME_LABEL[getLang()],
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "responsibleDetails",
    text: intl.formatMessage({
      id: "FOLDER_GROUP.INPUT.RESPONSIBLE",
    }),
    formatter: columnFormatters.ResponsibleColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "FOLDER_GROUP.INPUT.STATE",
    }),
    formatter: columnFormatters.StateColumnFormatter,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: folderGroupsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
