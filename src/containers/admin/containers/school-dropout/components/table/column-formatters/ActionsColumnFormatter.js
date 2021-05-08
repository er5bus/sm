/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../helpers"
import { ProtectedLink } from "../../../../../../../components/wrappers"
import {SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_CLOSED, SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED} from "../../../../../UIHelpers"

const ActionsColumnFormatter = (cellContent, row, rowIndex, formatExtraData) => {

  return (
      <div className="text-right">
      {!row.isTransformed && row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-edit-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.EDIT" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.editSchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openEditSchoolDropoutPage(row.id)}
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
      {(row.isActive || row.isTransformed) && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-show-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.SHOW" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.showSchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openShowSchoolDropoutPage(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/General/Visible.svg")}
                />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {row.isTransformed && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-show-tooltip">
              <FormattedMessage id="FOLDER.SHOW" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.showFolderRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-info btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openShowFolderPage(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-info">
                <SVG
                  src={toAbsoluteUrl("/media/svg/icons/General/Folder.svg")}
                />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {!row.isTransformed && row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.DISABLE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.deactivateSchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openDeactivateSchoolDropoutDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-danger">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {!row.isTransformed && row.trackingStatus !== SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_QUALIFIED && row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.QUALIFY" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.qualifySchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-info btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openQualifySchoolDropoutDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-info">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Hummer.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {!row.isTransformed && row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.TRANSAFER" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.transferSchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openTransferSchoolDropoutDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-primary">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Forward.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {!row.isTransformed && row.trackingStatus !== SCHOOL_DROPOUT_TRACKING_STATUS_TRACKING_CLOSED && row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.CLOSE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.closeSchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openCloseSchoolDropoutDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-warning">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Lock-overturning.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {!row.isTransformed && !row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-enable-tooltip">
              <FormattedMessage id="SCHOOL_DROPOUT.ENABLE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.activateSchoolDropoutRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openActivateSchoolDropoutDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-success">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Unlock.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
    </div>
  )
}


export default ActionsColumnFormatter
