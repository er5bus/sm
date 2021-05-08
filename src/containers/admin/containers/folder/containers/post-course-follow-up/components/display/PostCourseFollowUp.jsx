import React from "react"
import { injectIntl } from "react-intl"
import {DisplayItems, LanguageTab, RenderItems} from "../../../../../../../../components/partials"
import { postCourseFollowUpFields, postCourseFollowUpFieldsAr, postCourseFollowUpFieldsFr } from "./fields/postCourseFollowUpFields"


const PostCourseFollowUpTemplate = ({ postCourseFollowUp = {}, isFetching, error, intl }) => {

  const fields = postCourseFollowUpFields({ intl })
  const fieldsAr = postCourseFollowUpFieldsAr({ intl })
  const fieldsFr = postCourseFollowUpFieldsFr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={postCourseFollowUp}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>
      ) }
    </LanguageTab>
  )
}

export default injectIntl(PostCourseFollowUpTemplate)
