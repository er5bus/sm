import React from "react"
import AssessmentLevelsLoadingDialog from "./components/loading/AssessmentLevelsLoadingDialog"
import { AssessmentLevelsUIProvider } from "./context/AssessmentLevelsUIContext"
import AssessmentLevelCard from "./components/card/AssessmentLevelsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const AssessmentLevelPage = ({ history }) => {

  const assessmentLevelsUIEvents = {
    newAssessmentLevelButtonClick: () => {
      history.push(dialogRoutes.assessmentLevelCreate.path)
    },
    openAssessmentLevelImportDialog: () => {
      history.push(dialogRoutes.assessmentLevelImport.path)
    },
    newAssessmentLevelRule: pageRoutes.assessmentLevelCreate,
    openShowAssessmentLevelPage: (param) => {
      history.push(dialogRoutes.assessmentLevelShow.path.replace(":param", param))
    },
    showAssessmentLevelRule: dialogRoutes.assessmentLevelShow,
    openEditAssessmentLevelPage: (param) => {
      history.push(dialogRoutes.assessmentLevelEdit.path.replace(":param", param))
    },
    editAssessmentLevelRule: dialogRoutes.assessmentLevelEdit,

    openDeactivateAssessmentLevelDialog: (param) => {
      history.push(dialogRoutes.assessmentLevelDeactivate.path.replace(":param", param))
    },
    deactivateAssessmentLevelRule: dialogRoutes.assessmentLevelDeactivate,
    
    openActivateAssessmentLevelDialog: (param) => {
      history.push(dialogRoutes.assessmentLevelActivate.path.replace(":param", param))
    },
    activateAssessmentLevelRule: dialogRoutes.assessmentLevelActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <AssessmentLevelsUIProvider assessmentLevelsUIEvents={assessmentLevelsUIEvents}>
      <AssessmentLevelsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <AssessmentLevelCard />
    </AssessmentLevelsUIProvider>
  )
}


export default AssessmentLevelPage
