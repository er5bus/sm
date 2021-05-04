import * as Yup from 'yup'
import routes from '../../../../../routes'

import { assessmentToolUIHelper } from '../../../../../UIHelpers'
import { MULTISELECT_TABLE } from './../../../../../../../components/partials'
import * as columnFormatters from './../../column-formatters'

export const assessmentLevelFields = ({ intl }) => [
  {
    name: 'assessmentLevels',
    loadAttrName: 'assessmentLevelsDetails',
    label: intl.formatMessage({ id: 'ASSESSMENT_TOOL.INPUT.ASSESSMENT_LEVELS' }),
    tableLabel: intl.formatMessage({ id: 'ASSESSMENT_TOOL.INPUT.ASSESSMENT_LEVELS_LIST' }),
    component: MULTISELECT_TABLE,
    loadData: assessmentToolUIHelper,
    openShowPage: ({ id }, history) => history.push(routes.assessmentLevelShow.path.replace(':param', id)),
    columns: [
      {
        dataField: 'id',
        text: intl.formatMessage({
          id: 'ASSESSMENT_LEVEL.INPUT.ID'
        })
      },
      {
        dataField: 'levelFr',
        text: intl.formatMessage({
          id: 'ASSESSMENT_TOOL.INPUT.ASSESSMENT_LEVEL'
        }),
        formatter: columnFormatters.AssessmentLevelColumnFormatter
      }
    ],
    size: 12,
    required: true,
    validation: Yup.array()
  }
]
