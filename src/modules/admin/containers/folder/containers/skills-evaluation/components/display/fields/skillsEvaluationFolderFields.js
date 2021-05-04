import * as columnFormatters from "./../../column-formatters"
import { assessmentToolOptionUIHelper, diagnosisFormUIHelper/*, problemTypeUIHelper*/ } from "./../../../../../../../UIHelpers"
import {TABLE_OF_ITEMS} from "../../../../../../../../../components/partials"
import {AR, FR} from "../../../../../../../../../constants"

// Validation schema
export const skillsEvaluationFolderFields = ({ intl }) => [
  /*{
    name: "problemType",
    options: problemTypeUIHelper(intl),
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.PROBLEM_TYPE" }),
    size: 4
  },*/
  {
    name: "diagnosisForm",
    options: diagnosisFormUIHelper(intl),
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.DIAGNOSIS_FORM" }),
    size: 6
  },
  {
    name: {
      [FR]: "evaluationToolDetails.outilFr",
      [AR]: "evaluationToolDetails.outilAr"
    },
    loadOptions: assessmentToolOptionUIHelper,
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ASSESSMENT_TOOL" }),
    size: 6
  },
  {
    name: "skillsAssessmentsSet",
    component: TABLE_OF_ITEMS,
    showActions: false,
    columns: [
      {
        dataField: "evaluationRubricDetails",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.ASSESSMENT_RUBRIC"
        }),
        formatter: columnFormatters.EvaluationRubricsColumnFormatter
      },
      {
        dataField: "assessmentLevelDetails",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.LEVEL"
        }),
        formatter: columnFormatters.AssessmentLevelColumnFormatter,
      },
      {
        dataField: "commentFr",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.COMMENT_AR"
        }),
      },
      {
        dataField: "date",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.DATE"
        }),
      }
    ],
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.SKILLS_ASSESSMENT" })
  }
]

// Validation schema
export const skillsEvaluationFolderFieldsAr = ({ intl }) => [
  {
    name: "entiteldAr",
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_AR" }),
    size: 12
  }
]

export const skillsEvaluationFolderFieldsFr = ({ intl }) => [
  {
    name: "entiteldFr",
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_FR" }),
    size: 12
  }
]
