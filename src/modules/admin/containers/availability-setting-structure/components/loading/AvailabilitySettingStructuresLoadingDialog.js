import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import {shallowEqual, useSelector} from "react-redux"
import {LoadingDialog} from "./../../../../../../components/partials/controls"

const AvailabilitySettingStructuresLoadingDialog = ({ intl }) => {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.admin.availabilitySettingStructure.isFetching }),
    shallowEqual
  )
  useEffect(() => {}, [isLoading])
  return <LoadingDialog isLoading={isLoading} text={ intl.formatMessage({ id: "GENERAL.LOADING"}) } />
}


export default injectIntl(AvailabilitySettingStructuresLoadingDialog)
