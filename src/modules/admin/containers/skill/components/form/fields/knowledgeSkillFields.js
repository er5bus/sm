import * as Yup from 'yup'
import routes from '../../../../../routes'

import { knowledgeSkillUIHelper } from '../../../../../UIHelpers'
import { MULTISELECT_TABLE } from './../../../../../../../components/partials'
import * as columnFormatters from './../../column-formatters'

export const knowledgeSkillFields = ({ intl }) => [
  {
    name: 'knowledgeSkills',
    loadAttrName: 'knowledgeSkillsDetails',
    label: intl.formatMessage({ id: 'SKILL.INPUT.KNOWLEDGE_SKILLS' }),
    tableLabel: intl.formatMessage({ id: 'SKILL.INPUT.KNOWLEDGE_SKILLS_LIST' }),
    component: MULTISELECT_TABLE,
    loadData: knowledgeSkillUIHelper,
    openShowPage: ({ id }, history) => history.push(routes.knowledgeSkillShow.path.replace(':param', id)),
    columns: [
      {
        dataField: 'id',
        text: intl.formatMessage({
          id: 'KNOWLEDGE_SKILL.INPUT.ID'
        })
      },
      {
        dataField: 'knowledgeFr',
        text: intl.formatMessage({
          id: 'SKILL.INPUT.KNOWLEDGE'
        }),
        formatter: columnFormatters.KnowledgeSkillColumnFormatter
      }
    ],
    size: 12,
    validation: Yup.array()
  }
]
