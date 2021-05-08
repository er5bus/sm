/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { usePartnershipsUIContext } from "../../context/PartnershipsUIContext"
import {enablePartnerships, fetchPartnerships} from "../../store/actions"


const PartnershipsDisableDialog = ({ show, onHide }) => {
  // Partnerships UI Context
  const partnershipsUIProps = usePartnershipsUIContext()
  
  // Partnerships Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.partnership.isLoading, success: state.admin.partnership.success }),
    shallowEqual
  )

  const onDisablePartnerships = () => {
    // server request for deleting smsSkeleton by seleted ids
    dispatch(enablePartnerships(partnershipsUIProps.ids))
  }

  const onRefresh = () => {
    partnershipsUIProps.setIds([])
    dispatch(fetchPartnerships(partnershipsUIProps.queryParams))

  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDisablePartnerships}
      isLoading={isLoading}
      success={success.isActivated}
      title={<FormattedMessage id="PARTNERSHIP.MULTIPLE_ENABLE.TITLE" />}
      body={<FormattedMessage id="PARTNERSHIP.MULTIPLE_ENABLE.MSG" />}
    />
  )
}


export default PartnershipsDisableDialog
