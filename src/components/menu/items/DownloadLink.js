import React from "react"
import CircularProgress from '@material-ui/core/CircularProgress'
import useDownloader from "../../../../../hooks/useDownloader"


const DownloadLink = ({ fileUrl, filename, label, icon }) => {

  const Icon = icon

  const [ isDownloading, downloadTrigger ] = useDownloader({
    endpoint: fileUrl,
    filename
  })

  return (
    <div className="navi-item mb-2">
      <div disabled={isDownloading} onClick={downloadTrigger} className="navi-link py-4">
        {isDownloading ? <CircularProgress size={20} thickness={5} className="mr-4" disableShrink color="secondary" /> :
        <span className="navi-icon mr-2">
          <span className="svg-icon">
            <Icon />
          </span>
        </span>
        }
        <span className="navi-text font-size-lg">{ label }</span>
      </div>
    </div>
  )
}


export default DownloadLink
