import React from "react"
import AssociateServicesLoadingDialog from "./components/loading/AssociateServicesLoadingDialog"
import { AssociateServicesUIProvider } from "./context/AssociateServicesUIContext"
import AssociateServiceCard from "./components/card/AssociateServicesCard"
import { injectIntl } from "react-intl"
import { useSubheader } from "../../../../../../components/layout"

import { getDialogRoutes, getBasePath } from "./routes"
import * as pageRoutes from "./../../routes/service"

import { ProtectedDialogRoute } from "../../../../../../components/routes"
import {getNestedPath} from "../../../../../../helpers"


const AssociateServicePage = ({ intl, history, goBackToList, params: { param: partnershipParam } }) => {

  const basePath = getBasePath()
  const dialogRoutes = getDialogRoutes()

  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "ASSOCIATE_SERVICE.LIST.TITLE" }))

  const associateServicesUIAssociateServices = {
    newAssociateServiceButtonClick: () => {
      history.push(getNestedPath(basePath, pageRoutes.serviceCreate.path).replace(":param", partnershipParam))
    },
    newAssociateServiceRule: pageRoutes.serviceCreate,
    openEditAssociateServicePage: (param) => {
      history.push(getNestedPath(basePath, pageRoutes.serviceEdit.path).replace(":param", partnershipParam).replace(":associateServiceParam", param))
    },   
    editAssociateServiceRule: pageRoutes.serviceEdit,

    openDeleteAssociateServiceDialog: (param) => {
      history.push(dialogRoutes.associateServiceDelete.path.replace(":param", partnershipParam).replace(":associateServiceParam", param))
    },
    deleteAssociateServiceRule: dialogRoutes.associateServiceDelete,
    
    openStopAssociateServiceDialog: (param) => {
      history.push(dialogRoutes.associateServiceStop.path.replace(":param", partnershipParam).replace(":associateServiceParam", param))
    },
    stopAssociateServiceRule: dialogRoutes.associateServiceStop,

    openFinishAssociateServiceDialog: (param) => {
      history.push(dialogRoutes.associateServiceFinish.path.replace(":param", partnershipParam).replace(":associateServiceParam", param))
    },
    finishAssociateServiceRule: dialogRoutes.associateServiceFinish,
    
    openPermanentAssociateServiceDialog: (param) => {
      history.push(dialogRoutes.associateServicePermanent.path.replace(":param", partnershipParam).replace(":associateServiceParam", param))
    },
    permanentAssociateServiceRule: dialogRoutes.associateServicePermanent,

    openInProgressAssociateServiceDialog: (param) => {
      history.push(dialogRoutes.associateServiceInProgress.path.replace(":param", partnershipParam).replace(":associateServiceParam", param))
    },
    inProgressAssociateServiceRule: dialogRoutes.associateServiceInProgress

  }

  /*const goBackToList = () => {
    history.push(basePath.replace(":param", partnershipParam))
  }*/

  const goBackToPartnership = () => {
    history.push(basePath.replace(":param", partnershipParam))
  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} history={history} show={match != null} onHide={goBackToPartnership} />
  }

  return (
    <AssociateServicesUIProvider associateServicesUIAssociateServices={associateServicesUIAssociateServices}>
      <AssociateServicesLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <AssociateServiceCard partnershipParam={partnershipParam} goBackToPartnership={goBackToList} />
    </AssociateServicesUIProvider>
  )
}


export default injectIntl(AssociateServicePage)
