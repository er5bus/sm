import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "../column-formatters"

const FIRST_NAME_DATA_FIELD = {
  [FR]: "firstNameFr",
  [AR]: "firstNameAr"
}

const LAST_NAME_DATA_FIELD = {
  [FR]: "lastNameFr",
  [AR]: "lastNameAr"
}

const FIRST_NAME_TEXT = {
  [FR]: "SCHOOL_DROPOUT.INPUT.FIRST_NAME_FR",
  [AR]: "SCHOOL_DROPOUT.INPUT.FIRST_NAME_AR"
}

const LAST_NAME_TEXT = {
  [FR]: "SCHOOL_DROPOUT.INPUT.LAST_NAME_FR",
  [AR]: "SCHOOL_DROPOUT.INPUT.LAST_NAME_AR"
}

const columns = ({ intl, schoolDropoutsUIProps }) => [
  {
    dataField:  FIRST_NAME_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: FIRST_NAME_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  LAST_NAME_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: LAST_NAME_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  "dropoutDate",
    text: intl.formatMessage({ id: "SCHOOL_DROPOUT.INPUT.DROPOUT_DATE" }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "trackingStatus",
    text: intl.formatMessage({
      id: "SCHOOL_DROPOUT.INPUT.STATE",
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
    formatExtraData: schoolDropoutsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
