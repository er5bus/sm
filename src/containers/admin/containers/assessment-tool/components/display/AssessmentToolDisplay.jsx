import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"

import {LanguageTab} from "./../../../../../../components/partials/controls"

import {
  DisplayItems,
  RenderItems,
  ShowView
} from "./../../../../../../components/partials/controls"

import { assessmentToolFields, assessmentToolFieldsFr, assessmentToolFieldsAr } from "./fields/assessmentToolFields"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchAssessmentToolExtraData } from "../../store/actions";

import formRoutes from "./../../routes/forms"

const AssessmentToolTemplate = ({ goBackToList, history, params, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, assessmentTool, error } = useSelector(
    (state) => ({
      error: state.admin.assessmentTool.error,
      isFetching: state.admin.assessmentTool.isFetching,
      assessmentTool: state.admin.assessmentTool.assessmentTool
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(assessmentTool) || assessmentTool.id !== params.param) {
      dispatch(fetchAssessmentToolExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.assessmentToolForm.path.replace(":param", params.param))
  }

  const fields = assessmentToolFields({ intl })
  const fieldsFr = assessmentToolFieldsFr({ intl })
  const fieldsAr = assessmentToolFieldsAr({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.ASSESSMENT_TOOL" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        { ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={assessmentTool}
          >
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
            <RenderItems fields={fields} />
          </DisplayItems>)}
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(AssessmentToolTemplate)
