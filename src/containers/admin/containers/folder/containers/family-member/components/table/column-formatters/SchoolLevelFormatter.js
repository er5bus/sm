/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { isRLTLang } from "../../../../../../../../../i18n"


const SchoolLevelsFormatter = (
  cellContent,
  row,
) => (
  <>
    { isRLTLang() ?
      (row && row.schoolLevelAr ? `${row.schoolLevelAr}` : <FormattedMessage id="GENERAL.EMPTY" />) :
      (row && row.schoolLevelFr ? `${row.schoolLevelFr}` : <FormattedMessage id="GENERAL.EMPTY" />)
    }
  </>
);


export default SchoolLevelsFormatter
