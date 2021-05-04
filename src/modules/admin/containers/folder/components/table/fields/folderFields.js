import _ from "lodash"
import {sortCaret} from "../../../../../../../helpers"
import * as columnFormatters from "./../../column-formatters"


const columns = ({ intl, foldersUIProps }) => [
  {
    dataField: "",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.FULL_NAME",
    }),
    formatter: columnFormatters.BeneficiaryColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "createdAt",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.DATE_CREATE",
    }),
    formatter: columnFormatters.CreatedAtColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "status",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.STATUS",
    }),
    formatter: columnFormatters.StatusColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "createdByDetail",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.RESPONSIBLE_FULL_NAME",
    }),
    formatter: columnFormatters.ResponsibleColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "cpDetail",
    text: intl.formatMessage({
      id: "FOLDER.INPUT.CP_FULL_NAME",
    }),
    formatter: columnFormatters.CpColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.FolderActionsColumnFormatter,
    formatExtraData: foldersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
]



export default _.memoize(columns)
