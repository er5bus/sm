/* eslint-disable no-restricted-imports */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { useDispatch } from 'react-redux'
import { ImportModal } from '../../../../../../components/partials'
import { useServicesUIContext } from '../../context/ServicesUIContext'
import { fetchServices } from '../../store/actions'
import { ENDPOINTS } from '../../store/constants'

const ServiceImportDialog = ({ show, onHide }) => {
  // Services UI Context
  const serviceUIProps = useServicesUIContext()

  // Services Redux state
  const dispatch = useDispatch()

  const onImportServiceFinish = () => {
    dispatch(fetchServices(serviceUIProps.queryParams))
    serviceUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id='SERVICE.IMPORT.TITLE' />}
      onHide={onHide}
      onImportFinish={onImportServiceFinish}
      url={ENDPOINTS.IMPORT_SERVICE}
    />
  )
}

export default ServiceImportDialog
