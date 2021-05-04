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
    { isRLTLang() ? `${row.createdByDetail.firstNameAr} ${row.createdByDetail.lastNameAr}` : `${row.createdByDetail.firstName} ${row.createdByDetail.lastName}` }
  </>
);


export default StatusColumnFormatter
