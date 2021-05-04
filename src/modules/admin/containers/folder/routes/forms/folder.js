import {lazy} from "react"
import {MODULES_PERMISSIONS, UPDATE} from "../../../../../../constants"
import {FOLDER_EXIT_COURSE} from "../../../../UIHelpers"

const PersonalDataForm = lazy(() => import("./../../components/form/PersonalDataForm"))
const ExitCourseForm = lazy(() => import("./../../components/form/ExitCourseForm"))
const WhoAMIForm = lazy(() => import("./../../components/form/WhoAMIForm"))
const AcademicProfessionalPathForm = lazy(() => import("./../../components/form/AcademicProfessionalPathForm"))
const SocialAndPhysicalDataForm = lazy(() => import("./../../components/form/SocialAndPhysicalDataForm"))
const ParentInformationForm = lazy(() => import("./../../components/form/ParentInformationForm"))
const FamilyInformationForm = lazy(() => import("./../../components/form/FamilyInformationForm"))
const FolderActionPlanForm = lazy(() => import("./../../components/form/FolderActionPlanForm"))


const { FOLDER } = MODULES_PERMISSIONS


export const personalDataForm = {
  path: "/personal-data",
  component: PersonalDataForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const exitCourseForm = {
  path: "/exit-course",
  component: ExitCourseForm,
  can: FOLDER.permissions[UPDATE]
}

export const whoAmIForm = {
  path: "/who-ami",
  component: WhoAMIForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const academicProfessionalPathForm = {
  path: "/academic-professional-path",
  component: AcademicProfessionalPathForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const socialAndPhysicalDataForm = {
  path: "/social-and-physical-data",
  component: SocialAndPhysicalDataForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const actionPlanForm = {
  path: "/action-plan",
  component: FolderActionPlanForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}

export const parentInformationForm = {
  path: "/parent-information",
  component: ParentInformationForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}
export const familyInformationForm = {
  path: "/family-informations",
  component: FamilyInformationForm,
  can: FOLDER.permissions[UPDATE],
  showWhen: ({ status }) => status !== FOLDER_EXIT_COURSE
}
