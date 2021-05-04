import { TABLE_OF_ITEMS } from '../../../../../../../components/partials'
import routes from '../../../../../routes'
import * as columnFormatters from './../../column-formatters'

// import DescriptionIcon from '@material-ui/icons/Description';

export const assessmentLevelFields = ({ intl }) => [
  {
    name: 'assessmentLevelsDetails',
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
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: 'ASSESSMENT_TOOL.INPUT.ASSESSMENT_LEVELS' }),
    size: 12
  }
]
