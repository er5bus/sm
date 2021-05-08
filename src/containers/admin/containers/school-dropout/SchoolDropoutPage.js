import React from "react"
import SchoolDropoutsLoadingDialog from "./components/loading/SchoolDropoutsLoadingDialog"
import { SchoolDropoutsUIProvider } from "./context/SchoolDropoutsUIContext"
import SchoolDropoutCard from "./components/card/SchoolDropoutsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const SchoolDropoutPage = ({ history }) => {

  const schoolDropoutsUIEvents = {
    newSchoolDropoutButtonClick: () => {
      history.push(pageRoutes.schoolDropoutCreate.path)
    },
    openSchoolDropoutImportDialog: () => {
      history.push(dialogRoutes.schoolDropoutImport.path)
    },
    openShowFolderPage : (param) => {
      history.push(pageRoutes.folderShow.path.replace(":param", param))
    },
    showFolderRule: pageRoutes.folderShow,
    newSchoolDropoutRule: pageRoutes.schoolDropoutCreate,
    openShowSchoolDropoutPage: (param) => {
      history.push(pageRoutes.schoolDropoutShow.path.replace(":param", param))
    },
    showSchoolDropoutRule: pageRoutes.schoolDropoutShow,
    openEditSchoolDropoutPage: (param) => {
      history.push(pageRoutes.schoolDropoutEdit.path.replace(":param", param))
    },
    editSchoolDropoutRule: pageRoutes.schoolDropoutEdit,

    openDeactivateSchoolDropoutDialog: (param) => {
      history.push(dialogRoutes.schoolDropoutDeactivate.path.replace(":param", param))
    },
    deactivateSchoolDropoutRule: dialogRoutes.schoolDropoutDeactivate,

    openTransferSchoolDropoutDialog: (param) => {
      history.push(dialogRoutes.schoolDropoutTransafer.path.replace(":param", param))
    },
    transferSchoolDropoutRule: dialogRoutes.schoolDropoutTransafer,

    openCloseSchoolDropoutDialog: (param) => {
      history.push(dialogRoutes.schoolDropoutClose.path.replace(":param", param))
    },
    closeSchoolDropoutRule: dialogRoutes.schoolDropoutClose,

    openQualifySchoolDropoutDialog: (param) => {
      history.push(dialogRoutes.schoolDropoutQualify.path.replace(":param", param))
    },
    qualifySchoolDropoutRule: dialogRoutes.schoolDropoutQualify,
    
    openActivateSchoolDropoutDialog: (param) => {
      history.push(dialogRoutes.schoolDropoutActivate.path.replace(":param", param))
    },
    activateSchoolDropoutRule: dialogRoutes.schoolDropoutActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <SchoolDropoutsUIProvider schoolDropoutsUIEvents={schoolDropoutsUIEvents}>
      <SchoolDropoutsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <SchoolDropoutCard />
    </SchoolDropoutsUIProvider>
  )
}


export default SchoolDropoutPage
