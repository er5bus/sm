import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import routes from "../../../../../routes";
import * as columnFormatters from "./../../column-formatters"

//import DescriptionIcon from '@material-ui/icons/Description';


export const knowledgeSkillFields = ({ intl }) => [
  {
    name: "knowledgeSkillsDetails",
    openShowPage: ({ id }, history) => history.push(routes.knowledgeSkillShow.path.replace(":param", id)),
    columns: [
      {
        dataField: "id",
        text: intl.formatMessage({
          id: "KNOWLEDGE_SKILL.INPUT.ID",
        }),
      },
      {
        dataField: "knowledgeFr",
        text: intl.formatMessage({
          id: "SKILL.INPUT.KNOWLEDGE",
        }),
        formatter: columnFormatters.KnowledgeSkillColumnFormatter
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "SKILL.INPUT.KNOWLEDGE_SKILLS" }),
    size: 12,
  },
]
