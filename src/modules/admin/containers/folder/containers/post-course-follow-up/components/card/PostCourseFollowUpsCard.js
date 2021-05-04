import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
} from "../../../../../../../../components/partials/controls"
import { isRLTLang } from "./../../../../../../../../i18n"

import PostCourseFollowUpsTable from "./../table/PostCourseFollowUpsTable"
import PostCourseFollowUpsGrouping from "./../grouping/PostCourseFollowUpsGrouping"
import { usePostCourseFollowUpsUIContext } from "./../../context/PostCourseFollowUpsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const PostCourseFollowUpCard = ({ folderParam, goBackToFolder }) => {

  const postCourseFollowUpsUIProps = usePostCourseFollowUpsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.postCourseFollowUp.success,
      error: state.admin.postCourseFollowUp.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="POST_COURSE_FOLLOWUP.MSG.DELETE" /> },
          { condition: success.isClosed, label: <FormattedMessage id="POST_COURSE_FOLLOWUP.MSG.COLSED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="POST_COURSE_FOLLOWUP.NEW.MSG" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="POST_COURSE_FOLLOWUP.EDIT.MSG" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="POST_COURSE_FOLLOWUP.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <Button
              type="button"
              onClick={goBackToFolder}
              className="btn btn-sm btn-light mx-2"
            >
              { isRLTLang() ?
                <>
                  <FormattedMessage id="GENERAL.BACK" />
                  <i className="fa fa-arrow-left" />
                </>
                : <>
                  <i className="fa fa-arrow-left" />
                  <FormattedMessage id="GENERAL.BACK" />
                </>
              }
            </Button>
            <ProtectedLink rule={postCourseFollowUpsUIProps.newPostCourseFollowUpRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={postCourseFollowUpsUIProps.newPostCourseFollowUpButtonClick}
              >
                <FormattedMessage id="POST_COURSE_FOLLOWUP.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {postCourseFollowUpsUIProps.ids.length > 0 && <PostCourseFollowUpsGrouping />}
          <PostCourseFollowUpsTable folderParam={folderParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default PostCourseFollowUpCard
