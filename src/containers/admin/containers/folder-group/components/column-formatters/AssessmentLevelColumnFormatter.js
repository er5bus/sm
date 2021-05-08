/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const ASSESSMENT_LEVEL = {
  [AR]: "levelAr",
  [FR]: "levelFr"
}

const AssessmentLevelColumnFormatter = (
  cellContent,
) => (
  <div className="font-weight-bold">
    { getAttr(cellContent, ASSESSMENT_LEVEL, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default AssessmentLevelColumnFormatter
