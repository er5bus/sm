import React from "react"
import { Trans } from 'react-i18next';

import img from "./img/no-internet.svg"

import {Button} from "react-bootstrap"

const OfflinePage = () => {

  return (
    <div className="error px-10 py-10 d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex justify-content-center">
        <img alt="500" className="img-responsive" width="600" height="405" src={img} />
      </div>
      <div  className="text-center error-text py-15 py-md-5">
        <p className="display-4 font-weight-boldest text-primary mb-12">
          <Trans id="ERROR.OFFLINE_ERROR.TITLE" />
        </p>
        <p className="font-size-h1 font-weight-boldest text-dark-75">
          <Trans id="ERROR.OFFLINE_ERROR.SUB_TITLE" />
        </p>
        <p className="font-size-h4 line-height-md">
          <Trans id="ERROR.OFFLINE_ERROR.DESC" />
        </p>
        <Button onClick={() => window.location.reload()}><Trans id="GENERAL.REFRESH" /></Button>
      </div>
    </div>
  )
}


export default OfflinePage
