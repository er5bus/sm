/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../../../helpers"
import {ProtectedLink} from "../../../../../../../../../components/wrappers"

const ActionsColumnFormatter = ( cellContent, row, rowIndex, formatExtraData ) => {

  return (
    <div className="text-right">
      { !row.isValid && <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-edit-tooltip"><FormattedMessage id="FOLDER_DOCUMENT.EDIT" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.editFolderDocumentRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditFolderDocumentPage(row.id)}
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
      <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-disable-tooltip"><FormattedMessage id="FOLDER_DOCUMENT.FILE" /></Tooltip>}
      >
        <a
          rel="noopener noreferrer"
          href={row.file}
          download={row.nameFr}
          target="_blank"
          className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm my-1 mx-1"
        >
          <span className="svg-icon svg-icon-md svg-icon-success">
            <SVG src={toAbsoluteUrl("/media/svg/icons/General/Attachment1.svg")} />
          </span>
        </a>
      </OverlayTrigger>

      { !row.isValid && <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-disable-tooltip"><FormattedMessage id="FOLDER_DOCUMENT.DELETE" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.deleteFolderDocumentRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDeleteFolderDocumentDialog(row.id)}
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
