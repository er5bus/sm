import EditIcon from "@material-ui/icons/Edit"
import EventNoteIcon from "@material-ui/icons/EventNote"
import HourglassFullIcon from "@material-ui/icons/HourglassFull"

import routes from "./../../../routes/edit"

const items = ({ intl, param }) => [
  {
    rule: routes.folderGroupForm,
    icon: EditIcon,
    route: routes.folderGroupForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "FOLDER_GROUP.EDIT" })
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
