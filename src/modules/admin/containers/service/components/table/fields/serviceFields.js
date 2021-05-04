import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"


const PLACE_DATA_FIELD = {
  [FR]: "placeFr",
  [AR]: "placeAr"
}

const PLACE_TEXT = {
  [FR]: "SERVICE.INPUT.PLACE_AR",
  [AR]: "SERVICE.INPUT.PLACE_FR"
}

const TARGET_AUDIENCE_DATA_FIELD = {
  [FR]: "targetAudienceFr",
  [AR]: "targetAudienceAr"
}

const TARGET_AUDIENCE_TEXT = {
  [FR]: "SERVICE.INPUT.TARGET_AUDIENCE_FR",
  [AR]: "SERVICE.INPUT.TARGET_AUDIENCE_AR"
}

const LABEL_DATA_FIELD = {
  [FR]: "labelFr",
  [AR]: "labelAr"
}

const LABEL_TEXT = {
  [FR]: "SERVICE.INPUT.LABEL_AR",
  [AR]: "SERVICE.INPUT.LABEL_FR"
}


const columns = ({ intl, servicesUIProps }) => [
  {
    dataField:  LABEL_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: LABEL_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "serviceTypeExternalId",
    text: intl.formatMessage({
      id: "SERVICE.INPUT.SERVICE_TYPE",
    }),
    formatter: columnFormatters.ServiceTypeColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  TARGET_AUDIENCE_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: TARGET_AUDIENCE_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  PLACE_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: PLACE_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "SERVICE.INPUT.STATE",
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
    formatExtraData: servicesUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
