import React from 'react'
import { isEqual } from 'lodash'
import { Trans } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import LoginForm from './components/LoginForm'
import { login, clearError } from './../../store/actions'

import fields from './fields/loginFields'

import { ToastError } from './../../../../components/controls'

const Login = () => {
  const dispatch = useDispatch()
  const { error, isLoading } = useSelector((state) => ({
    error: state.common.auth.error,
    isLoading: state.common.auth.isLoading
  }), isEqual)

  const onSubmit = (values) => {
    dispatch(login(values))
  }

  return (
    <div className='w-lg-500px p-lg-15 mx-auto'>
      <div className='text-center mb-10'>
        <h1 className='text-dark mb-3'><Trans>Sign In to SM</Trans></h1>
        <div className='text-gray-400 fw-bold fs-4'> <Trans> New Here? </Trans>
          <Link to='/auth/register' className='link-primary fw-bolder'><Trans>Create an Account</Trans></Link>
        </div>
      </div>
      <ToastError
        error={error}
        onClose={() => dispatch(clearError())}
      />
      <LoginForm isLoading={isLoading} onSubmit={onSubmit} fields={fields} />
    </div>
  )
}

export default Login
