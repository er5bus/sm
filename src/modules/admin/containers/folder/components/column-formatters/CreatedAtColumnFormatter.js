/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import moment from "moment"

const CreatedAtColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <>
    {moment(row.createdAt, "DD/MM/YYYY HH:mm:ss").format("DD/MM/YYYY")}
  </>
);

export default CreatedAtColumnFormatter
