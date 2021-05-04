import React from "react"
import ServicesLoadingDialog from "./components/loading/ServicesLoadingDialog"
import { ServicesUIProvider } from "./context/ServicesUIContext"
import ServiceCard from "./components/card/ServicesCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const ServicePage = ({ history }) => {

  const servicesUIEvents = {
    newServiceButtonClick: () => {
      history.push(pageRoutes.serviceCreate.path)
    },
    openServiceImportDialog: () => {
      history.push(dialogRoutes.serviceImport.path)
    },
    newServiceRule: pageRoutes.serviceCreate,
    openShowServicePage: (param) => {
      history.push(pageRoutes.serviceShow.path.replace(":param", param))
    },
    showServiceRule: pageRoutes.serviceShow,
    openEditServicePage: (param) => {
      history.push(pageRoutes.serviceEdit.path.replace(":param", param))
    },
    editServiceRule: pageRoutes.serviceEdit,

    openDeactivateServiceDialog: (param) => {
      history.push(dialogRoutes.serviceDeactivate.path.replace(":param", param))
    },
    deactivateServiceRule: dialogRoutes.serviceDeactivate,
    
    openActivateServiceDialog: (param) => {
      history.push(dialogRoutes.serviceActivate.path.replace(":param", param))
    },
    activateServiceRule: dialogRoutes.serviceActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <ServicesUIProvider servicesUIEvents={servicesUIEvents}>
      <ServicesLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <ServiceCard />
    </ServicesUIProvider>
  )
}


export default ServicePage
