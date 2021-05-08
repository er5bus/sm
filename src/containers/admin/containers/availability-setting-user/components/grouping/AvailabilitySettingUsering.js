import React from "react"
import { FormattedMessage } from "react-intl"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "./../../../../../../helpers"
import { useAvailabilitySettingUsersUIContext } from "../../context/AvailabilitySettingUsersUIContext"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {DataTableGrouping} from "../../../../../../components/partials"

const AvailabilitySettingUsering = () => {
  // AvailabilitySettingUsers UI Context
  const availabilitySettingUsersUIProps = useAvailabilitySettingUsersUIContext()

  return (
    <DataTableGrouping rows={ availabilitySettingUsersUIProps.ids.length }>
      <ProtectedLink rule={availabilitySettingUsersUIProps.deleteAvailabilitySettingUsersRule}>
        <button
          type="button"
          className="btn btn-sm btn-danger font-weight-bolder font-size-sm mx-2"
          onClick={availabilitySettingUsersUIProps.openDeleteAvailabilitySettingUsersDialog}
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


export default AvailabilitySettingUsering
