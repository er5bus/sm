/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { useAssociateServicesUIContext } from "../../context/AssociateServicesUIContext"
import {fetchAssociateServices, deleteAssociateServices} from "../../store/actions"


const AssociateServicesDeleteDialog = ({ show, onHide }) => {
  // AssociateServices UI Context
  const associateServicesUIProps = useAssociateServicesUIContext()
  
  // AssociateServices Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.associateService.isLoading, success: state.admin.associateService.success }),
    shallowEqual
  )

  const onDeleteAssociateServices = () => {
    // server request for deleting associateService by seleted ids
    dispatch(deleteAssociateServices(associateServicesUIProps.ids))
  }

  const onRefresh = () => {
    associateServicesUIProps.setIds([])
    dispatch(fetchAssociateServices(associateServicesUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteAssociateServices}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id='ASSOCIATE_SERVICE.MULTIPLE_DELETE.TITLE' />}
      body={<FormattedMessage id='ASSOCIATE_SERVICE.MULTIPLE_DELETE.MSG' />}
    />
  )
}


export default AssociateServicesDeleteDialog
