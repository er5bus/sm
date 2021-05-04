import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useFoldersUIContext } from "../../context/FoldersUIContext"
import { ENDPOINTS } from "./../../store/constants"
import {DataTableGrouping} from "../../../../../../components/partials"
import useDownloader from "../../../../../../hooks/useDownloader"

const FoldersGrouping = () => {
  // Folders UI Context
  const foldersUIProps = useFoldersUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_FOLDERS,
    params: { ids: foldersUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ foldersUIProps.ids.length }>
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


export default FoldersGrouping
