import _ from 'lodash'
import { AR, FR } from '../../../../../../../constants'
import { sortCaret } from '../../../../../../../helpers'
import { getLang } from '../../../../../../../i18n'
import * as columnFormatters from './../../column-formatters'

const SKILL_VALUE = {
  [AR]: 'skillAr',
  [FR]: 'skillFr'
}

const SKILL_LABEL = {
  [AR]: 'SKILL.INPUT.SKILL_AR',
  [FR]: 'SKILL.INPUT.SKILL_FR'
}

const columns = ({ intl, skillsUIProps }) => [
  {
    dataField: 'id',
    text: intl.formatMessage({
      id: 'SKILL.INPUT.ID'
    }),
    sort: true,
    sortCaret: sortCaret
  },
  {
    dataField: SKILL_VALUE[getLang()],
    text: intl.formatMessage({
      id: SKILL_LABEL[getLang()]
    }),
    sort: true,
    sortCaret: sortCaret
  },
  {
    dataField: 'isActive',
    text: intl.formatMessage({
      id: 'SKILL.INPUT.STATE'
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
    formatExtraData: skillsUIProps,
    classes: 'text-right pr-0',
    headerClasses: 'text-right pr-3',
    style: {
      minWidth: '200px'
    }
  }
]

export default _.memoize(columns)
