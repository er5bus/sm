import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"


const RUBRIC_DATA_FIELD = {
  [FR]: "rubricFr",
  [AR]: "rubricAr"
}

const RUBRIC_TEXT = {
  [FR]: "EVALUATION_RUBRIC.INPUT.RUBRIC_FR",
  [AR]: "EVALUATION_RUBRIC.INPUT.RUBRIC_AR"
}


const columns = ({ intl, evaluationRubricsUIProps }) => [
  {
    dataField: "id",
    text: intl.formatMessage({
      id: "EVALUATION_RUBRIC.INPUT.ID",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  RUBRIC_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: RUBRIC_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "EVALUATION_RUBRIC.INPUT.STATE",
    }),
    formatter: columnFormatters.StateColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: evaluationRubricsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
