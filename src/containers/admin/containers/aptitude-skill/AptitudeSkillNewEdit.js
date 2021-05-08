/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useCallback } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView } from "../../../../components/partials/controls"
import _ from "lodash"

import AptitudeSkillForm from "./components/form/AptitudeSkillForm"

import { createAptitudeSkill, clearStore, editAptitudeSkill, fetchAptitudeSkill } from "./store/actions"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const AptitudeSkill = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const [title, setTitle] = useState("")
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, aptitudeSkillForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.aptitudeSkill.isLoading,
      aptitudeSkillForEdit: state.admin.aptitudeSkill.aptitudeSkill,
      success: state.admin.aptitudeSkill.success,
      error: state.admin.aptitudeSkill.error
    }),
    shallowEqual
  )

  const saveAptitudeSkill = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createAptitudeSkill(values))
    } else {
      dispatch(editAptitudeSkill(params, values))
    }
  }

  const goBackToAptitudeSkillsList = useCallback(() => {
    history.push(routes.aptitudeSkillList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAptitudeSkill(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    let _title = !_.isEmpty(params) 
      ? intl.formatMessage({ id: "APTITUDE_SKILL.EDIT.TITLE" }) 
      : intl.formatMessage({ id: "APTITUDE_SKILL.NEW.TITLE" })
    setTitle(_title)
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aptitudeSkillForEdit, params])

  return (
    <FormView
      goBackTo={goBackToAptitudeSkillsList}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "APTITUDE_SKILL.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "APTITUDE_SKILL.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<AptitudeSkillForm
        isLoading={isLoading}
        success={success.isCreated}
        aptitudeSkill={ !_.isEmpty(params) && aptitudeSkillForEdit}
        onSubmit={saveAptitudeSkill}
        saveRef={saveRef}
      />)
      }
    </FormView>
  )
}


export default injectIntl(AptitudeSkill)
