import DescriptionIcon from "@material-ui/icons/Description";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


export const knowledgeSkillFieldsAr = ({ intl }) => [
  {
    name: "knowledgeAr",
    label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_AR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const knowledgeSkillFieldsFr = ({ intl }) => [
  {
    name: "knowledgeFr",
    label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.KNOWLEDGE_FR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const knowledgeSkillFields = ({ intl }) => [
  {
    name: "id",
    label: intl.formatMessage({ id: "KNOWLEDGE_SKILL.INPUT.ID" }),
    icon: VpnKeyIcon,
    size: 12,
  }
]
