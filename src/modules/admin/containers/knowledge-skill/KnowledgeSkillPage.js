import React from "react"
import KnowledgeSkillsLoadingDialog from "./components/loading/KnowledgeSkillsLoadingDialog"
import { KnowledgeSkillsUIProvider } from "./context/KnowledgeSkillsUIContext"
import KnowledgeSkillCard from "./components/card/KnowledgeSkillsCard"

import { dialogRoutes, basePath } from "./routes"
import pageRoutes from "./../../routes"

import { ProtectedDialogRoute } from "../../../../components/routes"


const KnowledgeSkillPage = ({ history }) => {

  const knowledgeSkillsUIEvents = {
    newKnowledgeSkillButtonClick: () => {
      history.push(dialogRoutes.knowledgeSkillCreate.path)
    },
    openKnowledgeSkillImportDialog: () => {
      history.push(dialogRoutes.knowledgeSkillImport.path)
    },
    newKnowledgeSkillRule: pageRoutes.knowledgeSkillCreate,
    openShowKnowledgeSkillPage: (param) => {
      history.push(dialogRoutes.knowledgeSkillShow.path.replace(":param", param))
    },
    showKnowledgeSkillRule: dialogRoutes.knowledgeSkillShow,
    openEditKnowledgeSkillPage: (param) => {
      history.push(dialogRoutes.knowledgeSkillEdit.path.replace(":param", param))
    },
    editKnowledgeSkillRule: dialogRoutes.knowledgeSkillEdit,

    openDeactivateKnowledgeSkillDialog: (param) => {
      history.push(dialogRoutes.knowledgeSkillDeactivate.path.replace(":param", param))
    },
    deactivateKnowledgeSkillRule: dialogRoutes.knowledgeSkillDeactivate,
    
    openActivateKnowledgeSkillDialog: (param) => {
      history.push(dialogRoutes.knowledgeSkillActivate.path.replace(":param", param))
    },
    activateKnowledgeSkillRule: dialogRoutes.knowledgeSkillActivate,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <KnowledgeSkillsUIProvider knowledgeSkillsUIEvents={knowledgeSkillsUIEvents}>
      <KnowledgeSkillsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <KnowledgeSkillCard />
    </KnowledgeSkillsUIProvider>
  )
}


export default KnowledgeSkillPage
