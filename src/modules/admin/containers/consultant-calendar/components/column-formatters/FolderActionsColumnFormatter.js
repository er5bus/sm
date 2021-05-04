/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../helpers"
import {ProtectedLink} from "../../../../../../components/wrappers"

const ActionsColumnFormatter = (
  cellContent,
  row,
  rowIndex,
  formatExtraData
) => (
  <div className="text-right">
    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="folder-edit-tooltip">
            <FormattedMessage id="FOLDER.EDIT" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.editFolderRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditFolderPage(row.id)}
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
          <Tooltip id="folder-show-tooltip">
            <FormattedMessage id="FOLDER.CALENDAR" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showFolderAppointmentRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-info btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openFolderAppoitmentPage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-info">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-list.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}

    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="folder-show-tooltip">
            <FormattedMessage id="FOLDER.SHOW" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.showFolderRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openShowFolderPage(row.id)}
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

    {row.isActive && (
      <OverlayTrigger
        overlay={
          <Tooltip id="folder-disable-tooltip">
            <FormattedMessage id="FOLDER.DISABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.disableFolderRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDisableFolderDialog(row.id)}
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
          <Tooltip id="folder-enable-tooltip">
            <FormattedMessage id="FOLDER.ENABLE" />
          </Tooltip>
        }
      >
        <ProtectedLink rule={formatExtraData.enableFolderRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEnableFolderDialog(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-success">
              <SVG src={toAbsoluteUrl("/media/svg/icons/General/Unlock.svg")} />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
    )}
    </div>
);


export default ActionsColumnFormatter
