/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../components/partials/controls"
import { useAssessmentLevelsUIContext } from "../../context/AssessmentLevelsUIContext"
import { fetchAssessmentLevels} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const AssessmentLevelImportDialog = ({ show, onHide }) => {
  // AssessmentLevels UI Context
  const assessmentLevelUIProps = useAssessmentLevelsUIContext()
  
  // AssessmentLevels Redux state
  const dispatch = useDispatch()

  const onImportAssessmentLevelFinish = () => {
    dispatch(fetchAssessmentLevels(assessmentLevelUIProps.queryParams))
    assessmentLevelUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="ASSESSMENT_LEVEL.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportAssessmentLevelFinish}
      url={ENDPOINTS.IMPORT_ASSESSMENT_LEVEL}
    />
  )
}


export default AssessmentLevelImportDialog
