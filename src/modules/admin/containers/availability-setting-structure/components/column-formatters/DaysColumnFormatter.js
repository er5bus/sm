/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { isArray } from "lodash"
import { FormattedMessage } from "react-intl"
import { DAYS } from "../../../../UIHelpers"

const DaysColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div>
    { isArray(cellContent) 
      ? cellContent.map((day, idx) => <span key={idx} className="badge badge-primary mx-1"><FormattedMessage id={DAYS[day]} /> </span> ) 
      : <FormattedMessage id="GENERAL.EMPTY" />
    }
  </div>
);


export default DaysColumnFormatter
