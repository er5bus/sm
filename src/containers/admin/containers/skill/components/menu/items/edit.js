import AssignmentIcon from "@material-ui/icons/Assignment"
//import AssessmentIcon from "@material-ui/icons/Assessment"
//import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"
import GradeIcon from "@material-ui/icons/Grade"

import routes from "./../../../routes/forms"

const items = ({ intl, param }) => [
  {
    rule: routes.skillForm,
    icon: AssignmentIcon,
    route: routes.skillForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.SKILL" })
  },
  {
    rule: routes.evaluationRubricsForm,
    icon: GradeIcon,
    route: routes.evaluationRubricsForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.EVALUATION_RUBRIC" })
  }
]

export default items
