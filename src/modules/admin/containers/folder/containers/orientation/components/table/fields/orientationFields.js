import _ from "lodash"
import {sortCaret} from "../../../../../../../../../helpers"
import * as columnFormatters from "../column-formatters"


const columns = ({ intl, orientationsUIProps }) => [
  {
    dataField: "date",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.DATE",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "situationType",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.SITUATION_TYPE",
    }),
    formatter: columnFormatters.SituationTypeColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  
  {
    dataField: "state",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.STATUS",
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
    formatExtraData: orientationsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
