/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { useAssessmentToolsUIContext } from "../../context/AssessmentToolsUIContext"
import { fetchAssessmentTools} from "../../store/actions"
import AssessmentToolDialogForm from "../form/AssessmentToolDialogForm"


const AssessmentToolNewDialog = ({ show, onHide, params }) => {
  // AssessmentTools UI Context
  const assessmentToolUIProps =  useAssessmentToolsUIContext()

  // AssessmentTools Redux state
  const dispatch = useDispatch()

  const onCreateAssessmentToolFinish = () => {
    dispatch(fetchAssessmentTools(assessmentToolUIProps.queryParams))
    assessmentToolUIProps.setIds([])
  }

  return (
    <AssessmentToolDialogForm
      show={show}
      params={params}
      title={<FormattedMessage id="ASSESSMENT_TOOL.NEW.TITLE" />}
      onHide={onHide}
      onSuccess={onCreateAssessmentToolFinish}
    />
  )
}


export default AssessmentToolNewDialog
