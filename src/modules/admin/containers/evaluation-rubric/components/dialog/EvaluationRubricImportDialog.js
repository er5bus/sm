/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import { ImportModal } from "../../../../../../components/partials/controls"
import { useEvaluationRubricsUIContext } from "../../context/EvaluationRubricsUIContext"
import { fetchEvaluationRubrics} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"


const EvaluationRubricImportDialog = ({ show, onHide }) => {
  // EvaluationRubrics UI Context
  const evaluationRubricUIProps = useEvaluationRubricsUIContext()
  
  // EvaluationRubrics Redux state
  const dispatch = useDispatch()

  const onImportEvaluationRubricFinish = () => {
    dispatch(fetchEvaluationRubrics(evaluationRubricUIProps.queryParams))
    evaluationRubricUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="EVALUATION_RUBRIC.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportEvaluationRubricFinish}
      url={ENDPOINTS.IMPORT_EVALUATION_RUBRIC}
    />
  )
}


export default EvaluationRubricImportDialog
