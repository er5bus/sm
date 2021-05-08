/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const APTITUDE_SKILL = {
  [AR]: "aptitudeAr",
  [FR]: "aptitudeFr"
}

const AptitudeSkillColumnFormatter = (
  cellContent,
  row
) => (
  <div className="font-weight-bold">
    { getAttr(row, APTITUDE_SKILL, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default AptitudeSkillColumnFormatter
