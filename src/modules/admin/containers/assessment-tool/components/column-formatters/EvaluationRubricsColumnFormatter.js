/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const EVALUATION_RUBRICS = {
  [AR]: "rubricAr",
  [FR]: "rubricFr"
}

const EvaluationRubricsColumnFormatter = (
  cellContent,
  row
) => (
  <div className="font-weight-bold">
    { getAttr(row, EVALUATION_RUBRICS, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default EvaluationRubricsColumnFormatter
