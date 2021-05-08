import React from "react"
import { injectIntl } from "react-intl"
import {shallowEqual, useSelector} from "react-redux"
import {LoadingDialog} from "./../../../../../../components/partials/controls"

const FoldersLoadingDialog = ({ intl }) => {
  const { isLoading } = useSelector(
    state => ({ isLoading: state.admin.folder.isFetching }),
    shallowEqual
  )
  return isLoading && <LoadingDialog isLoading={true} text={ intl.formatMessage({ id: "GENERAL.LOADING"}) } />
}


export default injectIntl(FoldersLoadingDialog)
