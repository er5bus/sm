/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { isRLTLang } from "../../../../../../i18n"

const BeneficiaryColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <>
    { isRLTLang() ? `${row.firstNameAr} ${row.lastNameAr}` : `${row.firstNameFr} ${row.lastNameFr}` }
  </>
);


export default BeneficiaryColumnFormatter
