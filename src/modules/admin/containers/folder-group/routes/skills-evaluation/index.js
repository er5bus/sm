import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"
import {FOLDER_EXIT_COURSE} from "../../../../UIHelpers"

const SkillsEvaluation = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationNewEdit"))
const SkillsEvaluationEdit = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationNewEdit"))
const SkillsEvaluationShow = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationShow"))
const SkillsEvaluationPage = lazy(() => import("./../../containers/skills-evaluation/SkillsEvaluationPage"))


const { FOLDER } = MODULES_PERMISSIONS

const skillsEvaluationBasePath = "/skills-evaluations"

export const skillsEvaluationCreate = {
  path: `${skillsEvaluationBasePath}/new`,
  component: SkillsEvaluation,
  can: FOLDER.permissions[CREATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const skillsEvaluationEdit = {
  path: `${skillsEvaluationBasePath}/:skillsEvaluationParam/update`,
  component: SkillsEvaluationEdit,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const skillsEvaluationShow = {
  path: `${skillsEvaluationBasePath}/:skillsEvaluationParam/read`,
  component: SkillsEvaluationShow,
  can: FOLDER.permissions[VIEW],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const skillsEvaluationList = {
  path: skillsEvaluationBasePath,
  component: SkillsEvaluationPage,
  can: FOLDER.permissions[VIEW],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}
