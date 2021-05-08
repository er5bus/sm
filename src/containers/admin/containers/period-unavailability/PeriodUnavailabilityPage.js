import React from "react"
import PeriodUnavailabilitysLoadingDialog from "./components/loading/PeriodUnavailabilitysLoadingDialog"
import { PeriodUnavailabilitysUIProvider } from "./context/PeriodUnavailabilitysUIContext"
import PeriodUnavailabilityCard from "./components/card/PeriodUnavailabilitysCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const PeriodUnavailabilityPage = ({ history }) => {

  const periodUnavailabilitysUIEvents = {
    newPeriodUnavailabilityButtonClick: () => {
      history.push(dialogRoutes.periodUnavailabilityCreate.path)
    },
    openPeriodUnavailabilityImportDialog: () => {
      history.push(dialogRoutes.periodUnavailabilityImport.path)
    },
    newPeriodUnavailabilityRule: pageRoutes.periodUnavailabilityCreate,
    openShowPeriodUnavailabilityPage: (param) => {
      history.push(dialogRoutes.periodUnavailabilityShow.path.replace(":param", param))
    },
    showPeriodUnavailabilityRule: dialogRoutes.periodUnavailabilityShow,
    openEditPeriodUnavailabilityPage: (param) => {
      history.push(dialogRoutes.periodUnavailabilityEdit.path.replace(":param", param))
    },
    editPeriodUnavailabilityRule: dialogRoutes.periodUnavailabilityEdit,

    openDeletePeriodUnavailabilityDialog: (param) => {
      history.push(dialogRoutes.periodUnavailabilityDelete.path.replace(":param", param))
    },
    deletePeriodUnavailabilityRule: dialogRoutes.periodUnavailabilityDelete
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <PeriodUnavailabilitysUIProvider periodUnavailabilitysUIEvents={periodUnavailabilitysUIEvents}>
      <PeriodUnavailabilitysLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <PeriodUnavailabilityCard />
    </PeriodUnavailabilitysUIProvider>
  )
}


export default PeriodUnavailabilityPage
