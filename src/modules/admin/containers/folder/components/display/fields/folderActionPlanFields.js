import {
  goalsTypesUIHelper,
} from '../../../../../UIHelpers'

// Validation schema
export const folderActionPlanFields = ({ intl }) => [
  {
    name: "goalsType",
    options: goalsTypesUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.INPUT.GOALS_TYPE" }),
    size: 12,
  }

]

// Validation schema
export const folderActionPlanFieldsAr = ({ intl }) => [
  {
    name: 'goalsSpecificAr',
    html: true,
    label: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.GOALS_SPECIFIC_AR" }),
    size: 12,
  }
]

export const folderActionPlanFieldsFr = ({ intl }) => [
  {
    name: 'goalsSpecificFr',
    html: true,
    label: intl.formatMessage({ id: "FOLDER.ACTION_PLAN.INPUT.GOALS_SPECIFIC_FR" }),
    size: 12,
  }
]
