import React, {useEffect} from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"

import { FormView, LanguageTab } from "../../../../../../components/partials/controls"
import { skillFields, skillFieldsAr, skillFieldsFr } from "./fields/skillFields"
import { DynamicForm, RenderFields } from "./../../../../../../components/partials/controls"
import routes from "./../../routes/details"

import {shallowEqual, useDispatch, useSelector} from "react-redux"
import {clearStore, createSkill, editSkill, fetchSkillExtraData} from "../../store/actions"


const SkillForm = ({ intl, history, params = undefined, goBackToList }) => {

  const fieldsFr = skillFieldsFr({ intl })
  const fieldsAr = skillFieldsAr({ intl })
  const fields = skillFields({ intl })

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, error, skill, success } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      isLoading: state.admin.skill.isLoading,
      success: state.admin.skill.success,
      skill: state.admin.skill.skill
    }),
    shallowEqual
  )

  const saveSkill = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createSkill(values))
    } else {
      dispatch(editSkill(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.skillDisplay.path.replace(":param", params.param))
  }

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchSkillExtraData(params))
    }
  }, [params, dispatch])

  return (
    <FormView
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "SKILL.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "SKILL.EDIT.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      goBackTo={goBackToList}
      goToDisplay={ !_.isEmpty(params) && goToShow }
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: "SKILL.NEW.TITLE" }) : intl.formatMessage({ id: "SKILL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && skill}
              onSubmit={saveSkill}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <RenderFields fields={fields} show={true} />
              <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
          )}
        </LanguageTab>
      ) }
    </FormView>
  )
}

export default injectIntl(SkillForm)
