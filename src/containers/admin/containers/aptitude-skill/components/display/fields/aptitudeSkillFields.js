import DescriptionIcon from "@material-ui/icons/Description";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


export const aptitudeSkillFieldsAr = ({ intl }) => [
  {
    name: "aptitudeAr",
    label: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.KNOWLEDGE_AR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const aptitudeSkillFieldsFr = ({ intl }) => [
  {
    name: "aptitudeFr",
    label: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.KNOWLEDGE_FR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]


export const aptitudeSkillFields = ({ intl }) => [
  {
    name: "id",
    label: intl.formatMessage({ id: "APTITUDE_SKILL.INPUT.ID" }),
    icon: VpnKeyIcon,
    size: 12,
  }
]
