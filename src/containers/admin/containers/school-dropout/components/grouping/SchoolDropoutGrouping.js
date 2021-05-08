import React from "react"
import useDownloader from "../../../../../../hooks/useDownloader"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../helpers"
import { useSchoolDropoutsUIContext } from "../../context/SchoolDropoutsUIContext"
import {DataTableGrouping} from "../../../../../../components/partials"
import { ENDPOINTS } from "../../store/constants"

const SchoolDropoutGrouping = () => {
  // SchoolDropoutGroups UI Context
  const schoolDropoutsUIProps = useSchoolDropoutsUIContext()

  const [ isDownloding, downloadTrigger ] = useDownloader({
    endpoint: ENDPOINTS.EXPORT_SCHOOL_DROPOUT, 
    params: { ids: schoolDropoutsUIProps.ids },
    filename: "export.xlsx"
  })

  return (
    <DataTableGrouping rows={ schoolDropoutsUIProps.ids.length }>
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


export default SchoolDropoutGrouping
