/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

import {AR, FR} from "../../../../../../constants"
import {getAttr} from "../../../../../../helpers"

const KNOWLEDGE_SKILL = {
  [AR]: "knowledgeAr",
  [FR]: "knowledgeFr"
}

const KnowledgeSkillColumnFormatter = (
  cellContent,
  row
) => (
  <div className="font-weight-bold">
    { getAttr(row, KNOWLEDGE_SKILL, <FormattedMessage id="GENERAL.EMPTY" />) }
  </div>
);


export default KnowledgeSkillColumnFormatter
