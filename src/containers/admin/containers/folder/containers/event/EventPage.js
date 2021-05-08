import React, {useEffect} from "react"
import EventsLoadingDialog from "./components/loading/EventsLoadingDialog"
import { EventsUIProvider } from "./context/EventsUIContext"
import EventCard from "./components/card/EventsCard"
import { injectIntl } from "react-intl"
import { useSubheader } from "../../../../../../components/layout"

import { getDialogRoutes, getBasePath } from "./routes"
import * as pageRoutes from "./../../routes/event"

import { ProtectedDialogRoute } from "../../../../../../components/routes"
import {getNestedPath} from "../../../../../../helpers"


const EventPage = ({ intl, history, goBackToList, params: { param: folderParam } }) => {

  const dialogRoutes = getDialogRoutes()
  const basePath = getBasePath()
  const suhbeader = useSubheader()
  
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "EVENT.LIST.TITLE" }))
  })

  const eventsUIEvents = {
    newEventButtonClick: () => {
      history.push(getNestedPath( basePath, pageRoutes.eventCreate.path).replace(":param", folderParam))
    },
    newEventRule: pageRoutes.eventCreate,
    openShowEventPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.eventShow.path).replace(":param", folderParam).replace(":eventParam", param))
    },
    showEventRule: pageRoutes.eventShow,
    openEditEventPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.eventEdit.path).replace(":param", folderParam).replace(":eventParam", param))
    },   
    editEventRule: pageRoutes.eventEdit,
    
    openCloseEventDialog: (param) => {
      history.push(dialogRoutes.eventClose.path.replace(":param", folderParam).replace(":eventParam", param))
    },
    closeEventRule: dialogRoutes.eventClose,

    openDeleteEventDialog: (param) => {
      history.push(dialogRoutes.eventDelete.path.replace(":param", folderParam).replace(":eventParam", param))
    },
    deleteEventRule: dialogRoutes.eventDelete,
    openDeleteEventsDialog: () => {
      history.push(dialogRoutes.eventsDelete.path.replace(":param", folderParam))
    },
    deleteEventsRule: dialogRoutes.eventsDelete
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
    <EventsUIProvider eventsUIEvents={eventsUIEvents}>
      <EventsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <EventCard folderParam={folderParam} goBackToFolder={goBackToList} />
    </EventsUIProvider>
  )
}


export default injectIntl(EventPage)
