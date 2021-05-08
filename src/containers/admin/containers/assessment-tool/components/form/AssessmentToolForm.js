import React, { useEffect } from 'react'
import _ from 'lodash'
import { injectIntl } from 'react-intl'
import { assessmentToolFields, assessmentToolFieldsAr, assessmentToolFieldsFr } from './fields/assessmentToolFields'
import { DynamicForm, FormView, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import routes from './../../routes/details'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { clearStore, createAssessmentTool, editAssessmentTool, fetchAssessmentToolExtraData } from '../../store/actions'

const AssessmentToolForm = ({ intl, history, params = undefined, goBackToList }) => {
  const fieldsFr = assessmentToolFieldsFr({ intl })
  const fieldsAr = assessmentToolFieldsAr({ intl })
  const fields = assessmentToolFields({ intl })

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, assessmentTool, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.assessmentTool.isLoading,
      success: state.admin.assessmentTool.success,
      error: state.admin.assessmentTool.error,
      assessmentTool: state.admin.assessmentTool.assessmentTool
    }),
    shallowEqual
  )

  const saveAssessmentTool = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createAssessmentTool(values))
    } else {
      dispatch(editAssessmentTool(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.assessmentToolDisplay.path.replace(':param', params.param))
  }

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchAssessmentToolExtraData(params))
    }
  }, [params, dispatch])

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={!_.isEmpty(params) && goToShow}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ASSESSMENT_TOOL.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "ASSESSMENT_TOOL.NEW.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: 'ASSESSMENT_TOOL.NEW.TITLE' }) : intl.formatMessage({ id: 'ASSESSMENT_TOOL.EDIT.TITLE' })
      }
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className='mt-5'
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && assessmentTool}
              onSubmit={saveAssessmentTool}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <RenderFields fields={fields} show />
              <button ref={saveRef} className='d-none' type='submit' />
            </DynamicForm>
          )}
        </LanguageTab>
      )}
    </FormView>
  )
}

export default injectIntl(AssessmentToolForm)
