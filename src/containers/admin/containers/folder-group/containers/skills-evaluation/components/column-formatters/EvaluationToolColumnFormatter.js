/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../../../constants"
import {getAttr} from "../../../../../../../../helpers"

const EVALUATION_TOOL = {
  [AR]: "outilAr",
  [FR]: "outilFr"
}

const EvaluationToolColumnFormatter = (
  cellContent,
) => (
  <div className="font-weight-bold">
    { getAttr(cellContent, EVALUATION_TOOL, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default EvaluationToolColumnFormatter
