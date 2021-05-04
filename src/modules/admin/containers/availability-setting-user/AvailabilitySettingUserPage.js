import React from "react"
import AvailabilitySettingUsersLoadingDialog from "./components/loading/AvailabilitySettingUsersLoadingDialog"
import { AvailabilitySettingUsersUIProvider } from "./context/AvailabilitySettingUsersUIContext"
import AvailabilitySettingUserCard from "./components/card/AvailabilitySettingUsersCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const AvailabilitySettingUserPage = ({ history }) => {

  const availabilitySettingUsersUIEvents = {
    newAvailabilitySettingUserButtonClick: () => {
      history.push(pageRoutes.availabilitySettingUserCreate.path)
    },
    newAvailabilitySettingUserRule: pageRoutes.availabilitySettingUserCreate,
    openShowAvailabilitySettingUserPage: (param) => {
      history.push(pageRoutes.availabilitySettingUserShow.path.replace(":param", param))
    },
    showAvailabilitySettingUserRule: pageRoutes.availabilitySettingUserShow,
    openEditAvailabilitySettingUserPage: (param) => {
      history.push(pageRoutes.availabilitySettingUserEdit.path.replace(":param", param))
    },
    editAvailabilitySettingUserRule: pageRoutes.availabilitySettingUserEdit,
    openDeleteAvailabilitySettingUserDialog: (param) => {
      history.push(dialogRoutes.availabilitySettingUserDelete.path.replace(":param", param))
    },
    deleteAvailabilitySettingUserRule: dialogRoutes.availabilitySettingUserDelete,
    openDeleteAvailabilitySettingUsersDialog: () => {
      history.push(dialogRoutes.availabilitySettingUsersDelete.path)
    },
    deleteAvailabilitySettingUsersRule: dialogRoutes.availabilitySettingUsersDelete
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <AvailabilitySettingUsersUIProvider availabilitySettingUsersUIEvents={availabilitySettingUsersUIEvents}>
      <AvailabilitySettingUsersLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <AvailabilitySettingUserCard />
    </AvailabilitySettingUsersUIProvider>
  )
}


export default AvailabilitySettingUserPage
