import React, {useEffect} from "react"
import { isEqual } from "lodash"
import OrientationsLoadingDialog from "./components/loading/OrientationsLoadingDialog"
import { OrientationsUIProvider } from "./context/OrientationsUIContext"
import OrientationCard from "./components/card/OrientationsCard"
import { injectIntl } from "react-intl"
import { useSubheader } from "../../../../../../components/layout"

import { getDialogRoutes, getBasePath } from "./routes"
import * as pageRoutes from "../../routes/orientation"

import { ProtectedDialogRoute } from "../../../../../../components/routes"
import {getNestedPath} from "../../../../../../helpers"
import {useSelector} from "react-redux"


const OrientationPage = ({ intl, history, goBackToList, params: { param: folderParam } }) => {

  const basePath = getBasePath()
  const dialogRoutes = getDialogRoutes()

  const suhbeader = useSubheader()
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "ORIENTATION.LIST.TITLE" }))
  })

  const { folder } = useSelector((state) => ({ folder: state.admin.folder.folder }), isEqual)

  const orientationsUIOrientations = {
    folder: folder,
    newOrientationButtonClick: () => {
      history.push(getNestedPath( basePath, pageRoutes.orientationCreate.path).replace(":param", folderParam))
    },
    newOrientationRule: pageRoutes.orientationCreate,
    openShowOrientationPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.orientationShow.path).replace(":param", folderParam).replace(":orientationParam", param))
    },
    showOrientationRule: pageRoutes.orientationShow,
    openEditOrientationPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.orientationEdit.path).replace(":param", folderParam).replace(":orientationParam", param))
    },   
    editOrientationRule: pageRoutes.orientationEdit,
    
    openCloseOrientationDialog: (param) => {
      history.push(dialogRoutes.orientationClose.path.replace(":param", folderParam).replace(":orientationParam", param))
    },
    closeOrientationRule: dialogRoutes.orientationClose,

    openDeleteOrientationDialog: (param) => {
      history.push(dialogRoutes.orientationDelete.path.replace(":param", folderParam).replace(":orientationParam", param))
    },
    deleteOrientationRule: dialogRoutes.orientationDelete,
    openDeleteOrientationsDialog: () => {
      history.push(dialogRoutes.orientationsDelete.path.replace(":param", folderParam))
    },
    deleteOrientationsRule: dialogRoutes.orientationsDelete
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
    <OrientationsUIProvider orientationsUIOrientations={orientationsUIOrientations}>
      <OrientationsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <OrientationCard folderParam={folderParam} goBackToFolder={goBackToList} />
    </OrientationsUIProvider>
  )
}


export default injectIntl(OrientationPage)
