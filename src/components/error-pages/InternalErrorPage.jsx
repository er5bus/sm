import React from "react"
import {toAbsoluteUrl} from "./../../helpers"

import { Trans } from 'react-i18next'

const InternalErrorPage = () => {

  return (
    <div className="error px-10 py-10 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center">
        <img alt="500" className="img-responsive" width="600" height="405" src={toAbsoluteUrl("/media/error/500.svg")} />
      </div>
      <div  className="text-center error-text py-15 py-md-5">
        <p className="display-4 font-weight-boldest text-primary mb-12">
          <Trans id="ERROR.INTERNAL_ERROR.TITLE" />
        </p>
        <p className="font-size-h1 font-weight-boldest text-dark-75">
          <Trans id="ERROR.INTERNAL_ERROR.SUB_TITLE" />
        </p>
        <p className="font-size-h4 line-height-md">
          <Trans id="ERROR.INTERNAL_ERROR.DESC" />
        </p>
      </div>
    </div>
  )

}


export default InternalErrorPage
