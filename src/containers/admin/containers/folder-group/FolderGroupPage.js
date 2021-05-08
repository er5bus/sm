import React from "react"
import FolderGroupsLoadingDialog from "./components/loading/FolderGroupsLoadingDialog"
import { FolderGroupsUIProvider } from "./context/FolderGroupsUIContext"
import FolderGroupCard from "./components/card/FolderGroupsCard"

import { folderGroupRoutes, basePath } from "./routes/folder-group"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const FolderGroupPage = ({ history }) => {

  const folderGroupsUIEvents = {
    newFolderGroupButtonClick: () => {
      history.push(pageRoutes.folderGroupCreate.path)
    },
    openFolderGroupImportDialog: () => {
      history.push(folderGroupRoutes.folderGroupImport.path)
    },
    newFolderGroupRule: pageRoutes.folderGroupCreate,
    openShowFolderGroupPage: (param) => {
      history.push(pageRoutes.folderGroupShow.path.replace(":param", param))
    },
    showFolderGroupRule: pageRoutes.folderGroupShow,
    openEditFolderGroupPage: (param) => {
      history.push(pageRoutes.folderGroupEdit.path.replace(":param", param))
    },
    editFolderGroupRule: pageRoutes.folderGroupEdit,
    newFolderGroupAppointmentButtonClick: (param) => {
      history.push(pageRoutes.folderGroupAppoitment.path.replace(":param", param))
    },
    newFolderGroupAppointmentRule: pageRoutes.folderGroupAppoitment,
    openDisableFolderGroupDialog: (param) => {
      history.push(folderGroupRoutes.folderGroupDisable.path.replace(":param", param))
    },
    disableFolderGroupRule: folderGroupRoutes.folderGroupDisable,
    
    openEnableFolderGroupDialog: (param) => {
      history.push(folderGroupRoutes.folderGroupEnable.path.replace(":param", param))
    },
    enableFolderGroupRule: folderGroupRoutes.folderGroupEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <FolderGroupsUIProvider folderGroupsUIEvents={folderGroupsUIEvents}>
      <FolderGroupsLoadingDialog />
      { Object.keys(folderGroupRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={folderGroupRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: folderGroupRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <FolderGroupCard />
    </FolderGroupsUIProvider>
  )
}


export default FolderGroupPage
