import {TABLE_OF_ITEMS} from "../../../../../../../components/partials"
import routes from "../../../../../routes";
import * as columnFormatters from "./../../column-formatters"

//import DescriptionIcon from '@material-ui/icons/Description';

export const evaluationRubricFields = ({ intl }) => [
  {
    name: "evaluationRubricsDetails",
    openShowPage: ({ id }, history) => history.push(routes.evaluationRubricShow.path.replace(":param", id)),
    columns: [
      {
        dataField: "id",
        text: intl.formatMessage({
          id: "EVALUATION_RUBRIC.INPUT.ID",
        }),
      },
      {
        dataField: "rubricFr",
        text: intl.formatMessage({
          id: "SKILL.INPUT.RUBRIC",
        }),
        formatter: columnFormatters.EvaluationRubricsColumnFormatter
      },
    ],
    component: TABLE_OF_ITEMS,
    label: intl.formatMessage({ id: "SKILL.INPUT.EVALUATION_RUBRICS" }),
    size: 12,
  },
]
