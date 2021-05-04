import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../column-formatters'

const PARTNER_NAME_VALUE = {
  [AR] : "nameAr",
  [FR] : "nameFr"
}

const PARTNER_NAME_LABEL = {
  [AR] : "PARTNERSHIP.INPUT.NAME_AR",
  [FR] : "PARTNERSHIP.INPUT.NAME_FR"
}

const PARTNER_ACTIVITY_VALUE = {
  [AR] : "activityAr",
  [FR] : "activityFr"
}

const PARTNER_ACTIVITY_LABEL = {
  [AR] : "PARTNERSHIP.INPUT.ACTIVITY_AR",
  [FR] : "PARTNERSHIP.INPUT.ACTIVITY_FR"
}

const columns = ({ intl, partnershipsUIProps }) => [
  {
    dataField: PARTNER_NAME_VALUE[getLang()],
    text: intl.formatMessage({
      id: PARTNER_NAME_LABEL[getLang()],
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: PARTNER_ACTIVITY_VALUE[getLang()],
    text: intl.formatMessage({
      id: PARTNER_ACTIVITY_LABEL[getLang()],
    }),
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "legalForm",
    text: intl.formatMessage({
      id: "PARTNERSHIP.INPUT.LEGAL_FORM",
    }),
    sort: true,
    formatter: columnFormatters.LegalFormColumnFormatter,
    sortCaret: sortCaret,
  },
  {
    dataField: "isActive",
    text: intl.formatMessage({
      id: "PARTNERSHIP.INPUT.STATUS",
    }),
    formatter: columnFormatters.StatusColumnFormatter,
    sort: true,
    sortCaret: sortCaret,
  },
  {
    dataField: "action",
    text: intl.formatMessage({
      id: "GENERAL.ACTIONS",
    }),
    formatter: columnFormatters.PartnershipActionsColumnFormatter,
    formatExtraData: partnershipsUIProps,
    classes: "text-right pr-0",
    headerClasses: "text-right pr-3",
    style: {
      minWidth: "100px",
    },
  },
  // eslint-disable-next-line react-hooks/exhaustive-deps
]
export default _.memoize(columns)
