/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../helpers"
import { ProtectedLink } from "../../../../../../../components/wrappers"

const ActionsColumnFormatter = (cellContent, row, rowIndex, formatExtraData) => {

  return (
    <div className="text-right">
      {!row.isExpired && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-edit-tooltip">
              <FormattedMessage id="PERIOD_UNAVAILABILITY.EDIT" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.editPeriodUnavailabilityRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openEditPeriodUnavailabilityPage(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-warning">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
                />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}

      <OverlayTrigger
        overlay={
          <Tooltip id="partnership-show-tooltip">
            <FormattedMessage id="PERIOD_UNAVAILABILITY.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showPeriodUnavailabilityRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowPeriodUnavailabilityPage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-primary">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>

      {!row.isExpired && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="PERIOD_UNAVAILABILITY.DELETE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.deletePeriodUnavailabilityRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openDeletePeriodUnavailabilityDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-danger">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
    </div>
  )
}


export default ActionsColumnFormatter
