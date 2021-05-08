import React from "react"
import { injectIntl } from "react-intl"
import { postCourseFollowUpFieldsAr, postCourseFollowUpFieldsFr, postCourseFollowUpFields } from "./fields/postCourseFollowUpFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../../../components/partials/controls"


const PostCourseFollowUpForm = (props) => {

  const { onSubmit, success, postCourseFollowUp, saveRef, intl } = props

  const fieldsFr = postCourseFollowUpFieldsFr({ intl })
  const fieldsAr = postCourseFollowUpFieldsAr({ intl })
  const fields = postCourseFollowUpFields({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<DynamicForm
        className="mt-5"
        clearValuesAfterSubmit={success}
        initialValues={postCourseFollowUp}
        onSubmit={onSubmit}
      >
        <RenderFields fields={fieldsFr} show={isFr} />
        <RenderFields fields={fieldsAr} show={isAr} />
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      )}
    </LanguageTab>
  )
}

export default injectIntl(PostCourseFollowUpForm)
