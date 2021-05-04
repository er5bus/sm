/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../components/partials/controls"
import { useAssessmentToolsUIContext } from "../../context/AssessmentToolsUIContext"
import { fetchAssessmentTools} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const AssessmentToolDisableDialog = ({ show, onHide }) => {
  // AssessmentTools UI Context
  const assessmentToolUIProps = useAssessmentToolsUIContext()

  // AssessmentTools Redux state
  const dispatch = useDispatch()

  const onImportAssessmentToolFinish = () => {
    dispatch(fetchAssessmentTools(assessmentToolUIProps.queryParams))
    assessmentToolUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="ASSESSMENT_TOOL.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportAssessmentToolFinish}
      url={ENDPOINTS.IMPORT_ASSESSMENT_TOOLS}
    />
  )
}


export default AssessmentToolDisableDialog
