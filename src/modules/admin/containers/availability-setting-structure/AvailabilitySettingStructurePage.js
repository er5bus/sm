import React from "react"
import AvailabilitySettingStructuresLoadingDialog from "./components/loading/AvailabilitySettingStructuresLoadingDialog"
import { AvailabilitySettingStructuresUIProvider } from "./context/AvailabilitySettingStructuresUIContext"
import AvailabilitySettingStructureCard from "./components/card/AvailabilitySettingStructuresCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const AvailabilitySettingStructurePage = ({ history }) => {

  const availabilitySettingStructuresUIEvents = {
    newAvailabilitySettingStructureButtonClick: () => {
      history.push(pageRoutes.availabilitySettingStructureCreate.path)
    },
    newAvailabilitySettingStructureRule: pageRoutes.availabilitySettingStructureCreate,
    openShowAvailabilitySettingStructurePage: (param) => {
      history.push(pageRoutes.availabilitySettingStructureShow.path.replace(":param", param))
    },
    showAvailabilitySettingStructureRule: pageRoutes.availabilitySettingStructureShow,
    openEditAvailabilitySettingStructurePage: (param) => {
      history.push(pageRoutes.availabilitySettingStructureEdit.path.replace(":param", param))
    },
    editAvailabilitySettingStructureRule: pageRoutes.availabilitySettingStructureEdit,
    openDeleteAvailabilitySettingStructureDialog: (param) => {
      history.push(dialogRoutes.availabilitySettingStructureDelete.path.replace(":param", param))
    },
    deleteAvailabilitySettingStructureRule: dialogRoutes.availabilitySettingStructureDelete,
    openDeleteAvailabilitySettingStructuresDialog: () => {
      history.push(dialogRoutes.availabilitySettingStructuresDelete.path)
    },
    deleteAvailabilitySettingStructuresRule: dialogRoutes.availabilitySettingStructuresDelete
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <AvailabilitySettingStructuresUIProvider availabilitySettingStructuresUIEvents={availabilitySettingStructuresUIEvents}>
      <AvailabilitySettingStructuresLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <AvailabilitySettingStructureCard />
    </AvailabilitySettingStructuresUIProvider>
  )
}


export default AvailabilitySettingStructurePage
