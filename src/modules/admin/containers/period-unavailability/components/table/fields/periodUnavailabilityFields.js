import _ from 'lodash'
import { sortCaret } from '../../../../../../../helpers'
import * as columnFormatters from './../column-formatters'

const columns = ({ intl, periodUnavailabilitysUIProps, isSuperAdmin }) => {
  let result = [{
    dataField: 'id',
    text: intl.formatMessage({
      id: 'PERIOD_UNAVAILABILITY.INPUT.ID'
    }),
    sort: true,
    sortCaret: sortCaret
  }]
  if (isSuperAdmin) {
    result = result.concat([
      {
        dataField: 'userDetails',
        text: intl.formatMessage({ id: 'FOLDER.INPUT.USER' }),
        sort: true,
        sortCaret: sortCaret,
        formatter: columnFormatters.ResponsibleColumnFormatter
      }
    ])
  }
  return result.concat(
    [
      {
        dataField: 'startDate',
        text: intl.formatMessage({
          id: 'PERIOD_UNAVAILABILITY.INPUT.START_DATE'
        }),
        sort: true,
        sortCaret: sortCaret
      },
      {
        dataField: 'endDate',
        text: intl.formatMessage({
          id: 'PERIOD_UNAVAILABILITY.INPUT.END_DATE'
        }),
        sort: true,
        sortCaret: sortCaret
      },
      {
        dataField: 'isExpired',
        text: intl.formatMessage({
          id: 'PERIOD_UNAVAILABILITY.INPUT.STATE'
        }),
        formatter: columnFormatters.StateColumnFormatter,
        sort: true,
        sortCaret: sortCaret
      },
      {
        dataField: 'action',
        text: intl.formatMessage({
          id: 'GENERAL.ACTIONS'
        }),
        formatter: columnFormatters.ActionsColumnFormatter,
        formatExtraData: periodUnavailabilitysUIProps,
        classes: 'text-right pr-0',
        headerClasses: 'text-right pr-3',
        style: {
          minWidth: '200px'
        }
      }
    ])
}

export default _.memoize(columns)
