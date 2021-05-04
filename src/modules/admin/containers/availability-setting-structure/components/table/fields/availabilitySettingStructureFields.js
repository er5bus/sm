import _ from "lodash"
import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../../column-formatters"


const columns = ({ intl, availabilitySettingStructuresUIProps }) => [
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
      id: "FOLDER.INPUT.IS_DEFAULT",
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
    formatExtraData: availabilitySettingStructuresUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
