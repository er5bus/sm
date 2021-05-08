/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../helpers"
import {ProtectedLink} from "../../../../../../components/wrappers"

const ActionsColumnFormatter = ( cellContent, row, rowIndex, formatExtraData ) => {

  return (
    <div className="text-right">
      {row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-edit-tooltip">
              <FormattedMessage id="FOLDER_GROUP.EDIT" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.editFolderGroupRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openEditFolderGroupPage(row.id)}
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

      {row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-show-tooltip">
              <FormattedMessage id="FOLDER_GROUP.SHOW" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.showFolderGroupRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openShowFolderGroupPage(row.id)}
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


      {/*row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="FOLDER_GROUP.APPOINTMENT" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.newFolderGroupAppointmentRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-info btn-sm my-1 mx-1"
              onClick={() => formatExtraData.newFolderGroupAppointmentButtonClick(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-info">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Clipboard.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )*/}

      {row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="FOLDER_GROUP.DISABLE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.disableFolderGroupRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openDisableFolderGroupDialog(row.id)}
            >
              <span className="svg-icon svg-icon-md svg-icon-danger">
                <SVG src={toAbsoluteUrl("/media/svg/icons/General/Lock.svg")} />
              </span>
            </a>
          </ProtectedLink>
        </OverlayTrigger>
      )}
      {!row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-enable-tooltip">
              <FormattedMessage id="FOLDER_GROUP.ENABLE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.enableFolderGroupRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openEnableFolderGroupDialog(row.id)}
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
