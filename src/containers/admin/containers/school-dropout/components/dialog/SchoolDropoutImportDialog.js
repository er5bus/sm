/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useDispatch } from "react-redux"
import {ImportModal} from "../../../../../../components/partials"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import { fetchSchoolDropouts} from "../../store/actions"
import { ENDPOINTS } from "../../store/constants"

const SchoolDropoutImportDialog = ({ show, onHide }) => {
  // SchoolDropouts UI Context
  const schoolDropoutUIProps = useSchoolDropoutsUIContext()

  // SchoolDropouts Redux state
  const dispatch = useDispatch()

  const onImportSchoolDropoutFinish = () => {
    dispatch(fetchSchoolDropouts(schoolDropoutUIProps.queryParams))
    schoolDropoutUIProps.setIds([])
  }

  return (
    <ImportModal
      show={show}
      title={<FormattedMessage id="SCHOOL_DROPOUT.IMPORT.TITLE" />}
      onHide={onHide}
      onImportFinish={onImportSchoolDropoutFinish}
      url={ENDPOINTS.IMPORT_SCHOOL_DROPOUT}
    />
  )
}


export default SchoolDropoutImportDialog
