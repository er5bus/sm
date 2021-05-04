import React from "react"
import EvaluationRubricsLoadingDialog from "./components/loading/EvaluationRubricsLoadingDialog"
import { EvaluationRubricsUIProvider } from "./context/EvaluationRubricsUIContext"
import EvaluationRubricCard from "./components/card/EvaluationRubricsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const EvaluationRubricPage = ({ history }) => {

  const evaluationRubricsUIEvents = {
    newEvaluationRubricButtonClick: () => {
      history.push(dialogRoutes.evaluationRubricCreate.path)
    },
    openEvaluationRubricImportDialog: () => {
      history.push(dialogRoutes.evaluationRubricImport.path)
    },
    newEvaluationRubricRule: pageRoutes.evaluationRubricCreate,
    openShowEvaluationRubricPage: (param) => {
      history.push(dialogRoutes.evaluationRubricShow.path.replace(":param", param))
    },
    showEvaluationRubricRule: dialogRoutes.evaluationRubricShow,
    openEditEvaluationRubricPage: (param) => {
      history.push(dialogRoutes.evaluationRubricEdit.path.replace(":param", param))
    },
    editEvaluationRubricRule: dialogRoutes.evaluationRubricEdit,

    openDeactivateEvaluationRubricDialog: (param) => {
      history.push(dialogRoutes.evaluationRubricDeactivate.path.replace(":param", param))
    },
    deactivateEvaluationRubricRule: dialogRoutes.evaluationRubricDeactivate,
    
    openActivateEvaluationRubricDialog: (param) => {
      history.push(dialogRoutes.evaluationRubricActivate.path.replace(":param", param))
    },
    activateEvaluationRubricRule: dialogRoutes.evaluationRubricActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <EvaluationRubricsUIProvider evaluationRubricsUIEvents={evaluationRubricsUIEvents}>
      <EvaluationRubricsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <EvaluationRubricCard />
    </EvaluationRubricsUIProvider>
  )
}


export default EvaluationRubricPage
