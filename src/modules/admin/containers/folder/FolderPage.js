import React from "react"
import FoldersLoadingDialog from "./components/loading/FoldersLoadingDialog"
import FoldersCard from "./components/card/FolderCard"
import { FoldersUIProvider } from "./context/FoldersUIContext"

import dialogRoutes from "./routes/dialogs/folder"
import detailsRoutes from "./routes/details"
import formRoutes from "./routes/forms"
import routes from "./../../routes"
import {ProtectedDialogRoute} from "../../../../components/routes"
import {FOLDER_EXIT_COURSE} from "../../UIHelpers"


const FolderPage = ({ history }) => {

  const foldersUIEvents = {
    newFolderButtonClick: () => {
      history.push(routes.folderCreate.path)
    },
    newFolderRule: routes.folderCreate,
    openShowFolderPage: (param, folder) => {
      if (folder.status !== FOLDER_EXIT_COURSE){
        history.push(detailsRoutes.personalDataDisplay.path.replace(":param", param))
      }else{
        history.push(detailsRoutes.exitCourseDisplay.path.replace(":param", param))
      }
    },
    showFolderRule: routes.folderShow,
    openFolderAppoitmentPage: (param) => {
      history.push(routes.folderAppointments.path.replace(":param", param))
    },
    openFolderImportDialog: () => {
      history.push(dialogRoutes.folderImport.path)
    },
    openEventPage: (param) => {
      history.push(routes.eventList.path.replace(":folderParam", param))
    },
    openEventRule: routes.eventList,
    showFolderAppointmentRule: routes.folderAppointments,
    openEditFolderPage: (param, folder) => {
      if (folder.status !== FOLDER_EXIT_COURSE){
        history.push(formRoutes.personalDataForm.path.replace(":param", param))
      }else{
        history.push(formRoutes.exitCourseForm.path.replace(":param", param))
      }
    },
    editFolderRule: routes.folderEdit,
    openDisableFolderDialog: (param) => {
      history.push(dialogRoutes.folderDisable.path.replace(":param", param))
    },
    disableFolderRule: dialogRoutes.folderDisable,
    openDisableFoldersDialog: () => {
      history.push(dialogRoutes.foldersDisable.path)
    },
    disableFoldersRule: dialogRoutes.foldersDisable,
    openEnableFolderDialog: (param) => {
      history.push(dialogRoutes.folderEnable.path.replace(":param", param))
    },
    enableFolderRule: dialogRoutes.folderEnable,
    openEnableFoldersDialog: () => {
      history.push(dialogRoutes.foldersEnable.path)
    },
    enableFoldersRule: dialogRoutes.foldersEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push(routes.folderList.path)} } />
  }

  return (
    <FoldersUIProvider foldersUIEvents={foldersUIEvents}>
      <FoldersLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <FoldersCard />
    </FoldersUIProvider>
  )
}


export default FolderPage
