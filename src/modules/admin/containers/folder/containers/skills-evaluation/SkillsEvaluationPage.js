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

  const skillsEvaluationFoldersUISkillsEvaluations = {
    newSkillsEvaluationButtonClick: () => {
      history.push(getNestedPath( basePath, pageRoutes.skillsEvaluationFolderCreate.path).replace(":param", folderParam))
    },
    newSkillsEvaluationRule: pageRoutes.skillsEvaluationFolderCreate,
    openShowSkillsEvaluationPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.skillsEvaluationFolderShow.path).replace(":param", folderParam).replace(":skillsEvaluationFolderParam", param))
    },
    showSkillsEvaluationRule: pageRoutes.skillsEvaluationFolderShow,
    openEditSkillsEvaluationPage: (param) => {
      history.push(getNestedPath(basePath, pageRoutes.skillsEvaluationFolderEdit.path).replace(":param", folderParam).replace(":skillsEvaluationFolderParam", param))
    },   
    editSkillsEvaluationRule: pageRoutes.skillsEvaluationFolderEdit,
    openDeactivateSkillsEvaluationDialog: (param) => {
      history.push(dialogRoutes.skillsEvaluationFolderDeactivate.path.replace(":param", folderParam).replace(":skillsEvaluationFolderParam", param))
    },
    deactivateSkillsEvaluationRule: dialogRoutes.skillsEvaluationFolderDeactivate,
    openActivateSkillsEvaluationDialog: (param) => {
      history.push(dialogRoutes.skillsEvaluationFolderActivate.path.replace(":param", folderParam).replace(":skillsEvaluationFolderParam", param))
    },
    activateSkillsEvaluationRule: dialogRoutes.skillsEvaluationFolderActivate,
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
    <SkillsEvaluationsUIProvider skillsEvaluationFoldersUISkillsEvaluations={skillsEvaluationFoldersUISkillsEvaluations}>
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
