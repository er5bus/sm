import DescriptionIcon from "@material-ui/icons/Description";
import {AR, FR} from "../../../../../../../constants";



export const serviceFields = ({ intl }) => [
  {
    name: {
      [FR]: "serviceType.labelFr",
      [AR]: "serviceType.labelAr",
    },
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.SERVICE_TYPE" }),
    size: 6,
  },
]

// Validation schema
export const serviceFieldsAr = ({ intl }) => [
  {
    name: "labelAr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.LABEL_AR" }),
    size: 6,
  },
  {
    name: "targetAudienceAr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.TARGET_AUDIENCE_AR" }),
    size: 6,
  },
  {
    name: "placeAr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.PLACE_AR" }),
    size: 6,
  },
  {
    name: "organizationalModalitiesAr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.ORGANIZATIONAL_MODALITIES_AR" }),
    size: 6,
  },
  {
    name: "goalsAr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.GOALS_AR" }),
    size: 12,
  },

]

export const serviceFieldsFr = ({ intl }) => [
  {
    name: "labelFr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.LABEL_FR" }),
    size: 6,
  },
  {
    name: "targetAudienceFr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.TARGET_AUDIENCE_FR" }),
    size: 6,
  },
  {
    name: "placeFr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.PLACE_FR" }),
    size: 6,
  },
  {
    name: "organizationalModalitiesFr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.ORGANIZATIONAL_MODALITIES_FR" }),
    size: 6,
  },
  {
    name: "goalsFr",
    icon: DescriptionIcon,
    label: intl.formatMessage({ id: "SERVICE.INPUT.GOALS_FR" }),
    size: 12,
  },
]
