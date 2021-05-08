import * as Yup from 'yup'

import {
  goalsTypesUIHelper
} from '../../../../../UIHelpers'

import {
  SELECT,
  WYSIWYG_EDITOR
} from "../../../../../../../components/partials"

// Validation schema
export const folderActionPlanFields = ({ intl }) => [
  {
    name: "goalsType",
    component: SELECT,
    options: goalsTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.INPUT.GOALS_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.INPUT.GOALS_TYPE" }),
    size: 12,
    validation: Yup.number()
  }

]

// Validation schema
export const folderActionPlanFieldsAr = ({ intl }) => [
  {
    name: 'goalsSpecificAr',
    component: WYSIWYG_EDITOR,
    label: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.GOALS_SPECIFIC_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.GOALS_SPECIFIC_AR" }),
    size: 12,
    validation: Yup.string(),
  }
]

export const folderActionPlanFieldsFr = ({ intl }) => [
  {
    name: 'goalsSpecificFr',
    component: WYSIWYG_EDITOR,
    label: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.GOALS_SPECIFIC_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.GOALS_SPECIFIC_FR" }),
    size: 12,
    validation: Yup.string()
  }
]
