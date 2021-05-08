import DescriptionIcon from "@material-ui/icons/Description";
import VpnKeyIcon from "@material-ui/icons/VpnKey";


export const evaluationRubricFieldsAr = ({ intl }) => [
  {
    name: "rubricAr",
    label: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.RUBRIC_AR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const evaluationRubricFieldsFr = ({ intl }) => [
  {
    name: "rubricFr",
    label: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.RUBRIC_FR" }),
    icon: DescriptionIcon,
    size: 12,
  }
]

export const evaluationRubricFields = ({ intl }) => [
  {
    name: "id",
    label: intl.formatMessage({ id: "EVALUATION_RUBRIC.INPUT.ID" }),
    icon: VpnKeyIcon,
    size: 12,
  }
]
