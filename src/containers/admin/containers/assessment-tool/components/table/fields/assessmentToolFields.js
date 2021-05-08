import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../../column-formatters"


const NAME_VALUE = {
  [AR]: "outilAr",
  [FR]: "outilFr"
}

const NAME_LABEL = {
  [AR]: "ASSESSMENT_TOOL.INPUT.TOOL_AR",
  [FR]: "ASSESSMENT_TOOL.INPUT.TOOL_FR"
}


const columns = ({ intl, assessmentToolsUIProps }) => [
  {
    dataField: "id",
    text: intl.formatMessage({
      id: "ASSESSMENT_TOOL.INPUT.IDENTIFIER",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: NAME_LABEL[getLang()],
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "ASSESSMENT_TOOL.INPUT.STATE",
    }),
    formatter: columnFormatters.StateColumnFormatter,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: assessmentToolsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
