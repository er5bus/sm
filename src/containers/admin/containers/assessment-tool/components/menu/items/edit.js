import AssignmentIcon from "@material-ui/icons/Assignment"
import AssessmentIcon from "@material-ui/icons/Assessment"
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"

import routes from "./../../../routes/forms"

const items = ({ intl, param }) => [
  {
    rule: routes.assessmentToolForm,
    icon: AssignmentIcon,
    route: routes.assessmentToolForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.ASSESSMENT_TOOL" })
  },
  {
    rule: routes.associateAssessmentLevelForm,
    icon: AssessmentIcon,
    route: routes.associateAssessmentLevelForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.ASSESSMENT_LEVEL" })
  },
  {
    rule: routes.associateEvaluationRubricForm,
    icon: AssignmentTurnedInIcon,
    route: routes.associateEvaluationRubricForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.SKILL" })
  },
]

export default items
