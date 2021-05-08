/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const SKILL = {
  [AR]: "skillAr",
  [FR]: "skillFr"
}

const SkillColumnFormatter = (
  cellContent,
  row
) => (
  <div className="font-weight-bold">
    { getAttr(row, SKILL, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default SkillColumnFormatter
