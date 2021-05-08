/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { isRLTLang } from "../../../../../../../i18n"

const StatusColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className="label label-lg label-light-primary label-inline">
    { isRLTLang() ? `${cellContent.firstNameAr} ${cellContent.lastNameAr}` : `${cellContent.firstName} ${cellContent.lastName}` }
  </div>
);


export default StatusColumnFormatter
