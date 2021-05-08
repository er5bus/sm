import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"


const LEVEL_DATA_FIELD = {
  [FR]: "levelFr",
  [AR]: "levelAr"
}

const LEVEL_TEXT = {
  [FR]: "ASSESSMENT_LEVEL.INPUT.LEVEL_FR",
  [AR]: "ASSESSMENT_LEVEL.INPUT.LEVEL_AR"
}

const columns = ({ intl, assessmentLevelsUIProps }) => [
  {
    dataField: "id",
    text: intl.formatMessage({
      id: "ASSESSMENT_LEVEL.INPUT.ID",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  LEVEL_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: LEVEL_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "ASSESSMENT_LEVEL.INPUT.STATE",
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
    formatExtraData: assessmentLevelsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
