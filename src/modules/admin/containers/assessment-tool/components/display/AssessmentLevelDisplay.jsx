import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import { isEmpty } from 'lodash'

import {
  DisplayItems,
  RenderItems,
  ShowView
} from './../../../../../../components/partials/controls'

import { assessmentLevelFields } from './fields/assessmentLevelFields'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { fetchAssessmentLevelExtraData } from '../../store/actions'

import formRoutes from './../../routes/forms'

const AssessmentLevelTemplate = ({ goBackToList, history, params, intl }) => {
  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, assessmentLevel, error } = useSelector(
    (state) => ({
      error: state.admin.assessmentTool.error,
      isFetching: state.admin.assessmentTool.isFetching,
      assessmentLevel: state.admin.assessmentTool.assessmentLevels
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(assessmentLevel) || assessmentLevel.id !== params.param) {
      dispatch(fetchAssessmentLevelExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.associateAssessmentLevelForm.path.replace(':param', params.param))
  }

  const fields = assessmentLevelFields({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.ASSESSMENT_LEVEL" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={assessmentLevel}
      >
        <RenderItems fields={fields} />
      </DisplayItems>
    </ShowView>
  )
}

export default injectIntl(AssessmentLevelTemplate)
