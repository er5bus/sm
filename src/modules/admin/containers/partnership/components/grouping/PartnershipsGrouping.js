import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { usePartnershipsUIContext } from "../../context/PartnershipsUIContext"
import { ENDPOINTS } from "./../../store/constants"
import useDownloader from "../../../../../../hooks/useDownloader"
import {DataTableGrouping} from "../../../../../../components/partials"

const PartnershipsGrouping = () => {
  // Partnerships UI Context
  const partnershipsUIProps = usePartnershipsUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_PARTNERSHIPS,
    params: { ids: partnershipsUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ partnershipsUIProps.ids.length }>
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


export default PartnershipsGrouping
