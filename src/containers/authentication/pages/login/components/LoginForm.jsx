import React from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'

import { FormProvider, Form } from '../../../../../components/forms'
import {pageRoutes} from '../..'

const LoginForm = (props) => {
  const {
    onSubmit,
    fields,
    isLoading,
    initialValues = null,
    isSubmitting
  } = props

  return (
    <FormProvider>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
        className='form w-100 fv-plugins-bootstrap5 fv-plugins-framework'
      >
        <div className='form-group d-flex flex-wrap justify-content-between align-items-center'>
          <Link
            to={pageRoutes.forgotPassword.path}
            className='link-primary fs-6 fw-bolder'
          >
            <Trans> Forgot Password ? </Trans>
          </Link>
          <Button
            type='submit'
            color='primary'
            disabled={isSubmitting}
            className='btn btn-md btn-primary fw-bolder me-3 my-2'
          >
            {isLoading && <span className='spinner-border spinner-border-sm align-left spinner-white mx-2 ' />}
            <span>
              <Trans> Sign In </Trans>
            </span>
          </Button>
        </div>
      </Form>
    </FormProvider>
  )
}

export default LoginForm
