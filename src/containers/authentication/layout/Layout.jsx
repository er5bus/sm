/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useEffect} from "react"
import { Switch, Redirect, Route, withRouter} from "react-router-dom"
import {rootRoutes} from "../pages"

//import routes from "./../../../routes"
//import authenticationRoutes from "./../routes"

//import { ProtectedRoute } from "./../../../components/routes"

import AuthenticationLayout from "./components/AuthenticationLayout"


const BaseLayout = () => {

  useEffect(() => {

    const className = "bg-white header-fixed header-tablet-and-mobile-fixed toolbar-enabled toolbar-fixed toolbar-tablet-and-mobile-fixed aside-enabled aside-fixed"
    const splashScreen = document.getElementById("js-splash-screen")

    // Show SplashScreen
    splashScreen.classList.add(...className.split(" "))

    return () => {
      splashScreen.classList.remove(...className.split(" "))
    }
  }, [])


  //class="" style="--kt-toolbar-height:55px;--kt-toolbar-height-tablet-and-mobile:55px"

  return (
    <AuthenticationLayout>
      <Switch>
        { Object.keys(rootRoutes).map((route) => (
          <Route key={route} { ...rootRoutes[route] } />
        )) }
        <Redirect from="*" to={rootRoutes.login.path} />
      </Switch>

    </AuthenticationLayout>
  )
}


export default withRouter(BaseLayout)
