/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { isRLTLang } from "../../../../../../i18n"

const CpColumnFormatter = (
  cellContent,
  row,
  intl,
  rowIndex,
  formatExtraData
) => (
  <>
    { row.cp ?
    (isRLTLang() ? `${row.cpDetail.firstNameAr} ${row.cpDetail.lastNameAr}` : `${row.cpDetail.firstName} ${row.cpDetail.lastName}`)
    :
    <FormattedMessage id="FOLDER.CP_NOT_AFFECTED" />
    }
  </>
);


export default CpColumnFormatter
