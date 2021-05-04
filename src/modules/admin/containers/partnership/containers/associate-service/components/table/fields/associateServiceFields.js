import * as columnFormatters from "./../column-formatters"
import {sortCaret} from "../../../../../../../../../helpers"
import {AR, FR} from "../../../../../../../../../constants"
import {getLang} from "../../../../../../../../../i18n"


const PLACE_DATA_FIELD = {
  [FR]: "placeFr",
  [AR]: "placeAr"
}

const PLACE_TEXT = {
  [FR]: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.PLACE_FR",
  [AR]: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.PLACE_AR"
}

const columns = ({ intl, associateServicesUIProps }) => [
  {
    dataField: "serviceDisplay",
    text: intl.formatMessage({
      id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.ASSOCIATE_SERVICE_DETAIL",
    }),
    formatter: columnFormatters.ServiceColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: PLACE_DATA_FIELD[getLang()],
    text: intl.formatMessage({
      id: PLACE_TEXT[getLang()]
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "startDate",
    text: intl.formatMessage({
      id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.START_DATE",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "endDate",
    text: intl.formatMessage({
      id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.END_DATE",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "state",
    text: intl.formatMessage({
      id: "PARTNERSHIP.ASSOCIATE_SERVICE.INPUT.STATE",
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
    formatExtraData: associateServicesUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default columns
