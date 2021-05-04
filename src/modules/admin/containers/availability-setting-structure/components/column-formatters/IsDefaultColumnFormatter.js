/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

const StatusColumnFormatter = (
  cellContent,
  row
) => (
  <div className={`label label-lg label-light-success label-inline`}>
    { cellContent ? <FormattedMessage id="GENERAL.YES" /> : <>{row.startDate } {"=>"} {row.endDate} </>}
  </div>
);


export default StatusColumnFormatter
