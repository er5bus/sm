/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { closeSchoolDropout, fetchSchoolDropouts } from "../../store/actions"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import {ActionModal} from "../../../../../../components/partials"

const SchoolDropoutCloseDialog = ({ params, show, onHide }) => {
  // SchoolDropouts UI Context
  const schoolDropoutsUIProps = useSchoolDropoutsUIContext()

  // SchoolDropouts Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.schoolDropout.isLoading, success: state.admin.schoolDropout.success }),
    shallowEqual
  )

  const onCloseSchoolDropout = () => {
    // server request for deleting schoolDropout by id
    dispatch(closeSchoolDropout(params))
  }

  const onRefresh = () => {
    dispatch(fetchSchoolDropouts(schoolDropoutsUIProps.queryParams))
    schoolDropoutsUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onCloseSchoolDropout}
      isLoading={isLoading}
      success={success.isClosed}
      title={<FormattedMessage id="SCHOOL_DROPOUT.CLOSE.TITLE" />}
      body={<FormattedMessage id="SCHOOL_DROPOUT.CLOSE.MSG" />}
    />
  )
}


export default SchoolDropoutCloseDialog
