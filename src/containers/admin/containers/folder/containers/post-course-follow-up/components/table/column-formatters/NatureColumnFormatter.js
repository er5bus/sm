/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { NATURE } from "../../../../../../../UIHelpers"

const NatureColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div>
    {NATURE[cellContent] && <FormattedMessage id={NATURE[cellContent]} />}
  </div>
);


export default NatureColumnFormatter
