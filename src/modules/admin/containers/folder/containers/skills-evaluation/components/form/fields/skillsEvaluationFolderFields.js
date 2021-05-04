import * as Yup from "yup"
import moment from "moment"
import * as columnFormatters from "./../../column-formatters"
import { assessmentToolOptionUIHelper, diagnosisFormUIHelper /* problemTypeUIHelper */ } from "./../../../../../../../UIHelpers"
import { DATE_PICKER, INPUT, PRELOADED_TABLE, SELECT, TEXTAREA } from "./../../../../../../../../../components/partials"
import { getAttr } from "../../../../../../../../../helpers"
import { getLang } from "../../../../../../../../../i18n"
import { AR, FR } from "../../../../../../../../../constants"

const LEVEL_FIELD_DATA = {
  [AR]: "levelAr",
  [FR]: "levelFr"
}

// Validation schema
export const skillsEvaluationFolderFields = ({ intl }) => [
  /* {
    name: "problemType",
    component: SELECT,
    options: problemTypeUIHelper(intl),
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.PROBLEM_TYPE" }),
    placeholder: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.PROBLEM_TYPE" }),
    validation: Yup.number().required(),
    size: 4
  }, */
  {
    name: "diagnosisForm",
    component: SELECT,
    options: diagnosisFormUIHelper(intl),
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.DIAGNOSIS_FORM" }),
    placeholder: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.DIAGNOSIS_FORM" }),
    validation: Yup.number().required(),
    size: 6
  },
  {
    name: "evaluationTool",
    component: SELECT,
    loadOptions: assessmentToolOptionUIHelper,
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ASSESSMENT_TOOL" }),
    placeholder: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ASSESSMENT_TOOL" }),
    validation: Yup.number().required(),
    saveOptions: [
      {
        ref: "evaluationToolDetails.assessmentLevelsDetails",
        attr: "assessmentLevelsDetails"
      },
      {
        attr: "evaluationRubricsDetails",
        ref: "skillAssessmentSetDetails",
        formatter: (items = []) => items.map((item) => ({
          evaluationRubricDetails: item,
          evaluationRubric: item.id,
          date: moment().format("DD/MM/YYYY")
        }))
      }
    ],
    size: 6
  },
  {
    name: "skillsAssessmentsSet",
    component: PRELOADED_TABLE,
    loadAttrName: "skillAssessmentSetDetails",
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
        fieldType: SELECT,
        loadOptionsFromFormik: (values) => {
          const levels = getAttr(values, "evaluationToolDetails.assessmentLevelsDetails", [])
          return levels.map((level) => ({ value: level.id, label: getAttr(level, LEVEL_FIELD_DATA[getLang()]) }))
        },
        editable: true
      },
      {
        dataField: "commentAr",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.COMMENT_AR"
        }),
        fieldType: TEXTAREA,
        editable: true
      },
      {
        dataField: "commentFr",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.COMMENT_FR"
        }),
        fieldType: TEXTAREA,
        editable: true
      },
      {
        dataField: "date",
        text: intl.formatMessage({
          id: "SKILLS_EVALUATION.INPUT.DATE"
        }),
        fieldType: DATE_PICKER,
        editable: true
      }
    ],
    validation: Yup.array().required(),
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.SKILLS_ASSESSMENT" })
  }
]

// Validation schema
export const skillsEvaluationFolderFieldsAr = ({ intl }) => [
  {
    name: "entiteldAr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_AR" }),
    placeholder: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_AR" }),
    validation: Yup.string().required(),
    required: true,
    size: 12
  }
]

export const skillsEvaluationFolderFieldsFr = ({ intl }) => [
  {
    name: "entiteldFr",
    component: INPUT,
    label: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_FR" }),
    placeholder: intl.formatMessage({ id: "SKILLS_EVALUATION.INPUT.ENTITLED_FR" }),
    validation: Yup.string().required(),
    required: true,
    size: 12
  }
]
