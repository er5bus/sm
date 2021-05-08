import {lazy} from "react"

import { MODULES_PERMISSIONS, UPDATE } from "../../../../../../constants"

//const SkillsEvaluation = lazy(() => import("./../../components/form/SkillsEvaluationNewEdit"))
const FolderGroupForm = lazy(() => import("./../../components/form/FolderGroupForm"))
const FolderGroupAppointments = lazy(() => import("./../../components/display/FolderGroupAppointments"))


const { FOLDER_GROUP } = MODULES_PERMISSIONS


export const folderGroupForm = {
  path: "/folder-group-information",
  component: FolderGroupForm,
  can: FOLDER_GROUP.permissions[UPDATE]
}

/*export const folderGroupSkillsEvaluation = {
  path: "/folder-group-skills-evaluation",
  component: SkillsEvaluation,
  can: FOLDER_GROUP.permissions[UPDATE]
}*/


export const folderGroupAppointments = {
  path: "/folder-group-appointments",
  component: FolderGroupAppointments,
  can: FOLDER_GROUP.permissions[UPDATE]
}
