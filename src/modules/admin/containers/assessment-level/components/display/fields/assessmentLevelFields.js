import DescriptionIcon from "@material-ui/icons/Description";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


export const assessmentLevelFieldsAr = ({ intl }) => [
  {
    name: "levelAr",
    label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.LEVEL_AR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const assessmentLevelFieldsFr = ({ intl }) => [
  {
    name: "levelFr",
    label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.LEVEL_FR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const assessmentLevelFields = ({ intl }) => [
  {
    name: "id",
    label: intl.formatMessage({ id: "ASSESSMENT_LEVEL.INPUT.ID" }),
    icon: VpnKeyIcon,
    size: 12,
  }
]
