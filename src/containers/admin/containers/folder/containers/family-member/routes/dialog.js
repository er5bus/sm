import FamilyMemberDeleteDialog from "./../components/dialog/FamilyMemberDeleteDialog"
import FamilyMembersDeleteDialog from "./../components/dialog/FamilyMembersDeleteDialog"
import {MODULES_PERMISSIONS, DEACTIVATE} from "../../../../../../../constants"


const {FAMILY_MEMBER} = MODULES_PERMISSIONS


export const familyMemberDelete = {
  path: "/delete/family-member/:familyMemberParam",
  component: FamilyMemberDeleteDialog,
  can: FAMILY_MEMBER.permissions[DEACTIVATE]
}
export const familyMembersDelete = {
  path: "/delete/family-members",
  component: FamilyMembersDeleteDialog,
  can: FAMILY_MEMBER.permissions[DEACTIVATE]
}
