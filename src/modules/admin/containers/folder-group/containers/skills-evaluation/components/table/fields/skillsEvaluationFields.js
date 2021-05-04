import _ from "lodash"
import {AR, FR} from "../../../../../../../../../constants"
import {sortCaret} from "../../../../../../../../../helpers"
import {getLang} from "../../../../../../../../../i18n"
import * as columnFormatters from "./../../column-formatters"

const ENTITLED_DATA_FIELD = {
  [FR]: "entiteldFr",
  [AR]: "entiteldAr"
}

const ENTITLED_LABEL = {
  [FR]: "SKILLS_EVALUATION.INPUT.ENTITLED_FR",
  [AR]: "SKILLS_EVALUATION.INPUT.ENTITLED_AR"
}

const columns = ({ intl, skillsEvaluationsUIProps }) => [
  /*{
    dataField: "id",
    text: intl.formatMessage({
      id: "SKILLS_EVALUATION.INPUT.IDENTIFIER",
    }),
    sort: true,
    sortCaret: sortCaret,
  },*/
  {
    dataField: ENTITLED_DATA_FIELD[getLang()],
    text: intl.formatMessage({
      id: ENTITLED_LABEL[getLang()],
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  /*{
    dataField: "problemType",
    text: intl.formatMessage({
      id: "SKILLS_EVALUATION.INPUT.PROBLEM_TYPE",
    }),
    formatter: columnFormatters.ProblemTypeColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },*/
  {
    dataField: "diagnosisForm",
    text: intl.formatMessage({
      id: "SKILLS_EVALUATION.INPUT.DIAGNOSIS_FORM",
    }),
    formatter: columnFormatters.DiagnosisFormColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "evaluationToolDetails",
    text: intl.formatMessage({
      id: "SKILLS_EVALUATION.INPUT.ASSESSMENT_TOOL",
    }),
    formatter: columnFormatters.EvaluationToolColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.ActionsColumnFormatter,
    formatExtraData: skillsEvaluationsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "200px",
    },
  },
]


export default _.memoize(columns)
