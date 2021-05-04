import React, {useEffect} from "react"
import SkillsEvaluationsLoadingDialog from "./components/loading/SkillsEvaluationsLoadingDialog"
import { SkillsEvaluationsUIProvider } from "./context/SkillsEvaluationsUIContext"
import SkillsEvaluationCard from "./components/card/SkillsEvaluationsCard"
import { injectIntl } from "react-intl"
import { useSubheader } from "../../../../../../components/layout"

import { getDialogRoutes, getBasePath } from "./routes"
import * as pageRoutes from "./../../routes/skills-evaluation"

import { ProtectedDialogRoute } from "../../../../../../components/routes"
import {getNestedPath} from "../../../../../../helpers"


const SkillsEvaluationPage = ({ intl, history, goBackToList, params: { param: folderParam } }) => {

  const basePath = getBasePath()
  const dialogRoutes = getDialogRoutes()

  const suhbeader = useSubheader()

  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "SKILLS_EVALUATION.LIST.TITLE" }))
  })

  const skillsEvaluationsUISkillsEvaluations = {
    newSkillsEvaluationButtonClick: () => {
      history.push(getNestedPath( basePath, pageRoutes.skillsEvaluationCreate.path).replace(":param", folderParam))
    },
    newSkillsEvaluationRule: pageRoutes.skillsEvaluationCreate,
    openShowSkillsEvaluationPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.skillsEvaluationShow.path).replace(":param", folderParam).replace(":skillsEvaluationParam", param))
    },
    showSkillsEvaluationRule: pageRoutes.skillsEvaluationShow,
    openEditSkillsEvaluationPage: (param) => {
      history.push(getNestedPath(basePath, pageRoutes.skillsEvaluationEdit.path).replace(":param", folderParam).replace(":skillsEvaluationParam", param))
    },   
    editSkillsEvaluationRule: pageRoutes.skillsEvaluationEdit,
    openDeactivateSkillsEvaluationDialog: (param) => {
      history.push(dialogRoutes.skillsEvaluationDeactivate.path.replace(":param", folderParam).replace(":skillsEvaluationParam", param))
    },
    deactivateSkillsEvaluationRule: dialogRoutes.skillsEvaluationDeactivate,
    openActivateSkillsEvaluationDialog: (param) => {
      history.push(dialogRoutes.skillsEvaluationActivate.path.replace(":param", folderParam).replace(":skillsEvaluationParam", param))
    },
    activateSkillsEvaluationRule: dialogRoutes.skillsEvaluationActivate,
  }

  const onHide = () => {
    history.push(basePath.replace(":param", folderParam))
  }

  const renderRoute = ({ component, history, match }) => {
    const Component = component
    const params = (match && match.params) ? { ...match.params, param: folderParam } : {}
    return <Component params={params} history={history} show={match != null} onHide={onHide} />
  }

  return (
    <SkillsEvaluationsUIProvider skillsEvaluationsUISkillsEvaluations={skillsEvaluationsUISkillsEvaluations}>
      <SkillsEvaluationsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <SkillsEvaluationCard folderParam={folderParam} goBackToFolder={goBackToList} />
    </SkillsEvaluationsUIProvider>
  )
}


export default injectIntl(SkillsEvaluationPage)
