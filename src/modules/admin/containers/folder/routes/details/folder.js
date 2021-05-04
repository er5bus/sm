import {lazy} from "react"

import { MODULES_PERMISSIONS, VIEW } from "../../../../../../constants"

const PersonalDataDisplay = lazy(() => import("./../../components/display/PersonalDataDisplay"))
const ExitCourseDisplay = lazy(() => import("./../../components/display/ExitCourseDisplay"))

const SocialAndPhysicalDataDisplay = lazy(() => import("./../../components/display/SocialAndPhysicalDataDisplay"))
const FolderActionPlanDisplay = lazy(() => import("./../../components/display/FolderActionPlanDisplay"))
const FolderAcademicProfessionalPathDisplay = lazy(() => import("./../../components/display/FolderAcademicProfessionalPathDisplay"))
const FolderHowAmIDisplay = lazy(() => import("./../../components/display/FolderHowAmIDisplay"))
const ParentInformationDisplay = lazy(() => import("./../../components/display/ParentInformationDisplay"))
const FamilyInformationDisplay = lazy(() => import("./../../components/display/FamilyInformationDisplay"))
const FolderJustifiedDialog = lazy(() => import("./../../components/dialog/folder/FolderJustifiedDialog"))


const { FOLDER } = MODULES_PERMISSIONS

export const justifiedFolder = {
  path: "/justified-folder",
  component: FolderJustifiedDialog,
  can: FOLDER.permissions[VIEW]
}

export const exitCourseDisplay = {
  path: "/exit-course",
  component: ExitCourseDisplay,
  can: FOLDER.permissions[VIEW]
}

export const personalDataDisplay = {
  path: "/personal-data",
  component: PersonalDataDisplay,
  can: FOLDER.permissions[VIEW]
}

export const socialAndPhysicalDataDisplay = {
  path: "/social-and-physical-data",
  component: SocialAndPhysicalDataDisplay,
  can: FOLDER.permissions[VIEW]
}

export const academicProfessionalPathDisplay = {
  path: "/academic-professional-path",
  component: FolderAcademicProfessionalPathDisplay,
  can: FOLDER.permissions[VIEW]
}

export const actionPlanDisplay = {
  path: "/action-plan",
  component: FolderActionPlanDisplay,
  can: FOLDER.permissions[VIEW]
}

export const whoAmIDisplay = {
  path: "/who-ami",
  component: FolderHowAmIDisplay,
  can: FOLDER.permissions[VIEW]
}

export const parentInformationDisplay = {
  path: "/parent-information",
  component: ParentInformationDisplay,
  can: FOLDER.permissions[VIEW]
}


export const familyInformationDisplay = {
  path: "/family-information",
  component: FamilyInformationDisplay,
  can: FOLDER.permissions[VIEW]
}
