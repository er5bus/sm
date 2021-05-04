import _ from "lodash"
import {AR, FR} from "../../../../../../../../../constants"
import {sortCaret} from "../../../../../../../../../helpers"
import {getLang} from "../../../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"

const NAME_DATA_FIELD = {
  [FR]: "nameFr",
  [AR]: "nameAr"
}

const NAME_TEXT = {
  [FR]: "DOCUMENT.INPUT.NAME_FR",
  [AR]: "DOCUMENT.INPUT.NAME_AR"
}

const columns = ({ intl, folderDocumentsUIProps }) => [
  {
    dataField: NAME_DATA_FIELD[getLang()],
    text: intl.formatMessage({
      id: NAME_TEXT[getLang()],
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "tag",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.TAG",
    }),
    formatter: columnFormatters.TagsColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isValid",
    text: intl.formatMessage({
      id: "DOCUMENT.INPUT.DOCUMENT_IS_VALID",
    }),
    formatter: columnFormatters.IsValidColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: folderDocumentsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
