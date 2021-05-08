import React, {useEffect} from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"

import { FormView } from "../../../../../../components/partials/controls"
import { aptitudeSkillFields } from "./fields/aptitudeSkillFields"
import { DynamicForm, RenderFields } from "./../../../../../../components/partials/controls"
import routes from "./../../routes/details"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { clearStore, editAptitudeSkill, fetchAptitudeSkillExtraData } from "../../store/actions"

const AptitudeSkillForm = ({ intl, history, params = undefined, goBackToList }) => {

  const fields = aptitudeSkillFields({ intl })

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, aptitudeSkill, error, success } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      success: state.admin.skill.success,
      isLoading: state.admin.skill.isLoading,
      aptitudeSkill: state.admin.skill.aptitudeSkill
    }),
    shallowEqual
  )

  const saveAptitudeSkill = (values) => {
    dispatch(editAptitudeSkill(params, values))
  }

  const goToShow = () => {
    history.push(routes.aptitudeSkillDisplay.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchAptitudeSkillExtraData(params))
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
      goToDisplay={ goToShow }
      title={
        _.isEmpty(params) ? intl.formatMessage({ id: "SKILL.NEW.TITLE" }) : intl.formatMessage({ id: "SKILL.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (<DynamicForm
        className="mt-5"
        initialValues={aptitudeSkill}
        onSubmit={saveAptitudeSkill}
      >
        <RenderFields fields={fields} show={true} />
        <button ref={saveRef} className="d-none" type="submit"></button>
      </DynamicForm>
      ) }
    </FormView>
  )
}

export default injectIntl(AptitudeSkillForm)
