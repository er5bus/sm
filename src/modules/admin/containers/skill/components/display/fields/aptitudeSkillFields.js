import { TABLE_OF_ITEMS } from '../../../../../../../components/partials'
import routes from '../../../../../routes'
import * as columnFormatters from './../../column-formatters'

// import DescriptionIcon from '@material-ui/icons/Description';

export const aptitudeSkillFields = ({ intl }) => [
  {
    name: 'aptitudeSkillsDetails',
    openShowPage: ({ id }, history) => history.push(routes.aptitudeSkillShow.path.replace(':param', id)),
    columns: [
      {
        dataField: 'id',
        text: intl.formatMessage({
          id: 'APTITUDE_SKILL.INPUT.ID'
        })
      },
      {
        dataField: 'aptitudeFr',
        text: intl.formatMessage({
          id: 'SKILL.INPUT.APTITUDE'
        }),
        formatter: columnFormatters.AptitudeSkillColumnFormatter
      }
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: 'SKILL.INPUT.APTITUDE_SKILLS' }),
    size: 12
  }
]
