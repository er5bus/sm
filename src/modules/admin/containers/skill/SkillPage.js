import React from "react"
import SkillsLoadingDialog from "./components/loading/SkillsLoadingDialog"
import { SkillsUIProvider } from "./context/SkillsUIContext"
import SkillCard from "./components/card/SkillsCard"

import { skillRoutes, basePath } from "./routes/skill"
import pageRoutes from "./../../routes"
import formRoutes from "./routes/forms"
import displayRoutes from "./routes/details"

import { ProtectedDialogRoute } from "../../../../components/routes"


const SkillPage = ({ history }) => {

  const skillsUIEvents = {
    newSkillButtonClick: () => {
      history.push(pageRoutes.skillCreate.path)
    },
    openSkillImportDialog: () => {
      history.push(skillRoutes.skillImport.path)
    },
    newSkillRule: pageRoutes.skillCreate,
    openShowSkillPage: (param) => {
      history.push(displayRoutes.skillDisplay.path.replace(":param", param))
    },
    showSkillRule: pageRoutes.skillShow,
    openEditSkillPage: (param) => {
      history.push(formRoutes.skillForm.path.replace(":param", param))
    },
    editSkillRule: pageRoutes.skillEdit,

    openDisableSkillDialog: (param) => {
      history.push(skillRoutes.skillDisable.path.replace(":param", param))
    },
    disableSkillRule: skillRoutes.skillDisable,
    
    openEnableSkillDialog: (param) => {
      history.push(skillRoutes.skillEnable.path.replace(":param", param))
    },
    enableSkillRule: skillRoutes.skillEnable,
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}
    return <Component params={params} show={match != null} onHide = {() => { history.push( basePath )} } />
  }

  return (
    <SkillsUIProvider skillsUIEvents={skillsUIEvents}>
      <SkillsLoadingDialog />
      { Object.keys(skillRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={skillRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: skillRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      )) }
      <SkillCard />
    </SkillsUIProvider>
  )
}


export default SkillPage
