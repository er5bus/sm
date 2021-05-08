import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../../helpers"
import { useOrientationsUIContext } from "../../context/OrientationsUIContext"
import { ENDPOINTS } from "../../store/constants"
import useDownloader from "../../../../../../../../hooks/useDownloader"
import {DataTableGrouping} from "../../../../../../../../components/partials"


const OrientationsOrientationing = () => {
  // Orientations UI Context
  const orientationsUIProps = useOrientationsUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_ORIENTATION,
    params: { ids: orientationsUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ orientationsUIProps.ids.length }>
      <button
        type="button"
        disabled={isDownloding}
        className="btn btn-sm btn-primary font-weight-bolder font-size-sm mx-2"
        onClick={ downloadTrigger }
      >
        <span className="svg-icon svg-icon-md svg-icon-light">
          <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Export.svg")} />
        </span>
        <FormattedMessage id="GENERAL.EXPORT" />
      </button>
    </DataTableGrouping>
  )
}


export default OrientationsOrientationing
