import _ from "lodash"
import {sortCaret} from "../../../../../../../../../helpers"
import * as columnFormatters from "./../column-formatters"


const columns = ({ intl, postCourseFollowUpsUIProps }) => [
  {
    dataField: "date",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.DATE",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "context",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.CONTEXT",
    }),
    formatter: columnFormatters.ContextColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "id",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.ID",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "nature",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.NATURE",
    }),
    formatter: columnFormatters.NatureColumnFormatter,
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
    formatExtraData: postCourseFollowUpsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
