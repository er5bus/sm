import _ from "lodash"
import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import { weekUIHelper } from "./../../../../../UIHelpers"
import * as columnFormatters from "./../../column-formatters"

const availabilitySettingStructureFields = ({ intl }) => [
  {
    name: "days",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DAYS" }),
    options: weekUIHelper(intl),
    size: 6,
    multiple: true,
  },
  {
    name: "timeBetweenAppointment",
    label: intl.formatMessage({ id: "FOLDER.INPUT.TIME_BETWEEN_APPOINTMENT" }),
    size: 6
  },
  {
    name: "beforeMiddayStartHour",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_START_DATE" }),
    size: 3
  },
  {
    name: "beforeMiddayEndHour",
    format: "HH:mm",
    label: intl.formatMessage({ id: "FOLDER.INPUT.BEFORE_MIDDAY_END_DATE" }),
    size: 3
  },
  {
    name: "afterMiddayStartHour",
    label: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_START_DATE" }),
    size: 3
  },
  {
    name: "afterMiddayEndHour",
    label: intl.formatMessage({ id: "FOLDER.INPUT.AFTER_MIDDAY_END_DATE" }),
    size: 3
  },
  {
    name: "isDefault",
    label: intl.formatMessage({ id: "FOLDER.INPUT.IS_DEFAULT" }),
    options: [
      { value: true, label: intl.formatMessage({ id: "GENERAL.YES" }) },
      { value: false, label: intl.formatMessage({ id: "GENERAL.NO" }) }
    ],
    size: 12
  },
  {
    name: "startDate",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    hide: true,
    hideOn: "isDefault",
    condition: false,
    required: true,
    size: 6
  },
  {
    name: "endDate",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    hide: true,
    hideOn: "isDefault",
    condition: false,
    size: 6
  },
  {
    name: "workshopsDurationSet",
    component: TABLE_OF_ITEMS,
    loadAttrName: "workshopsDurationSetDetails",
    columns: [
      {
        dataField: "eventNature",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.NATURE"
        }),
        formatter: columnFormatters.NatureColumnFormatter
      },
      {
        dataField: "sessionTime",
        text: intl.formatMessage({
          id: "FOLDER.INPUT.SESSTION_TIME"
        }),
      }
    ],
    label: intl.formatMessage({ id: "FOLDER.INPUT.AVAILABILITY" })
  }
]

export default _.memoize(availabilitySettingStructureFields)
