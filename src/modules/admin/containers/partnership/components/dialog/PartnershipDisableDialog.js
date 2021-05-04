/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ActionModal } from "../../../../../../components/partials/controls"
import { usePartnershipsUIContext } from "../../context/PartnershipsUIContext"
import { disablePartnership, fetchPartnerships } from "../../store/actions"

const PartnershipDisableDialog = ({ params, show, onHide }) => {
  // Partnerships UI Context
  const partnershipsUIProps = usePartnershipsUIContext()
  
  // Partnerships Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.partnership.isLoading, success: state.admin.partnership.success }),
    shallowEqual
  )

  const onDisablePartnership = () => {
    // server request for deleting smsSkeleton by id
    dispatch(disablePartnership(params))
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
      onClick={onDisablePartnership}
      isLoading={isLoading}
      success={success.isDeactivated}
      title={<FormattedMessage id="PARTNERSHIP.DISABLE.TITLE" />}
      body={<FormattedMessage id="PARTNERSHIP.DISABLE.MSG" />}
    />
  )
}


export default PartnershipDisableDialog
