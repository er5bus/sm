import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import postCourseFollowUpFields from "./fields/postCourseFollowUpFields"
import { fetchPostCourseFollowUps }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { usePostCourseFollowUpsUIContext } from "../../context/PostCourseFollowUpsUIContext"


const PostCourseFollowUpTable = ({ intl, folderParam }) => {
  // PostCourseFollowUps UI Context
  const postCourseFollowUpsUIProps = usePostCourseFollowUpsUIContext()

  const columns = postCourseFollowUpFields({ intl, postCourseFollowUpsUIProps })

  // Getting curret state of postCourseFollowUps list from store (Redux)
  const { totalSize, postCourseFollowUps: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.postCourseFollowUp }),
    shallowEqual
  )
  // PostCourseFollowUps Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    postCourseFollowUpsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchPostCourseFollowUps({ ...(postCourseFollowUpsUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postCourseFollowUpsUIProps.queryParams, dispatch])

  return (
    <DataTable
      isFetching={isFetching}
      entities={entities}
      columns={columns}
      totalSize={totalSize}
      queryParams={postCourseFollowUpsUIProps.queryParams}
      onQueryParamsChange={postCourseFollowUpsUIProps.setQueryParams}
      ids={postCourseFollowUpsUIProps.ids}
      setIds={postCourseFollowUpsUIProps.setIds}
    />
  )
}


export default injectIntl(PostCourseFollowUpTable)
