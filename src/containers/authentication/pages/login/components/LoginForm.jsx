import React from 'react'

import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Trans } from 'react-i18next'

import { FormProvider, Form } from '../../../../../components/forms'

import fields from './fields/loginFields'

const LoginForm = (props) => {
  const {
    onSubmit,
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
            to='routes.forgotPassword.path'
            className='link-primary fs-6 fw-bolder'
          >
            <Trans> Forgot Password ? </Trans>
          </Link>
          <Button
            type='submit'
            color='primary'
            disabled={isSubmitting}
            className='btn btn-lg btn-primary fw-bolder me-3 my-2'
          >
            {isLoading && <span className='spinner spinner-white px-5' />}
            <span>
              <Trans> Sign In </Trans>
            </span>
          </Button>
          {/* <div className="d-flex">
            <LanguageSelectorDropdown />
          </div> */}
        </div>
      </Form>
    </FormProvider>
  )
}

export default LoginForm
