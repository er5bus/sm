import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Trans } from 'react-i18next'
import { isEqual } from 'lodash'

import ForgotPasswordFrom from './components/ForgotPasswordForm'
import { forgotPassword, clearError } from './../../store/actions'
import fields from './fields/forgotPasswordFields'
import { ToastError, ToastSuccess } from '../../../../components/controls'

const ForgotPassword = () => {
  const dispatch = useDispatch()

  const { isLoading, error, success } = useSelector((state) => ({
    isLoading: state.common.auth.isLoading,
    error: state.common.auth.error,
    success: state.common.success
  }), isEqual)

  const onSubmit = (values) => {
    dispatch(forgotPassword(values))
  }

  return (
    <>
      <div className='w-lg-500px p-10 p-lg-15 mx-auto'>
        {/* <!--begin::Heading--> */}
        <div className='text-center mb-10'>
          <h1 className='text-dark mb-3'><Trans>Forgot Password ?</Trans></h1>
          <div className='text-gray-400 fw-bold fs-4'><Trans>Enter your user account's verified email address and we will send you a password reset link.</Trans></div>
        </div>
        {/* <!--end::Heading--> */}
        <ToastError
          error={error}
          onClose={() => dispatch(clearError())}
        />
        <ToastSuccess
          condition={success}
          message={<Trans>Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.</Trans>}
          onClose={() => dispatch(clearError())}
        />
        <ForgotPasswordFrom isLoading={isLoading} fields={fields} onSubmit={onSubmit} />
      </div>
    </>
  )
}

export default ForgotPassword
