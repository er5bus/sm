/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import {DIAGNOSIS_FORM} from "../../../../../../UIHelpers";

const DiagnosisFormColumnFormatter = (
  cellContent,
) => (
  <div className={`label label-lg label-light-primary label-inline`}>
    {DIAGNOSIS_FORM[cellContent] && <FormattedMessage id={DIAGNOSIS_FORM[cellContent]} />}
  </div>
);


export default DiagnosisFormColumnFormatter
