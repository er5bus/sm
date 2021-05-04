/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import CloseIcon from "@material-ui/icons/Close"
import CheckIcon from "@material-ui/icons/Check"

const IsValidColumnFormatter = (
  cellContent
) => (
  
  <div className={ "text-center " + (cellContent ? "text-success": "text-danger") }>
    {cellContent ? <CheckIcon /> : <CloseIcon/>}
  </div>
);


export default IsValidColumnFormatter
