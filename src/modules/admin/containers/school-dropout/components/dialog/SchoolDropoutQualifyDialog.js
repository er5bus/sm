/* eslint-disable no-restricted-imports */
import React, {useEffect} from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { qualifySchoolDropout, fetchSchoolDropouts, fetchSchoolDropout } from "../../store/actions"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import {FormModal} from "../../../../../../components/partials"
import SchoolDropoutUpdatedStatusForm from "../form/SchoolDropoutUpdatedStatusForm"
import {SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED} from "../../../../UIHelpers"

const SchoolDropoutQualifyDialog = ({ params, show, onHide }) => {
  // SchoolDropouts UI Context
  const schoolDropoutsUIProps = useSchoolDropoutsUIContext()

  // SchoolDropouts Redux state
  const dispatch = useDispatch()
  const { error, schoolDropout, isLoading, success } = useSelector(
    (state) => ({ 
      isLoading: state.admin.schoolDropout.isLoading, 
      success: state.admin.schoolDropout.success,
      schoolDropout: state.admin.schoolDropout.schoolDropout,
      error: state.admin.schoolDropout.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (params && show){
      dispatch(fetchSchoolDropout(params))
    }
    // eslint-disable-next-line
  }, [params])

  const onQualifySchoolDropout = (values) => {
    const { observationAr, observationFr } = values
    dispatch(qualifySchoolDropout(params, { trackingStatus: SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED, observationAr, observationFr }))
  }

  const onRefresh = () => {
    dispatch(fetchSchoolDropouts(schoolDropoutsUIProps.queryParams))
    schoolDropoutsUIProps.setIds([])
    onHide()
  }

  return (
    <FormModal
      title={<FormattedMessage id="SCHOOL_DROPOUT.QUALIFY.TITLE" />}
      show={show}
      success={ success.isQualified }
      error={error}
      onHide={onRefresh}
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <SchoolDropoutUpdatedStatusForm params={params} onSubmit={onQualifySchoolDropout} saveRef={saveRef} schoolDropout={schoolDropout} />
      ) }
    </FormModal>
  )
}


export default SchoolDropoutQualifyDialog
