/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../../../helpers"
import { ProtectedLink } from "../../../../../../../../../components/wrappers"
import {FOLDER_ORIENTED} from "../../../../../../../UIHelpers"

const ActionsColumnFormatter = (cellContent, row, rowIndex, formatExtraData) => {

  return (
    <div className="text-right">
      { !row.isImmutable && row.isActive && formatExtraData.folder && formatExtraData.folder.status !== FOLDER_ORIENTED && <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-edit-tooltip"><FormattedMessage id="ORIENTATION.VALIDATION" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.closeOrientationRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openCloseOrientationDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-success">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/General/Shield-check.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
      }
      { !row.isImmutable && row.isActive && <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-edit-tooltip"><FormattedMessage id="ORIENTATION.EDIT" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.editOrientationRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditOrientationPage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-warning">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
      }
      {(
        <OverlayTrigger
          overlay={<Tooltip id="smsTemplate-show-tooltip"><FormattedMessage id="ORIENTATION.SHOW" /></Tooltip>}
        >
          <ProtectedLink rule={formatExtraData.showOrientationRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openShowOrientationPage(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      { !row.isImmutable && row.isActive && <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-disable-tooltip"><FormattedMessage id="ORIENTATION.DELETE" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.deleteOrientationRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDeleteOrientationDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-danger">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Trash.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
      }
    </div>
  )
}


export default ActionsColumnFormatter
