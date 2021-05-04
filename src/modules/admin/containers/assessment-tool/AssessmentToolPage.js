import React from "react"
import AssessmentToolsLoadingDialog from "./components/loading/AssessmentToolsLoadingDialog"
import { AssessmentToolsUIProvider } from "./context/AssessmentToolsUIContext"
import AssessmentToolCard from "./components/card/AssessmentToolsCard"

import { assessmentToolRoutes, basePath } from "./routes/assessment-tool"

import displayRoutes from "./routes/details"
import formRoutes from "./routes/forms"

import { ProtectedDialogRoute } from "../../../../components/routes"


const AssessmentToolPage = ({ history }) => {

  const assessmentToolsUIEvents = {
    newAssessmentToolButtonClick: () => {
      history.push(assessmentToolRoutes.assessmentToolNew.path)
    },
    newAssessmentToolRule: assessmentToolRoutes.assessmentToolNew,
    openAssessmentToolImportDialog: () => {
      history.push(assessmentToolRoutes.assessmentToolImport.path)
    },
    openShowAssessmentToolPage: (param) => {
      history.push(displayRoutes.assessmentToolDisplay.path.replace(":param", param))
    },
    showAssessmentToolRule: displayRoutes.assessmentToolDisplay,
    openEditAssessmentToolPage: (param) => {
      history.push(formRoutes.assessmentToolForm.path.replace(":param", param))
    },
    editAssessmentToolRule: formRoutes.assessmentToolForm,

    openDisableAssessmentToolDialog: (param) => {
      history.push(assessmentToolRoutes.assessmentToolDisable.path.replace(":param", param))
    },
    disableAssessmentToolRule: assessmentToolRoutes.assessmentToolDisable,
    
    openEnableAssessmentToolDialog: (param) => {
      history.push(assessmentToolRoutes.assessmentToolEnable.path.replace(":param", param))
    },
    enableAssessmentToolRule: assessmentToolRoutes.assessmentToolEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <AssessmentToolsUIProvider assessmentToolsUIEvents={assessmentToolsUIEvents}>
      <AssessmentToolsLoadingDialog />
      { Object.keys(assessmentToolRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={assessmentToolRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: assessmentToolRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <AssessmentToolCard />
    </AssessmentToolsUIProvider>
  )
}


export default AssessmentToolPage
