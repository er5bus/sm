/* eslint-disable no-restricted-imports */
import React from 'react'
import { FormattedMessage } from 'react-intl'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { finishAssociateService, fetchAssociateServices } from '../../store/actions'
import { useAssociateServicesUIContext } from '../../context/AssociateServicesUIContext'
import { ActionModal } from '../../../../../../../../components/partials'

const AssociateServiceCloseDialog = ({ params, show, onHide }) => {
  // AssociateServices UI Context
  const associateServicesUIProps = useAssociateServicesUIContext()

  // AssociateServices Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.associateService.isLoading, success: state.admin.associateService.success }),
    shallowEqual
  )

  const onCloseAssociateService = () => {
    // server request for deleting associateService by id
    dispatch(finishAssociateService(params))
  }

  const onRefresh = () => {
    dispatch(fetchAssociateServices(params))
    associateServicesUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onCloseAssociateService}
      isLoading={isLoading}
      success={success.isStatusChanged}
      title={<FormattedMessage id='ASSOCIATE_SERVICE.FINISH.TITLE' />}
      body={<FormattedMessage id='ASSOCIATE_SERVICE.FINISH.MSG' />}
    />
  )
}

export default AssociateServiceCloseDialog
