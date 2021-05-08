/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import {LEGAL_FORM} from "../../../../../UIHelpers";

const LegalFormColumnFormatter = (
  cellContent,
) => {
  return <div className={`label label-lg label-light-primary label-inline`}>
    <FormattedMessage id={ LEGAL_FORM[cellContent] || "GENERAL.EMPTY" } />
  </div>
};


export default LegalFormColumnFormatter
