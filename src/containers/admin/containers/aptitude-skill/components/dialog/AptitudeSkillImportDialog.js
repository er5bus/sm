/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../components/partials/controls"
import { useAptitudeSkillsUIContext } from "../../context/AptitudeSkillsUIContext"
import { fetchAptitudeSkills} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const AptitudeSkillImportDialog = ({ show, onHide }) => {
  // AptitudeSkills UI Context
  const aptitudeSkillUIProps = useAptitudeSkillsUIContext()
  
  // AptitudeSkills Redux state
  const dispatch = useDispatch()

  const onImportAptitudeSkillFinish = () => {
    dispatch(fetchAptitudeSkills(aptitudeSkillUIProps.queryParams))
    aptitudeSkillUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="APTITUDE_SKILL.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportAptitudeSkillFinish}
      url={ENDPOINTS.IMPORT_APTITUDE_SKILL}
    />
  )
}


export default AptitudeSkillImportDialog
