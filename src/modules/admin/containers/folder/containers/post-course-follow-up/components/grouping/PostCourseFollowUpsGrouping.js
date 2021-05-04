import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../../../helpers"
import { usePostCourseFollowUpsUIContext } from "../../context/PostCourseFollowUpsUIContext"
import { ENDPOINTS } from "./../../store/constants"
import useDownloader from "../../../../../../../../hooks/useDownloader"
import {DataTableGrouping} from "../../../../../../../../components/partials"


const PostCourseFollowUpsPostCourseFollowUping = () => {
  // PostCourseFollowUps UI Context
  const postCourseFollowUpsUIProps = usePostCourseFollowUpsUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_POST_COURSE_FOLLOWUP,
    params: { ids: postCourseFollowUpsUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ postCourseFollowUpsUIProps.ids.length }>
      <button
        type="button"
        disabled={isDownloding}
        className="btn btn-sm btn-primary font-weight-bolder font-size-sm mx-2"
        onClick={ downloadTrigger }
      >
        <span className="svg-icon svg-icon-md svg-icon-light">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Export.svg")} />
        </span>
        <FormattedMessage id="GENERAL.EXPORT" />
      </button>
    </DataTableGrouping>
  )
}


export default PostCourseFollowUpsPostCourseFollowUping
