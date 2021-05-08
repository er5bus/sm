import { lazy } from "react"
import {MODULES_PERMISSIONS, CREATE, UPDATE, VIEW} from "../../../../../../constants"
import {FOLDER_EXIT_COURSE} from "../../../../UIHelpers"

const FamilyMember = lazy(() => import("./../../containers/family-member/FamilyMemberNewEdit"))
const FamilyMemberEdit = lazy(() => import("./../../containers/family-member/FamilyMemberNewEdit"))
const FamilyMemberShow = lazy(() => import("./../../containers/family-member/FamilyMemberShow"))
const FamilyMemberPage = lazy(() => import("./../../containers/family-member/FamilyMemberPage"))


const { FOLDER } = MODULES_PERMISSIONS

const familyMemberBasePath = "/family-members"

export const familyMemberCreate = {
  path: `${familyMemberBasePath}/new`,
  component: FamilyMember,
  exact: true,
  can: FOLDER.permissions[CREATE],
  showWhen: ["state.admin.folder.folder.status", (item) => item !== FOLDER_EXIT_COURSE]
}

export const familyMemberEdit = {
  path: `${familyMemberBasePath}/:familyMemberParam/update`,
  component: FamilyMemberEdit,
  can: FOLDER.permissions[UPDATE],
  showWhen: ["state.admin.folder.folder.status", (item) => item !== FOLDER_EXIT_COURSE]
}

export const familyMemberShow = {
  path: `/${familyMemberBasePath}/:familyMemberParam/read`,
  component: FamilyMemberShow,
  can: FOLDER.permissions[VIEW],
  showWhen: ["state.admin.folder.folder.status", (item) => item !== FOLDER_EXIT_COURSE]
}

export const familyMemberList = {
  path: familyMemberBasePath,
  component: FamilyMemberPage,
  can: FOLDER.permissions[VIEW],
  showWhen: ["state.admin.folder.folder.status", (item) => item !== FOLDER_EXIT_COURSE]
}
