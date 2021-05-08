/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { FormModal } from "../../../../../../components/partials/controls"
import { createAptitudeSkill, clearStore, fetchAptitudeSkills, editAptitudeSkill, fetchAptitudeSkill } from "../../store/actions"
import AptitudeSkillForm from "../form/AptitudeSkillForm"
import {useAptitudeSkillsUIContext} from "../../context/AptitudeSkillsUIContext"

const AptitudeSkillDisplayDialog = ({ params, show, onHide, intl }) => {
  // AptitudeSkills UI Context
  const aptitudeSkillsUIProps = useAptitudeSkillsUIContext()

  const dispatch = useDispatch()
  const { isLoading, aptitudeSkillForEdit, success } = useSelector(
    (state) => ({
      isLoading: state.admin.aptitudeSkill.isLoading,
      success: state.admin.aptitudeSkill.success,
      aptitudeSkillForEdit: state.admin.aptitudeSkill.aptitudeSkill,
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

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAptitudeSkill(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  const onSuccess = () => {
    dispatch(fetchAptitudeSkills(aptitudeSkillsUIProps.queryParams))
    aptitudeSkillsUIProps.setIds([])
  }

  return (
    <FormModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "APTITUDE_SKILL.EDIT.TITLE" })
        : intl.formatMessage({ id: "APTITUDE_SKILL.NEW.TITLE" })}
      show={show}
      isLoading={isLoading}
      onHide={onHide}
      onSuccess={onSuccess}
      success={success.isCreated || success.isUpdated}
    >
      { ({ saveRef }) => (<AptitudeSkillForm
        isLoading={isLoading}
        success={success.isCreated}
        aptitudeSkill={ !_.isEmpty(params) && aptitudeSkillForEdit}
        onSubmit={saveAptitudeSkill}
        saveRef={saveRef}
      />)
      }
    </FormModal>
  )
}


export default injectIntl(AptitudeSkillDisplayDialog)
