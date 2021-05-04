/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { CONTEXT } from "../../../../../../../UIHelpers"

const ContextColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div>
    {CONTEXT[cellContent] && <FormattedMessage id={CONTEXT[cellContent]} />}
  </div>
);


export default ContextColumnFormatter
