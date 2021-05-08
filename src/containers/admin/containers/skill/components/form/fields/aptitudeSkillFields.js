import * as Yup from 'yup'
import routes from '../../../../../routes'

import { aptitudeSkillUIHelper } from '../../../../../UIHelpers'
import { MULTISELECT_TABLE } from './../../../../../../../components/partials'
import * as columnFormatters from './../../column-formatters'

export const aptitudeSkillFields = ({ intl }) => [
  {
    name: 'aptitudeSkills',
    loadAttrName: 'aptitudeSkillsDetails',
    label: intl.formatMessage({ id: 'SKILL.INPUT.APTITUDE_SKILLS' }),
    tableLabel: intl.formatMessage({ id: 'SKILL.INPUT.APTITUDE_SKILLS_LIST' }),
    component: MULTISELECT_TABLE,
    loadData: aptitudeSkillUIHelper,
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
    size: 12,
    validation: Yup.array()
  }
]
