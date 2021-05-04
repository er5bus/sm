/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"

const StatusColumnFormatter = (
  cellContent,
) => {
  return (
    <div className={`label label-lg label-light-${cellContent ? 'success' : 'danger'} label-inline`}>
      {
        cellContent
          ? <FormattedMessage id="GENERAL.ACTIVE" />
          : <FormattedMessage id="GENERAL.INACTIVE" />
      }
    </div>
  )
};


export default StatusColumnFormatter
