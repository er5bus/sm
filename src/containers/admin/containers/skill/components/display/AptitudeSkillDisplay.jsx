import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"

import {
} from "./../../../../../../components/partials/controls"

import {
  DisplayItems,
  RenderItems,
  ShowView,
} from "./../../../../../../components/partials/controls"

import { aptitudeSkillFields } from "./fields/aptitudeSkillFields"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchAptitudeSkillExtraData } from "../../store/actions";

import formRoutes from "./../../routes/forms"


const AptitudeSkillTemplate = ({ goBackToList, history, params, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, aptitudeSkill, error } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      isFetching: state.admin.skill.isFetching,
      aptitudeSkill: state.admin.skill.aptitudeSkill
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(aptitudeSkill) || aptitudeSkill.id !== params.param) {
      dispatch(fetchAptitudeSkillExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.aptitudeSkillForm.path.replace(":param", params.param))
  }

  const fields = aptitudeSkillFields({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.APTITUDE_SKILL" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <DisplayItems
        error={error}
        isFetching={isFetching}
        object={aptitudeSkill}
      >
        <RenderItems fields={fields} />
      </DisplayItems>
    </ShowView>
  )
}

export default injectIntl(AptitudeSkillTemplate)
