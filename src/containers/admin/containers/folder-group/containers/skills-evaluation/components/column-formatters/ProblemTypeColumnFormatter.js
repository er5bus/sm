/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import {PROBLEM_TYPE} from "../../../../../../UIHelpers";

const ProblemTypeColumnFormatter = (
  cellContent,
) => (
  <div className={`label label-lg label-light-primary label-inline`}>
    {PROBLEM_TYPE[cellContent] && <FormattedMessage id={PROBLEM_TYPE[cellContent]} />}
  </div>
);


export default ProblemTypeColumnFormatter
