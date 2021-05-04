import React from "react"
import PartnershipsLoadingDialog from "./components/loading/PartnershipsLoadingDialog"
import PartnershipsCard from "./components/card/PartnershipCard"
import { PartnershipsUIProvider } from "./context/PartnershipsUIContext"

import dialogRoutes from "./routes/dialogs"
import formRoutes from "./routes/edit"
import displayRoutes from "./routes/display"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"


const PartnershipPage = ({ history }) => {

  const partnershipsUIEvents = {
    newPartnershipButtonClick: () => {
      history.push(routes.partnershipCreate.path)
    },
    newPartnershipRule: routes.partnershipCreate,
    openShowPartnershipPage: (param) => {
      history.push(displayRoutes.partnershipDisplay.path.replace(":param", param))
    },
    showPartnershipRule: displayRoutes.partnershipDisplay,
    openEventPage: (param) => {
      history.push(routes.eventList.path.replace(":partnershipParam", param))
    },
    openEditPartnershipPage: (param) => {
      history.push(formRoutes.partnershipForm.path.replace(":param", param))
    },
    editPartnershipRule: formRoutes.partnershipForm,
    openDisablePartnershipDialog: (param) => {
      history.push(dialogRoutes.partnershipDisable.path.replace(":param", param))
    },
    disablePartnershipRule: dialogRoutes.partnershipDisable,
    openDisablePartnershipsDialog: () => {
      history.push(dialogRoutes.partnershipsDisable.path)
    },
    disablePartnershipsRule: dialogRoutes.partnershipsDisable,
    openEnablePartnershipDialog: (param) => {
      history.push(dialogRoutes.partnershipEnable.path.replace(":param", param))
    },
    enablePartnershipRule: dialogRoutes.partnershipEnable,
    openEnablePartnershipsDialog: () => {
      history.push(dialogRoutes.partnershipsEnable.path)
    },
    enablePartnershipsRule: dialogRoutes.partnershipsEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.partnershipList.path)} } />
  }

  return (
    <PartnershipsUIProvider partnershipsUIEvents={partnershipsUIEvents}>
      <PartnershipsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <PartnershipsCard />
    </PartnershipsUIProvider>
  )
}


export default PartnershipPage
