/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import {ImportModal} from "../../../../../../components/partials"
import { useSkillsUIContext } from "../../context/SkillsUIContext"
import { fetchSkills} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const SkillDisableDialog = ({ show, onHide }) => {
  // Skills UI Context
  const skillUIProps = useSkillsUIContext()
  
  // Skills Redux state
  const dispatch = useDispatch()

  const onImportSkillFinish = () => {
    dispatch(fetchSkills(skillUIProps.queryParams))
    skillUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="SKILL.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportSkillFinish}
      url={ENDPOINTS.IMPORT_SKILLS}
    />
  )
}


export default SkillDisableDialog
