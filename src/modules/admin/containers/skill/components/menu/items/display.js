import AssignmentIcon from "@material-ui/icons/Assignment"
import AssessmentIcon from "@material-ui/icons/Assessment"
import AssignmentTurnedInIcon from "@material-ui/icons/AssignmentTurnedIn"
import GradeIcon from "@material-ui/icons/Grade"

import routes from "./../../../routes/details"

const items = ({ intl, param }) => [
  {
    rule: routes.skillDisplay,
    icon: AssignmentIcon,
    route: routes.skillDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.SKILL" })
  },
  {
    rule: routes.aptitudeSkillDisplay,
    icon: AssessmentIcon,
    route: routes.aptitudeSkillDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.APTITUDE_SKILL" })
  },
  {
    rule: routes.knowledgeSkillDisplay,
    icon: AssignmentTurnedInIcon,
    route: routes.knowledgeSkillDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.KNOWLEDGE_SKILL" })
  },
  {
    rule: routes.evaluationRubricsDisplay,
    icon: GradeIcon,
    route: routes.evaluationRubricsDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.EVALUATION_RUBRIC" })
  }
]

export default items
