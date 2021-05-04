/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { DOCUMENTS } from "../../../../../../../UIHelpers"

const TagColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div>
    {DOCUMENTS[cellContent] && <FormattedMessage id={DOCUMENTS[cellContent]} />}
  </div>
);


export default TagColumnFormatter
