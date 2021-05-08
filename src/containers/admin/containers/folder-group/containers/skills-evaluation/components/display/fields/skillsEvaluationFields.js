import * as columnFormatters from "./../../column-formatters"
import { assessmentToolOptionUIHelper, diagnosisFormUIHelper /* problemTypeUIHelper */ } from "./../../../../../../../UIHelpers"
import {TABLE_OF_ITEMS } from "./../../../../../../../../../components/partials"
import { AR, FR } from "../../../../../../../../../constants"

// Validation schema
export const skillsEvaluationFields = ({ intl }) => [
  /* {
    name: "problemType",
    options: problemTypeUIHelper(intl),
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.PROBLEM_TYPE" }),
    size: 4
  }, */
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
  }
]

// Validation schema
export const skillsEvaluationFieldsAr = ({ intl }) => [
  {
    name: "entiteldAr",
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_AR" }),
    placeholder: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_AR" }),
    size: 12
  }
]

export const skillsEvaluationFieldsFr = ({ intl }) => [
  {
    name: "entiteldFr",
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_FR" }),
    size: 12
  }
]

export const skillsEvaluationPerFolderFields = ({ intl }) => [
  {
    name: {
      [AR]: ["folderDetails.firstNameAr", "folderDetails.lastNameFr"],
      [FR]: ["folderDetails.firstNameFr", "folderDetails.lastNameFr"],
    },
    label: intl.formatMessage({ id: "FOLDER.INPUT.FULL_NAME" }),
    size: 12,
  },
  {
    name: "skillsAssessmentsSet",
    component: TABLE_OF_ITEMS,
    showSearchField: false,
    keyField: "evaluationRubricDetails.id",
    columns: [
      {
        dataField: "evaluationRubricDetails",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.ASSESSMENT_RUBRIC"
        }),
        formatter: columnFormatters.EvaluationRubricsColumnFormatter
      },
      {
        dataField: "assessmentLevel",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.LEVEL"
        }),
        formatter: columnFormatters.AssessmentLevelColumnFormatter,
      },
      {
        dataField: "commentAr",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.COMMENT_AR"
        }),
      },
      {
        dataField: "commentFr",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.COMMENT_FR"
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
