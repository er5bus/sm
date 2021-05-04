import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import FaceIcon from "@material-ui/icons/Face"
import HealingIcon from "@material-ui/icons/Healing"
import SchoolIcon from "@material-ui/icons/School"
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman"
import HouseIcon from "@material-ui/icons/House"
import ChildCareIcon from "@material-ui/icons/ChildCare"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import HourglassFullIcon from "@material-ui/icons/HourglassFull"
import ColorizeIcon from "@material-ui/icons/Colorize"
import EventIcon from "@material-ui/icons/Event"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import DirectionsIcon from "@material-ui/icons/Directions"
import DownloadIcon from "@material-ui/icons/GetApp"
import PersonIcon from "@material-ui/icons/Person"

import { ENDPOINTS } from "../../../store/constants"
import { DOWNLOAD_LINK, NESTED_LINKS, SEPARATOR } from "../../../../../../../components/partials"

import routes from "./../../../routes/forms"
import { FOLDER_EXIT_COURSE } from "../../../../../UIHelpers"

const items = ({ intl, param, folderStatus }) => [
  {
    component: NESTED_LINKS,
    label: intl.formatMessage({ id: "MENU.BENEFICIARY_INFO" }),
    icon: PersonIcon,
    items: [
      {
        rule: routes.personalDataForm,
        icon: FaceIcon,
        route: routes.personalDataForm.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.PERSONAL_DATA" }),
        hideOn: true,
        condition: folderStatus === FOLDER_EXIT_COURSE
      },
      {
        rule: routes.whoAmIForm,
        icon: AssignmentIndIcon,
        route: routes.whoAmIForm.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.FOLDER_WHO_AM_I" }),
        hideOn: true,
        condition: folderStatus === FOLDER_EXIT_COURSE
      },
      {
        rule: routes.academicProfessionalPathForm,
        icon: SchoolIcon,
        route: routes.academicProfessionalPathForm.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.FOLDER_ACADEMIC_PROFESSIONAL_PATH" }),
        hideOn: true,
        condition: folderStatus === FOLDER_EXIT_COURSE
      },
      {
        component: NESTED_LINKS,
        label: intl.formatMessage({ id: "MENU.FAMILY_IDENTIFICATION" }),
        icon: FolderSharedIcon,
        items: [
          {
            rule: routes.parentInformationForm,
            icon: PregnantWomanIcon,
            route: routes.parentInformationForm.path.replace(":param", param),
            hideOn: true,
            condition: folderStatus === FOLDER_EXIT_COURSE,
            label: intl.formatMessage({ id: "MENU.PARENT_INFORMATION" })
          },
          {
            rule: routes.familyMemberList,
            icon: ChildCareIcon,
            route: routes.familyMemberList.path.replace(":param", param),
            hideOn: true,
            condition: folderStatus === FOLDER_EXIT_COURSE,
            label: intl.formatMessage({ id: "MENU.FAMILY_MEMBER_INFORMATION" })
          },
          {
            rule: routes.familyInformationForm,
            icon: HouseIcon,
            route: routes.familyInformationForm.path.replace(":param", param),
            hideOn: true,
            condition: folderStatus === FOLDER_EXIT_COURSE,
            label: intl.formatMessage({ id: "MENU.FAMILY_INFORMATION" })
          }
        ]
      },
      {
        rule: routes.socialAndPhysicalDataForm,
        icon: HealingIcon,
        route: routes.socialAndPhysicalDataForm.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.SOCIAL_AND_PHYSICAL_DATA" }),
        hideOn: true,
        condition: folderStatus === FOLDER_EXIT_COURSE
      },
    ]
  },
  {
    rule: routes.folderDocumentList,
      icon: InsertDriveFileIcon,
      route: routes.folderDocumentList.path.replace(":param", param),
      label: intl.formatMessage({ id: "MENU.DOCUMENT" }),
      hideOn: true,
      condition: folderStatus === FOLDER_EXIT_COURSE
  },
  {
    rule: routes.eventList,
    icon: EventIcon,
    route: routes.eventList.path.replace(":param", param),
    label: intl.formatMessage({ id: "FOLDER.EVENT_USER_APPOINTMENT" }),
    hideOn: true,
    condition: folderStatus === FOLDER_EXIT_COURSE
  },
  {
    rule: routes.actionPlanForm,
    icon: DirectionsIcon,
    route: routes.actionPlanForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.FOLDER_ACTION_PLAN" }),
    hideOn: true,
    condition: folderStatus === FOLDER_EXIT_COURSE
  },
  {
    rule: routes.skillsEvaluationFolderList,
    icon: HourglassFullIcon,
    route: routes.skillsEvaluationFolderList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.SKILLS_EVALUATION" }),
    hideOn: true,
    condition: folderStatus === FOLDER_EXIT_COURSE
  },
  {
    rule: routes.orientationList,
    icon: ColorizeIcon,
    route: routes.orientationList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.ORIENTATION" }),
    hideOn: true,
    condition: folderStatus === FOLDER_EXIT_COURSE
  },
  {
    rule: routes.postCourseFollowUpList,
    icon: SchoolIcon,
    route: routes.postCourseFollowUpList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.POST_COURSE_FOLLOW_UP" }),
    hideOn: true,
    condition: folderStatus !== FOLDER_EXIT_COURSE
  },
  {
    rule: routes.exitCourseForm,
    icon: ExitToAppIcon,
    route: routes.exitCourseForm.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.EXIT_COURSE" }),
  },
  {
    component: SEPARATOR
  },
  {
    component: DOWNLOAD_LINK,
    fileUrl: ENDPOINTS.EXPORT_EMPLOYMENT_CONTRACT.replace(":param", param),
    filename: "employment_contract.docx",
    icon: DownloadIcon,
    label: intl.formatMessage({ id: "FOLDER.EMPLOYMENT_CONTRACT" }),
    hideOn: true,
    condition: folderStatus === FOLDER_EXIT_COURSE
  },
  {
    component: DOWNLOAD_LINK,
    fileUrl: ENDPOINTS.EXPORT_INTERNAL_RULES.replace(":param", param),
    filename: "internal_rules.docx",
    icon: DownloadIcon,
    label: intl.formatMessage({ id: "FOLDER.INTERNAL_RULES" }),
    hideOn: true,
    condition: folderStatus === FOLDER_EXIT_COURSE
  }
]

export default items
