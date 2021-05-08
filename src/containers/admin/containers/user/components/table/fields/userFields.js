import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"


const FIRST_NAME_DATA_FIELD = {
  [FR]: "user.firstName",
  [AR]: "user.firstNameAr"
}

const FIRST_NAME_TEXT = {
  [FR]: "USER.INPUT.FIRST_NAME_FR",
  [AR]: "USER.INPUT.FIRST_NAME_AR"
}

const LAST_NAME_DATA_FIELD = {
  [AR]: "user.lastNameAr",
  [FR]: "user.lastName"
}

const LAST_NAME_TEXT = {
  [FR]: "USER.INPUT.LAST_NAME_FR",
  [AR]: "USER.INPUT.LAST_NAME_AR"
}


const columns = ({ intl, usersUIProps }) => [
  {
      dataField: "user.email",
      text: intl.formatMessage({
        id: "USER.INPUT.EMAIL",
      }),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: FIRST_NAME_DATA_FIELD[getLang()],
      text: intl.formatMessage({
        id: FIRST_NAME_TEXT[getLang()],
      }),
      sort: true,
      sortCaret: sortCaret,
    },
    {
      dataField: LAST_NAME_DATA_FIELD[getLang()],
      text: intl.formatMessage({
        id: LAST_NAME_TEXT[getLang()],
      }),
      sort: true,
      sortCaret: sortCaret,
    },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: usersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
