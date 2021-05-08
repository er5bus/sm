import React, {useEffect} from "react"
import PostCourseFollowUpsLoadingDialog from "./components/loading/PostCourseFollowUpsLoadingDialog"
import { PostCourseFollowUpsUIProvider } from "./context/PostCourseFollowUpsUIContext"
import PostCourseFollowUpCard from "./components/card/PostCourseFollowUpsCard"
import { injectIntl } from "react-intl"
import { useSubheader } from "../../../../../../components/layout"

import { getDialogRoutes, getBasePath } from "./routes"
import * as pageRoutes from "./../../routes/post-course-follow-up"

import { ProtectedDialogRoute } from "../../../../../../components/routes"
import {getNestedPath} from "../../../../../../helpers"


const PostCourseFollowUpPage = ({ intl, history, goBackToList, params: { param: folderParam } }) => {

  const basePath = getBasePath()
  const dialogRoutes = getDialogRoutes()

  const suhbeader = useSubheader()

  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "POST_COURSE_FOLLOWUP.LIST.TITLE" }))
  })

  const postCourseFollowUpsUIPostCourseFollowUps = {
    newPostCourseFollowUpButtonClick: () => {
      history.push(getNestedPath( basePath, pageRoutes.postCourseFollowUpCreate.path).replace(":param", folderParam))
    },
    newPostCourseFollowUpRule: pageRoutes.postCourseFollowUpCreate,
    openShowPostCourseFollowUpPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.postCourseFollowUpShow.path).replace(":param", folderParam).replace(":postCourseFollowUpParam", param))
    },
    showPostCourseFollowUpRule: pageRoutes.postCourseFollowUpShow,
    openEditPostCourseFollowUpPage: (param) => {
      history.push(getNestedPath( basePath, pageRoutes.postCourseFollowUpEdit.path).replace(":param", folderParam).replace(":postCourseFollowUpParam", param))
    },   
    editPostCourseFollowUpRule: pageRoutes.postCourseFollowUpEdit,
    
    openClosePostCourseFollowUpDialog: (param) => {
      history.push(dialogRoutes.postCourseFollowUpClose.path.replace(":param", folderParam).replace(":postCourseFollowUpParam", param))
    },
    closePostCourseFollowUpRule: dialogRoutes.postCourseFollowUpClose,

    openDeletePostCourseFollowUpDialog: (param) => {
      history.push(dialogRoutes.postCourseFollowUpDelete.path.replace(":param", folderParam).replace(":postCourseFollowUpParam", param))
    },
    deletePostCourseFollowUpRule: dialogRoutes.postCourseFollowUpDelete,
    openDeletePostCourseFollowUpsDialog: () => {
      history.push(dialogRoutes.postCourseFollowUpsDelete.path.replace(":param", folderParam))
    },
    deletePostCourseFollowUpsRule: dialogRoutes.postCourseFollowUpsDelete
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
    <PostCourseFollowUpsUIProvider postCourseFollowUpsUIPostCourseFollowUps={postCourseFollowUpsUIPostCourseFollowUps}>
      <PostCourseFollowUpsLoadingDialog />
      { Object.keys(dialogRoutes).map(key => (
        <ProtectedDialogRoute key={key} path={dialogRoutes[key].path}>
          {({ history, match }) => renderRoute({ component: dialogRoutes[key].component, history, match })}
        </ProtectedDialogRoute>
      ))}
      <PostCourseFollowUpCard folderParam={folderParam} goBackToFolder={goBackToList} />
    </PostCourseFollowUpsUIProvider>
  )
}


export default injectIntl(PostCourseFollowUpPage)
