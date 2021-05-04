import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useAvailabilitySettingStructuresUIContext } from "../../context/AvailabilitySettingStructuresUIContext"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {DataTableGrouping} from "../../../../../../components/partials"

const AvailabilitySettingStructureing = () => {
  // AvailabilitySettingStructures UI Context
  const availabilitySettingStructuresUIProps = useAvailabilitySettingStructuresUIContext()

  return (
    <DataTableGrouping rows={ availabilitySettingStructuresUIProps.ids.length }>
      <ProtectedLink rule={availabilitySettingStructuresUIProps.deleteAvailabilitySettingStructuresRule}>
        <button
          type="button"
          className="btn btn-sm btn-danger font-weight-bolder font-size-sm mx-2"
          onClick={availabilitySettingStructuresUIProps.openDeleteAvailabilitySettingStructuresDialog}
        >
          <span className="svg-icon svg-icon-md svg-icon-light">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
          </span>
          <FormattedMessage id="GENERAL.DELETE" />
        </button>
      </ProtectedLink>
    </DataTableGrouping>
  )
}


export default AvailabilitySettingStructureing
