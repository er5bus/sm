import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"
import {FOLDER_EXIT_COURSE} from "../../../../UIHelpers"

const SkillsEvaluation = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationNewEdit"))
const SkillsEvaluationEdit = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationNewEdit"))
const SkillsEvaluationShow = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationShow"))
const SkillsEvaluationPage = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationPage"))


const { FOLDER } = MODULES_PERMISSIONS

const skillsEvaluationBasePath = "/skills-evaluations"

export const skillsEvaluationFolderCreate = {
  path: `${skillsEvaluationBasePath}/new`,
  component: SkillsEvaluation,
  can: FOLDER.permissions[CREATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const skillsEvaluationFolderEdit = {
  path: `${skillsEvaluationBasePath}/:skillsEvaluationFolderParam/update`,
  component: SkillsEvaluationEdit,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const skillsEvaluationFolderShow = {
  path: `${skillsEvaluationBasePath}/:skillsEvaluationFolderParam/read`,
  component: SkillsEvaluationShow,
  can: FOLDER.permissions[VIEW],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const skillsEvaluationFolderList = {
  path: skillsEvaluationBasePath,
  component: SkillsEvaluationPage,
  can: FOLDER.permissions[VIEW],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}
