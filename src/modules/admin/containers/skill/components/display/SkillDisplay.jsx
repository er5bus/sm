import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"

import {
  DisplayItems,
  LanguageTab,
  RenderItems,
  ShowView,
} from "./../../../../../../components/partials/controls"

import { skillFields, skillFieldsFr, skillFieldsAr } from "./fields/skillFields"
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import { fetchSkillExtraData } from "../../store/actions";

import formRoutes from "./../../routes/forms"

const SkillTemplate = ({ goBackToList, history, params, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, skill, error } = useSelector(
    (state) => ({
      error: state.admin.skill.error,
      isFetching: state.admin.skill.isFetching,
      skill: state.admin.skill.skill
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(skill) || skill.id !== params.param) {
      dispatch(fetchSkillExtraData(params))
    }

    // eslint-disable-next-line
  }, [])

  const goToEdit = () => {
    history.push(formRoutes.skillForm.path.replace(":param", params.param))
  }

  const fields = skillFields({ intl })
  const fieldsFr = skillFieldsFr({ intl })
  const fieldsAr = skillFieldsAr({ intl })

  return (
    <ShowView
      title={ intl.formatMessage({ id: "MENU.SKILL" }) }
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        { ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={skill}
          >
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
            <RenderItems fields={fields} />
          </DisplayItems>)}
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(SkillTemplate)
