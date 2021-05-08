/* eslint-disable no-restricted-imports */
import React, {useState} from "react"
import { useIntl } from "react-intl"
import {FormModal} from "../../../../../../components/partials"
import useDownloader from "../../../../../../hooks/useDownloader"
import {DOWNLOAD_SCHEDULE} from "../../store/constants/endpoints"
import DownloadScheduleForm from "../form/DownloadScheduleForm"


const DownloadScheduleDialog = ({ show, onHide }) => {

  const intl = useIntl()
  const [params, setParams] = useState()
  const [ isDownloading, downloadTrigger ] = useDownloader({
    endpoint: DOWNLOAD_SCHEDULE,
    params,
    filename: `week-schedule.pdf`
  })

  const onSubmit = (values) => {
    setParams({ ...values.week })
    downloadTrigger()
  }

  return (
    <FormModal
      title={intl.formatMessage({ id: "FOLDER.APPOINTMENT.DOWNLOAD" })}
      btnText="GENERAL.DOWNLOAD"
      show={show}
      onHide={onHide}
      isLoading={isDownloading}
    >
      { ({ saveRef }) => (
        <DownloadScheduleForm onSubmit={onSubmit} saveRef={saveRef} />
      ) }
    </FormModal>
  )
}


export default DownloadScheduleDialog
