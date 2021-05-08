/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import {FOLDER_STATUS, FOLDER_STATUS_COLOR} from "../../../../UIHelpers";

const ResponsibleColumnFormatter = (
  cellContent,
) => (
  <div className={`label label-lg label-light-${FOLDER_STATUS_COLOR[cellContent]} label-inline`}>
    {FOLDER_STATUS[cellContent] && <FormattedMessage id={FOLDER_STATUS[cellContent]} /> }
  </div>
);


export default ResponsibleColumnFormatter
