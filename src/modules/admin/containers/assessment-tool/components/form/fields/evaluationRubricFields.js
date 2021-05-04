import * as Yup from 'yup'
import routes from '../../../../../routes'

import { evaluationRubricUIHelper } from '../../../../../UIHelpers'
import { MULTISELECT_TABLE } from './../../../../../../../components/partials'
import * as columnFormatters from './../../column-formatters'

export const evaluationRubricFields = ({ intl }) => [
  {
    name: 'evaluationRubrics',
    loadAttrName: 'evaluationRubricsDetails',
    label: intl.formatMessage({ id: 'SKILL.INPUT.EVALUATION_RUBRICS' }),
    tableLabel: intl.formatMessage({ id: 'SKILL.INPUT.EVALUATION_RUBRICS_LIST' }),
    component: MULTISELECT_TABLE,
    loadData: evaluationRubricUIHelper,
    openShowPage: ({ id }, history) => history.push(routes.evaluationRubricShow.path.replace(':param', id)),
    columns: [
      {
        dataField: 'id',
        text: intl.formatMessage({
          id: 'EVALUATION_RUBRIC.INPUT.ID'
        })
      },
      {
        dataField: 'rubricFr',
        text: intl.formatMessage({
          id: 'SKILL.INPUT.RUBRIC'
        }),
        formatter: columnFormatters.EvaluationRubricsColumnFormatter
      }
    ],
    size: 12,
    validation: Yup.array()
  }
]
