/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteAssociateService, fetchAssociateServices } from "../../store/actions"
import { useAssociateServicesUIContext } from "../../context/AssociateServicesUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const AssociateServiceDeleteDialog = ({ params, show, onHide }) => {
  // AssociateServices UI Context
  const associateServicesUIProps = useAssociateServicesUIContext()

  // AssociateServices Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.associateService.isLoading, success: state.admin.associateService.success }),
    shallowEqual
  )

  const onDeleteAssociateService = () => {
    // server request for deleting associateService by id
    dispatch(deleteAssociateService(params))
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
      onClick={onDeleteAssociateService}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="ASSOCIATE_SERVICE.DELETE.TITLE" />}
      body={<FormattedMessage id="ASSOCIATE_SERVICE.DELETE.MSG" />}
    />
  )
}


export default AssociateServiceDeleteDialog
