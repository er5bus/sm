import _ from "lodash"
import {AR, FR} from "../../../../../../../../../constants"
import {sortCaret} from "../../../../../../../../../helpers"
import {getLang} from "../../../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"

const NAME_DATA_FIELD = {
  [FR]: "nameFr",
  [AR]: "nameAr"
}

const NAME_TEXT = {
  [FR]: "FAMILY_MEMBER.INPUT.NAME_FR",
  [AR]: "FAMILY_MEMBER.INPUT.NAME_AR"
}

const columns = ({ intl, familyMembersUIProps }) => [
  {
    dataField: NAME_DATA_FIELD[getLang()],
    text: intl.formatMessage({
      id: NAME_TEXT[getLang()],
    }),
    formatter: columnFormatters.NameColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "birthday",
    text: intl.formatMessage({
      id: "FAMILY_MEMBER.INPUT.BIRTHDAY",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "schoolLevel",
    text: intl.formatMessage({
      id: "FAMILY_MEMBER.INPUT.SCHOOL_LEVEL",
    }),
    formatter: columnFormatters.SchoolLevelsFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "situationType",
    text: intl.formatMessage({
      id: "FAMILY_MEMBER.INPUT.SITUATION_TYPE",
    }),
    formatter: columnFormatters.SituationTypesFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: familyMembersUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
