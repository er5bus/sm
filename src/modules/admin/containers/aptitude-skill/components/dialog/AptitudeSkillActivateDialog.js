/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { activateAptitudeSkill, fetchAptitudeSkills } from "../../store/actions"
import { useAptitudeSkillsUIContext } from "../../context/AptitudeSkillsUIContext"

const AptitudeSkillActivateDialog = ({ params, show, onHide }) => {
  // AptitudeSkills UI Context
  const aptitudeSkillsUIProps = useAptitudeSkillsUIContext()
  
  // AptitudeSkills Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.aptitudeSkill.isLoading, success: state.admin.aptitudeSkill.success }),
    shallowEqual
  )

  const onActivateAptitudeSkill = () => {
    // server request for deleting aptitudeSkill by id
    dispatch(activateAptitudeSkill(params))
  }

  const onRefresh = () => {
    dispatch(fetchAptitudeSkills(aptitudeSkillsUIProps.queryParams))
    aptitudeSkillsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onActivateAptitudeSkill}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="APTITUDE_SKILL.DELETE.TITLE" />}
      body={<FormattedMessage id="APTITUDE_SKILL.DELETE.MSG" />}
    />
  )
}


export default AptitudeSkillActivateDialog
