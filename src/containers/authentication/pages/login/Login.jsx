import React from "react"
import {isEqual} from "lodash"
import { Trans } from 'react-i18next'
import {useDispatch, useSelector} from "react-redux"
import {Link} from "react-router-dom"

import LoginForm from "./components/LoginForm"
import {login} from "./../../store/actions"

//import { FormattedError } from "./../../../components/partials/controls"

const Login = ({  }) => {

  const dispatch = useDispatch()
  const { success, error } = useSelector((state) => ({
    success: true
  }), isEqual)

  const onSubmit = (values) => {

    console.log("tzqt")
    dispatch(login(values))
  }

  return (
    <div className="w-lg-500px p-lg-15 mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-dark mb-3"><Trans>Sign In to Kastima</Trans></h1>
        <div className="text-gray-400 fw-bold fs-4"> <Trans> New Here? </Trans>
          <Link to="/auth/register" className="link-primary fw-bolder"><Trans>Create an Account</Trans></Link></div>
      </div>
      <LoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login
