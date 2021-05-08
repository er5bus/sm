/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import SkillsEvaluationForm from "./components/form/SkillsEvaluationForm"
import { createSkillsEvaluation, clearStore, editSkillsEvaluation, fetchSkillsEvaluation } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
import { getBasePath } from "./routes"


const SkillsEvaluation = ({ history, params = null, intl }) => {

  const basePath = getBasePath()
  // Subheader
  const suhbeader = useSubheader()

  const _title = !_.isEmpty(params.skillsEvaluationFolderParam) 
    ? intl.formatMessage({ id: "SKILLS_EVALUATION.EDIT.TITLE" }) 
    : intl.formatMessage({ id: "SKILLS_EVALUATION.NEW.TITLE" })

  useEffect(() => {
    suhbeader.setTitle(_title)
  })

  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, skillsEvaluationFolderForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.skillsEvaluationFolder.isLoading,
      skillsEvaluationFolderForEdit: state.admin.skillsEvaluationFolder.skillsEvaluationFolder,
      success: state.admin.skillsEvaluationFolder.success,
      error: state.admin.skillsEvaluationFolder.error
    }),
    shallowEqual
  )

  const saveSkillsEvaluation = (values) => {
    if (_.isEmpty(params.skillsEvaluationFolderParam)) {
      dispatch(createSkillsEvaluation(params, values))
    } else {
      dispatch(editSkillsEvaluation(params, values))
    }
  }

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  useEffect(() => {
    if ((success.isCreated || success.isUpdated) && !_.isEmpty(params)  ) {
      //history.goBack()
    }

    // eslint-disable-next-line
  }, [success, params])

  useEffect(() => {
    if (!_.isEmpty(params.skillsEvaluationFolderParam)){
      dispatch(fetchSkillsEvaluation(params))
    }

    // eslint-disable-next-line
  }, [])

  return (
    <FormView
      goBackTo={goBackTo}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "SKILLS_EVALUATION.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "SKILLS_EVALUATION.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<SkillsEvaluationForm
        isLoading={isLoading}
        success={success.isCreated}
        skillsEvaluationFolder={ !_.isEmpty(params.skillsEvaluationFolderParam) && skillsEvaluationFolderForEdit}
        onSubmit={saveSkillsEvaluation}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(SkillsEvaluation))
