import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {sortCaret} from "../../../../../../../helpers"
import {getLang} from "../../../../../../../i18n"
import * as columnFormatters from "./../column-formatters"


const KNOWLEDGE_DATA_FIELD = {
  [FR]: "knowledgeFr",
  [AR]: "knowledgeAr"
}

const KNOWLEDGE_TEXT = {
  [FR]: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_FR",
  [AR]: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_AR"
}


const columns = ({ intl, knowledgeSkillsUIProps }) => [
  {
    dataField: "id",
    text: intl.formatMessage({
      id: "KNOWLEDGE_SKILL.INPUT.ID",
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField:  KNOWLEDGE_DATA_FIELD[getLang()],
    text: intl.formatMessage({ id: KNOWLEDGE_TEXT[getLang()] }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "KNOWLEDGE_SKILL.INPUT.STATE",
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
    formatExtraData: knowledgeSkillsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
