/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { isRLTLang } from "../../../../../../i18n"

const StatusColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <>
    { isRLTLang() ? `${cellContent.firstNameAr} ${cellContent.lastNameAr}` : `${cellContent.firstName} ${cellContent.lastName}` }
  </>
);


export default StatusColumnFormatter
