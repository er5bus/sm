import React, {useEffect} from "react"
import FolderDocumentsLoadingDialog from "./components/loading/FolderDocumentsLoadingDialog"
import { FolderDocumentsUIProvider } from "./context/FolderDocumentsUIContext"
import FolderDocumentCard from "./components/card/FolderDocumentsCard"
import { injectIntl } from "react-intl"
import { useSubheader } from "../../../../../../components/layout"

import { getDialogRoutes, getBasePath } from "./routes"
import * as pageRoutes from "./../../routes/document"

import { ProtectedDialogRoute } from "../../../../../../components/routes"
import {getNestedPath} from "../../../../../../helpers"


const FolderDocumentPage = ({ intl, history, goBackToList, params: { param: folderParam } }) => {

  const basePath = getBasePath()
  const dialogRoutes = getDialogRoutes()

  const suhbeader = useSubheader()

  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "FOLDER_DOCUMENT.LIST.TITLE" }))
  })

  const folderDocumentsUIFolderDocuments = {
    newFolderDocumentButtonClick: () => {
      history.push(getNestedPath( basePath, pageRoutes.folderDocumentCreate.path).replace(":param", folderParam))
    },
    newFolderDocumentRule: pageRoutes.folderDocumentCreate,
    openEditFolderDocumentPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.folderDocumentEdit.path).replace(":param", folderParam).replace(":documentParam", param))
    },   
    editFolderDocumentRule: pageRoutes.folderDocumentEdit,
    
    openCloseFolderDocumentDialog: (param) => {
      history.push(dialogRoutes.folderDocumentClose.path.replace(":param", folderParam).replace(":documentParam", param))
    },
    closeFolderDocumentRule: dialogRoutes.folderDocumentClose,

    openDeleteFolderDocumentDialog: (param) => {
      history.push(dialogRoutes.folderDocumentDelete.path.replace(":param", folderParam).replace(":documentParam", param))
    },
    deleteFolderDocumentRule: dialogRoutes.folderDocumentDelete,
    openDeleteFolderDocumentsDialog: () => {
      history.push(dialogRoutes.folderDocumentsDelete.path.replace(":param", folderParam))
    },
    deleteFolderDocumentsRule: dialogRoutes.folderDocumentsDelete
  }

  const onHide = () => {
    history.push(basePath.replace(":param", folderParam))
  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params } : {}
    return <Component params={params} history={history} show={match != null} onHide={onHide} />
  }

  return (
    <FolderDocumentsUIProvider folderDocumentsUIFolderDocuments={folderDocumentsUIFolderDocuments}>
      <FolderDocumentsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <FolderDocumentCard folderParam={folderParam} goBackToFolder={goBackToList} />
    </FolderDocumentsUIProvider>
  )
}


export default injectIntl(FolderDocumentPage)
