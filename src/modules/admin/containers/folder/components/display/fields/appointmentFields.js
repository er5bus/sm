//import DescriptionIcon from '@material-ui/icons/Description';
//import ScheduleIcon from '@material-ui/icons/Schedule';
//import EventIcon from '@material-ui/icons/Event';

import eventRoutes from "./../../../../folder/routes/forms"
import * as querystring from "querystring"

import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import routes from "../../../../../routes";
import * as columnFormatters from "./../../column-formatters"


import {eventContextUIHelper, eventNatureUIHelper, eventStatusUIHelper, eventThemeUIHelper} from "../../../../../UIHelpers";
import {AR, FR} from "../../../../../../../constants";


export const appointmentFieldsFr = ({ intl }) => [
  {
    name: "observationAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_AR" }),
    //icon: DescriptionIcon,
    size: 12,
  },
]

export const appointmentFieldsAr = ({ intl }) => [
  {
    name: "observationFr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.OBSERVATION_FR" }),
    //icon: DescriptionIcon,
    size: 12,
  }
]

export const appointmentFields = ({ intl }) => [
  {
    name: "subject",
    options: eventNatureUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" }),
    //icon: DescriptionIcon,
    size: 6,
  },
  {
    name: "date",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    //icon: EventIcon,
    size: 3,
  },
  {
    name: "startHour",
    label: intl.formatMessage({ id: "FOLDER.INPUT.START_DATE" }),
    //icon: ScheduleIcon,
    size: 3,
  },
  {
    name: "endHour",
    label: intl.formatMessage({ id: "FOLDER.INPUT.END_DATE" }),
    //icon: ScheduleIcon,
    size: 3,
  },
  {
    name: "context",
    options: eventContextUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CONTEXT" }),
    //icon: DescriptionIcon,
    size: 3,
  },
  {
    name: "way",
    options: eventStatusUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.WAY" }),
    //icon: DescriptionIcon,
    size: 3,
  },
  {
    name: "theme",
    options: eventThemeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.THEME" }),
    //icon: DescriptionIcon,
    size: 3,
  },
  {
    name: {
      [FR]: "folderGroupDetails.nameFr",
      [AR]: "folderGroupDetails.nameAr"
    },
    size: 12,
    label: intl.formatMessage({ id: "FOLDER.INPUT.GROUP_FOLDER" }),
  },
  {
    name: "folders",
    showSearchField: false,
    openShowPage: ({ id }, history) => history.push(routes.folderShow.path.replace(":param", id)),
    addAnotherActions: [
      {
        "label": intl.formatMessage({ id: "GENERAL.ADD_EVENT" }),
        "iconPath": "/media/svg/icons/Navigation/Plus.svg",
        "onShowCondition": ({ hasEvent }) => !hasEvent,
        "onClick": ({ id }, history, item) => {
          const { subject, context, theme, way, date } = item
          history.push({
            pathname: eventRoutes.eventCreate.path.replace(":param", id),
            search: "?" + querystring.stringify({
              nature: subject,
              theme,
              context,
              way,
              state: 1,
              date
            })
          })
        }
      },
      {
        "label": intl.formatMessage({ id: "GENERAL.SHOW_EVENT" }),
        "iconPath": "/media/svg/icons/General/Clipboard.svg",
        "onShowCondition": ({ hasEvent }) => hasEvent,
        "onClick": ({ id, event }, history) => history.push(eventRoutes.eventShow.path.replace(":param", id).replace(":eventParam", event.id ) )
      }
    ],
    columns: [
      {
        dataField: "id",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.ID",
        }),
      },
      {
        dataField: "firstNameAr",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.FULL_NAME",
        }),
        formatter: columnFormatters.BeneficiaryColumnFormatter
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "FOLDER.INPUT.FOLDERS" }),
    size: 12,
  },
]
