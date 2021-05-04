import React, {useEffect} from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"

import { assessmentLevelFields } from "./fields/assessmentLevelFields"
import { DynamicForm, FormView, RenderFields } from "./../../../../../../components/partials/controls"
import routes from "./../../routes/details"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { clearStore, editAssessmentLevel, fetchAssessmentLevelExtraData } from "../../store/actions"


const AssessmentLevelForm = ({ intl, history, params = undefined, goBackToList }) => {

  const fields = assessmentLevelFields({ intl })

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, assessmentLevel, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.assessmentTool.isLoading,
      assessmentLevel: state.admin.assessmentTool.assessmentLevels,
      success: state.admin.assessmentTool.success,
      error: state.admin.assessmentTool.error
    }),
    shallowEqual
  )

  const saveAssessmentLevel = (values) => {
    dispatch(editAssessmentLevel(params, values))
  }

  const goToShow = () => {
    history.push(routes.associateAssessmentLevelDisplay.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchAssessmentLevelExtraData(params))
  }, [params, dispatch])

  return (
    <FormView
      goBackTo={goBackToList}
      successMsg={[
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ASSESSMENT_TOOL.EDIT.MSG" }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: "ASSESSMENT_TOOL.EDIT.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      goToDisplay={ goToShow}
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: "ASSESSMENT_TOOL.NEW.TITLE" }) : intl.formatMessage({ id: "ASSESSMENT_TOOL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (<DynamicForm
        className="mt-5"
        initialValues={!_.isEmpty(params) && assessmentLevel}
        onSubmit={saveAssessmentLevel}
      >
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>)
      }
    </FormView>
  )
}

export default injectIntl(AssessmentLevelForm)
