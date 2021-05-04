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
import {getAttr} from "../../../../../../helpers"
import {AR, FR} from "../../../../../../constants"


const SkillsEvaluation = ({ history, params = null, intl }) => {

  const basePath = getBasePath()
  // Subheader
  const suhbeader = useSubheader()

  const _title = !_.isEmpty(params.skillsEvaluationParam)
    ? intl.formatMessage({ id: "SKILLS_EVALUATION.EDIT.TITLE" })
    : intl.formatMessage({ id: "SKILLS_EVALUATION.NEW.TITLE" })

  useEffect(() => {
    suhbeader.setTitle(_title)
  })

  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, skillsEvaluationForEdit, skillsAssessmentsBatchSet, success, error } = useSelector(
    (state) => ({
      skillsAssessmentsBatchSet: ((state.admin.folderGroup.folderGroup || {}).folderDetails || []).map((item) => ({
        folder: item.id, folderName: getAttr(item, { [FR]: ["firstNameFr", "lastNameFr"], [AR]: ["firstNameAr", "lastNameAr"] })
      })),
      isLoading: state.admin.skillsEvaluationGroup.isLoading,
      skillsEvaluationForEdit: ({ ...state.admin.skillsEvaluationGroup.skillsEvaluation,
        skillsAssessmentsBatchSet: getAttr(state.admin.skillsEvaluationGroup.skillsEvaluation || {}, "skillsAssessmentsBatchSet", []).map((item) => ({
          ...item, folderName: getAttr(item, {
            [FR]: ["folderDetails.firstNameFr", "folderDetails.lastNameFr"],
            [AR]: ["folderDetails.firstNameAr", "folderDetails.lastNameAr"]
          }, intl.formatMessage({ id: "GENERAL.EMPTY" }))
        })
        )
      }),
      success: state.admin.skillsEvaluationGroup.success,
      error: state.admin.skillsEvaluationGroup.error
    }),
    shallowEqual
  )

  const saveSkillsEvaluation = ({ skillsAssessmentsBatchSet, ...formValues }) => {
    const values = ({
      ...formValues,
      skillsAssessmentsBatchSet : skillsAssessmentsBatchSet
      .map(({ folder, skillsAssessmentsSet }) => ({ folder, skillsAssessmentsSet, folderGroup: params.param, ...formValues }) )
    })

    if (_.isEmpty(params.skillsEvaluationParam)) {
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
    if (!_.isEmpty(params.skillsEvaluationParam)){
      dispatch(fetchSkillsEvaluation(params))
    }

    // eslint-disable-next-line
  }, [])

  console.log(skillsEvaluationForEdit)

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
        skillsEvaluation={ _.isEmpty(params.skillsEvaluationParam) ? { skillsAssessmentsBatchSet } : skillsEvaluationForEdit}
        onSubmit={saveSkillsEvaluation}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(SkillsEvaluation))
