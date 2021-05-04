/* eslint-disable no-restricted-imports */
import React, { useEffect, useMemo } from "react"
import { Modal } from "react-bootstrap"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ModalProgressBar } from "../../../../../../components/partials/controls"
import { activateService, fetchServices } from "../../store/actions"
import { useServicesUIContext } from "../../context/ServicesUIContext"

const ServiceActivateDialog = ({ params, show, onHide }) => {
  // Services UI Context
  const servicesUIContext = useServicesUIContext()
  const servicesUIProps = useMemo(() => {
    return {
      setIds: servicesUIContext.setIds,
      queryParams: servicesUIContext.queryParams,
    }
  }, [servicesUIContext])

  // Services Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.service.isLoading, success: state.admin.service.success }),
    shallowEqual
  )

  // if !id we should close modal
  useEffect(() => {
    if (success.isActivated && show) {
      onHide()
      dispatch(fetchServices(servicesUIProps.queryParams))
      servicesUIProps.setIds([])
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [success, show, servicesUIProps])

  const onActivateService = () => {
    // server request for deleting service by id
    dispatch(activateService(params))
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
          <FormattedMessage id="SERVICE.ACTIVATE.TITLE" />
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <FormattedMessage id="SERVICE.ACTIVATE.MSG" />
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
            onClick={onActivateService}
            className="btn btn-sm btn-success btn-elevate"
          >
            {isLoading && <span className="px-5 spinner spinner-white"></span>}
            <FormattedMessage id="GENERAL.ACTIVATE" />
          </button>
        </div>
      </Modal.Footer>
    </Modal>
  )
}


export default ServiceActivateDialog
