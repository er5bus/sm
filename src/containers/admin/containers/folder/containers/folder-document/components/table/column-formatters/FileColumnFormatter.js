/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

const FileColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div>
    {cellContent ? <FormattedMessage id="DOCUMENT.HAS_FILE" /> : <FormattedMessage id="DOCUMENT.HAS_NO_FILE" />}
  </div>
);


export default FileColumnFormatter
