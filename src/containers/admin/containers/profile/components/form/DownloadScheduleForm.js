import React from "react"
import { useIntl } from "react-intl"
import {DynamicForm} from "../../../../../../components/partials"
import {downloadScheduleFields} from "./fields/downloadScheduleFields"


const DownloadScheduleForm = ({ saveRef, onSubmit }) => {

  const intl = useIntl()

  const fields = downloadScheduleFields({ intl })

  return (
    <DynamicForm
      fields={fields}
      saveRef={saveRef}
      onSubmit={onSubmit}
    />
  )
}


export default DownloadScheduleForm
