import React from "react"
import AptitudeSkillsLoadingDialog from "./components/loading/AptitudeSkillsLoadingDialog"
import { AptitudeSkillsUIProvider } from "./context/AptitudeSkillsUIContext"
import AptitudeSkillCard from "./components/card/AptitudeSkillsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const AptitudeSkillPage = ({ history }) => {

  const aptitudeSkillsUIEvents = {
    newAptitudeSkillButtonClick: () => {
      history.push(dialogRoutes.aptitudeSkillCreate.path)
    },
    openAptitudeSkillImportDialog: () => {
      history.push(dialogRoutes.aptitudeSkillImport.path)
    },
    newAptitudeSkillRule: pageRoutes.aptitudeSkillCreate,
    openShowAptitudeSkillPage: (param) => {
      history.push(dialogRoutes.aptitudeSkillShow.path.replace(":param", param))
    },
    showAptitudeSkillRule: dialogRoutes.aptitudeSkillShow,
    openEditAptitudeSkillPage: (param) => {
      history.push(dialogRoutes.aptitudeSkillEdit.path.replace(":param", param))
    },
    editAptitudeSkillRule: dialogRoutes.aptitudeSkillEdit,

    openDeactivateAptitudeSkillDialog: (param) => {
      history.push(dialogRoutes.aptitudeSkillDeactivate.path.replace(":param", param))
    },
    deactivateAptitudeSkillRule: dialogRoutes.aptitudeSkillDeactivate,
    
    openActivateAptitudeSkillDialog: (param) => {
      history.push(dialogRoutes.aptitudeSkillActivate.path.replace(":param", param))
    },
    activateAptitudeSkillRule: dialogRoutes.aptitudeSkillActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <AptitudeSkillsUIProvider aptitudeSkillsUIEvents={aptitudeSkillsUIEvents}>
      <AptitudeSkillsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <AptitudeSkillCard />
    </AptitudeSkillsUIProvider>
  )
}


export default AptitudeSkillPage
