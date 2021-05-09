import React from 'react'
import { Trans } from "react-i18next"
import { Button } from 'react-bootstrap'

import {Form, FormProvider} from '../../../../../components/forms'
import {pageRoutes} from '../..'
import {Link} from 'react-router-dom'


const ForgotPasswordFrom = (props) => {
  const { onSubmit, fields, isLoading, initialValues = null, isSubmitting } = props

  return (
    <FormProvider>
      <Form
        initialValues={initialValues}
        onSubmit={onSubmit}
        fields={fields}
        className='form fv-plugins-bootstrap fv-plugins-framework'
      >
        <div className='form-group d-flex flex-wrap justify-content-between align-items-center'>
          <Link
            to={pageRoutes.login.path}
            className='link-primary fs-6 fw-bolder'
          >
            <Trans> Already have an account ? </Trans>
          </Link>
          <Button
            type='submit'
            color='primary'
            disabled={isSubmitting}
            className='btn btn-md btn-primary fw-bolder me-3 my-2'
          >
            {isLoading && <span className='spinner-border spinner-border-sm align-left spinner-white mx-2 ' />}
            <span>
              <Trans> Reset password </Trans>
            </span>
          </Button>
        </div>
      </Form>
    </FormProvider>
  )
}

export default ForgotPasswordFrom
