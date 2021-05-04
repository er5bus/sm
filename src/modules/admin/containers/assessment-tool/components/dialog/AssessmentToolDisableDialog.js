/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { useAssessmentToolsUIContext } from "../../context/AssessmentToolsUIContext"
import {disableAssessmentTool, fetchAssessmentTools} from "../../store/actions"

const AssessmentToolDisableDialog = ({ params, show, onHide }) => {
  // AssessmentTools UI Context
  const assessmentToolUIProps = useAssessmentToolsUIContext()

  // AssessmentTools Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.assessmentTool.isLoading, success: state.admin.assessmentTool.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isDeactivated && show) {
      onHide()
      dispatch(fetchAssessmentTools(assessmentToolUIProps.queryParams))
      assessmentToolUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show])

  const onDisableAssessmentTool = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disableAssessmentTool(params))
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      {isLoading && <ModalProgressBar variant="query" />}
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <FormattedMessage id="ASSESSMENT_TOOL.DISABLE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="ASSESSMENT_TOOL.DISABLE.MSG" />
      </Modal.Body>
      <Modal.Footer>
        <div>
          <button
            type="button"
            onClick={onHide}
            className="btn btn-sm btn-light btn-elevate"
          >
            <FormattedMessage id="GENERAL.CANCEL" />
          </button>
          <> </>
          <button
            type="button"
            disabled={isLoading}
            onClick={onDisableAssessmentTool}
            className="btn btn-sm btn-danger btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.DISABLE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default AssessmentToolDisableDialog
