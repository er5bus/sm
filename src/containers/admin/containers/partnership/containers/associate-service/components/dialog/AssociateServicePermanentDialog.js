/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { permanentAssociateService, fetchAssociateServices } from "../../store/actions"
import { useAssociateServicesUIContext } from "../../context/AssociateServicesUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const AssociateServiceCloseDialog = ({ params, show, onHide }) => {
  // AssociateServices UI Context
  const associateServicesUIProps = useAssociateServicesUIContext()
  
  // AssociateServices Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.associateService.isLoading, success: state.admin.associateService.success }),
    shallowEqual
  )

  const onUpdateAssociateServiceStatus = () => {
    // server request for deleting associateService by id
    dispatch(permanentAssociateService(params))
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
      onClick={onUpdateAssociateServiceStatus}
      isLoading={isLoading}
      success={success.isStatusChanged}
      title={<FormattedMessage id='ASSOCIATE_SERVICE.PERMANENT.TITLE' />}
      body={<FormattedMessage id='ASSOCIATE_SERVICE.PERMANENT.MSG' />}
    />
  )
}


export default AssociateServiceCloseDialog
