import React from 'react'
import {toAbsoluteUrl} from './../../helpers'

import { Trans } from 'react-i18next'

const ForbiddenPage = () => {

  return (
    <div className='error px-10 py-10 d-flex flex-column justify-content-center align-items-center'>
      <div className='d-flex justify-content-center'>
        <img alt='401' className='img-responsive' width='600' height='405' src={toAbsoluteUrl('/media/error/401.svg')} />
      </div>
      <div  className='text-center error-text py-15 py-md-5'>
        <p className='display-4 font-weight-boldest text-primary mb-12'>
          <Trans>ERROR.FORBIDDEN.TITLE</Trans>
        </p>
        <p className='font-size-h1 font-weight-boldest text-dark-75'>
          <Trans>ERROR.FORBIDDEN.SUB_TITLE</Trans>
        </p>
        <p className='font-size-h4 line-height-md'>
          <Trans>ERROR.FORBIDDEN.DESC</Trans>
        </p>
      </div>
    </div>
  )

}


export default ForbiddenPage
