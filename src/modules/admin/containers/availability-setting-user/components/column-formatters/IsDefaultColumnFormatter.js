/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"

const StatusColumnFormatter = (
  cellContent,
  row
) => (
  <div className={`label label-lg label-light-success label-inline`}>
    { <>{row.startDate } <span className="fas fa-long-arrow-alt-right" /> {row.endDate} </>}
  </div>
);


export default StatusColumnFormatter
