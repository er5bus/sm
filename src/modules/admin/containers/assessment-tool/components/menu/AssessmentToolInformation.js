import React from 'react'
import { getAttr, toAbsoluteUrl } from '../../../../../../helpers'
import { isRLTLang } from '../../../../../../i18n'
import { AR, FR } from '../../../../../../constants'

const ASSESSMENT_TOOL_NAME = {
  [FR]: 'outilFr',
  [AR]: 'outilAr'
}

const AssessmentToolInformation = ({ assessmentTool }) => {
  return (
    <div className='d-flex align-items-center mb-5'>
      <div className={'symbol symbol-90 symbol-xl-90 m' + (isRLTLang() ? 'l' : 'r') + '-3 align-self-start align-self-xl-center'}>
        <div className={'symbol symbol-90 symbol-xl-90 m' + (isRLTLang() ? 'l' : 'r') + '-3 align-self-start align-self-xl-center'}>
          <div className='symbol-label' style={{ backgroundColor: 'transparent', backgroundImage: `url(${toAbsoluteUrl('/media/img/assessment.svg')})` }} />
        </div>
      </div>
      <div>
        <span className='font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary'>
          <div className='text-dark m-0 flex-grow-1 mr-3 font-size-h5'>
            {getAttr(assessmentTool, ASSESSMENT_TOOL_NAME, '---------')}
          </div>
        </span>
        <div className='text-muted' />
      </div>
    </div>
  )
}

export default AssessmentToolInformation
