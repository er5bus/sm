import VisibilityIcon from "@material-ui/icons/Visibility"
import EventNoteIcon from "@material-ui/icons/EventNote"
import HourglassFullIcon from "@material-ui/icons/HourglassFull"

import routes from "./../../../routes/show"

const items = ({ intl, param }) => [
  {
    rule: routes.folderGroupDisplay,
    icon: VisibilityIcon,
    route: routes.folderGroupDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "FOLDER_GROUP.SHOW" })
  },
  {
    rule: routes.folderGroupAppointments,
    icon: EventNoteIcon,
    route: routes.folderGroupAppointments.path.replace(":param", param),
    label: intl.formatMessage({ id: "FOLDER_GROUP.APPOINTMENT" })
  },
  {
    rule: routes.skillsEvaluationList,
    icon: HourglassFullIcon,
    route: routes.skillsEvaluationList.path.replace(":param", param),
    label: intl.formatMessage({ id: "FOLDER_GROUP.SKILLS_EVALUATION" })
  }
]

export default items
