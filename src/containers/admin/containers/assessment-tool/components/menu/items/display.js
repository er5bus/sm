import AssignmentIcon from "@material-ui/icons/Assignment"
import AssessmentIcon from "@material-ui/icons/Assessment"
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"

import routes from "./../../../routes/details"

const items = ({ intl, param }) => [
  {
    rule: routes.assessmentToolDisplay,
    icon: AssignmentIcon,
    route: routes.assessmentToolDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.ASSESSMENT_TOOL" })
  },
  {
    rule: routes.associateAssessmentLevelDisplay,
    icon: AssessmentIcon,
    route: routes.associateAssessmentLevelDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.ASSESSMENT_LEVEL" })
  },
  {
    rule: routes.associateEvaluationRubricDisplay,
    icon: AssignmentTurnedInIcon,
    route: routes.associateEvaluationRubricDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.SKILL" })
  },
]

export default items
