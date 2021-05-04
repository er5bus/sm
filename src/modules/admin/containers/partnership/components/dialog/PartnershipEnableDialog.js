/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { usePartnershipsUIContext } from "../../context/PartnershipsUIContext"
import {enablePartnership, fetchPartnerships} from "../../store/actions"

const PartnershipEnableDialog = ({ params, show, onHide }) => {
  // Partnerships UI Context
  const partnershipsUIProps = usePartnershipsUIContext()
  
  // Partnerships Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.partnership.isLoading, success: state.admin.partnership.success }),
    shallowEqual
  )

  const onEnablepartnership = () => {
    // server request for deleting Partnerships by id
    dispatch(enablePartnership(params))
  }

  const onRefresh = () => {
    dispatch(fetchPartnerships(partnershipsUIProps.queryParams))
    partnershipsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onEnablepartnership}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="PARTNERSHIP.ENABLE.TITLE" />}
      body={<FormattedMessage id="PARTNERSHIP.ENABLE.MSG" />}
    />
  )
}


export default PartnershipEnableDialog
