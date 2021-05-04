import _ from "lodash"
import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../../column-formatters"


const columns = ({ intl, availabilitySettingUsersUIProps }) => [
  {
    dataField: "userDetails",
    text: intl.formatMessage({ id: "FOLDER.INPUT.USER" })  ,
    sort: true,
    sortCaret: sortCaret,
    formatter: columnFormatters.ResponsibleColumnFormatter
  },
  {
    dataField: "days",
    text: intl.formatMessage({ id: "FOLDER.INPUT.DAYS" })  ,
    sort: true,
    sortCaret: sortCaret,
    formatter: columnFormatters.DaysColumnFormatter
  },
  {
    dataField: "isDefault",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.DURATIONS",
    }),
    sort: true,
    sortCaret: sortCaret,
    formatter: columnFormatters.IsDefaultColumnFormatter
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: availabilitySettingUsersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
