/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react"
import { Switch, Redirect, Route, withRouter} from "react-router-dom"
import {pageRoutes} from "../pages"

//import routes from "./../../../routes"
//import authenticationRoutes from "./../routes"

//import { ProtectedRoute } from "./../../../components/routes"

import AuthenticationLayout from "./components/AuthenticationLayout"

const bodyClassName = "bg-white header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed"
const nodeRootClassName = "d-flex flex-column flex-root"

const BaseLayout = () => {

  useEffect(() => {

    const body = document.getElementById("js-body")
    const nodeRoot = document.getElementById("js-root")

    // Show SplashScreen
    body.classList.add(...bodyClassName.split(" "))
    nodeRoot.classList.add(...nodeRootClassName.split(" "))

    return () => {
      body.classList.remove(...bodyClassName.split(" "))
      nodeRoot.classList.remove(...nodeRootClassName.split(" "))
    }
  }, [])


  //class="" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px"

  return (
    <AuthenticationLayout>
      <Switch>
        { Object.keys(pageRoutes).map((route) => (
          <Route key={route} { ...pageRoutes[route] } />
        )) }
        <Redirect from="*" to={pageRoutes.login.path} />
      </Switch>

    </AuthenticationLayout>
  )
}


export default withRouter(BaseLayout)
