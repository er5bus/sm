import InsertDriveFileIcon from "@material-ui/icons/InsertDriveFile"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import FaceIcon from "@material-ui/icons/Face"
import HealingIcon from "@material-ui/icons/Healing"
import SchoolIcon from "@material-ui/icons/School"
import PregnantWomanIcon from "@material-ui/icons/PregnantWoman"
import HouseIcon from "@material-ui/icons/House"
import ChildCareIcon from "@material-ui/icons/ChildCare"
import EventIcon from "@material-ui/icons/Event"
import FolderSharedIcon from "@material-ui/icons/FolderShared"
import ExitToAppIcon from "@material-ui/icons/ExitToApp"
import HourglassFullIcon from "@material-ui/icons/HourglassFull"
import ColorizeIcon from "@material-ui/icons/Colorize"
import DirectionsIcon from "@material-ui/icons/Directions"
import DownloadIcon from "@material-ui/icons/GetApp"
import PersonIcon from "@material-ui/icons/Person"

import { ENDPOINTS } from "../../../store/constants"
import { DOWNLOAD_LINK, NESTED_LINKS, SEPARATOR } from "../../../../../../../components/partials"

import routes from "./../../../routes/details"

const items = ({ intl, param }) => [
  {
    component: NESTED_LINKS,
    label: intl.formatMessage({ id: "MENU.BENEFICIARY_INFO" }),
    icon: PersonIcon,
    items: [
      {
        rule: routes.personalDataDisplay,
        icon: FaceIcon,
        route: routes.personalDataDisplay.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.PERSONAL_DATA" })
      },
      {
        rule: routes.whoAmIDisplay,
        icon: AssignmentIndIcon,
        route: routes.whoAmIDisplay.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.FOLDER_WHO_AM_I" })
      },
      {
        rule: routes.academicProfessionalPathDisplay,
        icon: SchoolIcon,
        route: routes.academicProfessionalPathDisplay.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.FOLDER_ACADEMIC_PROFESSIONAL_PATH" })
      },
      {
        component: NESTED_LINKS,
        label: intl.formatMessage({ id: "MENU.FAMILY_IDENTIFICATION" }),
        icon: FolderSharedIcon,
        items: [
          {
            rule: routes.parentInformationDisplay,
            icon: PregnantWomanIcon,
            route: routes.parentInformationDisplay.path.replace(":param", param),
            label: intl.formatMessage({ id: "MENU.PARENT_INFORMATION" })
          },
          {
            rule: routes.familyMemberList,
            icon: ChildCareIcon,
            route: routes.familyMemberList.path.replace(":param", param),
            label: intl.formatMessage({ id: "MENU.FAMILY_MEMBER_INFORMATION" })
          },
          {
            rule: routes.familyInformationDisplay,
            icon: HouseIcon,
            route: routes.familyInformationDisplay.path.replace(":param", param),
            label: intl.formatMessage({ id: "MENU.FAMILY_INFORMATION" })
          }
        ]
      },
      {
        rule: routes.socialAndPhysicalDataDisplay,
        icon: HealingIcon,
        route: routes.socialAndPhysicalDataDisplay.path.replace(":param", param),
        label: intl.formatMessage({ id: "MENU.SOCIAL_AND_PHYSICAL_DATA" })
      }
    ]
  },
  {
    rule: routes.folderDocumentList,
    icon: InsertDriveFileIcon,
    route: routes.folderDocumentList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.DOCUMENT" })
  },
  {
    rule: routes.eventList,
    icon: EventIcon,
    route: routes.eventList.path.replace(":param", param),
    label: intl.formatMessage({ id: "FOLDER.EVENT_USER_APPOINTMENT" })
  },
  {
    rule: routes.actionPlanDisplay,
    icon: DirectionsIcon,
    route: routes.actionPlanDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.FOLDER_ACTION_PLAN" })
  },
  {
    rule: routes.skillsEvaluationFolderList,
    icon: HourglassFullIcon,
    route: routes.skillsEvaluationFolderList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.SKILLS_EVALUATION" })
  },
  {
    rule: routes.orientationList,
    icon: ColorizeIcon,
    route: routes.orientationList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.ORIENTATION" })
  },
  {
    rule: routes.postCourseFollowUpList,
    icon: SchoolIcon,
    route: routes.postCourseFollowUpList.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.POST_COURSE_FOLLOW_UP" })
  },
  {
    rule: routes.exitCourseDisplay,
    icon: ExitToAppIcon,
    route: routes.exitCourseDisplay.path.replace(":param", param),
    label: intl.formatMessage({ id: "MENU.EXIT_COURSE" })
  },
  {
    component: SEPARATOR
  },
  {
    component: DOWNLOAD_LINK,
    fileUrl: ENDPOINTS.EXPORT_EMPLOYMENT_CONTRACT.replace(":param", param),
    filename: "employment_contract.docx",
    icon: DownloadIcon,
    label: intl.formatMessage({ id: "FOLDER.EMPLOYMENT_CONTRACT" })
  },
  {
    component: DOWNLOAD_LINK,
    fileUrl: ENDPOINTS.EXPORT_INTERNAL_RULES.replace(":param", param),
    filename: "internal_rules.docx",
    icon: DownloadIcon,
    label: intl.formatMessage({ id: "FOLDER.INTERNAL_RULES" })
  }
]

export default items
