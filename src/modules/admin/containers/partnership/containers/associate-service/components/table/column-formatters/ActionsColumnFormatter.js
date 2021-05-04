/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl } from "../../../../../../../../../helpers"
import {ProtectedLink} from "../../../../../../../../../components/wrappers"

const ActionsColumnFormatter = ( cellContent, row, rowIndex, formatExtraData ) => {

  return (
    <div className="text-right">
      <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-edit-tooltip"><FormattedMessage id="ASSOCIATE_SERVICE.EDIT" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.editAssociateServiceRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
            onClick={() => formatExtraData.openEditAssociateServicePage(row.id)}
          >
            <span className="svg-icon svg-icon-md svg-icon-warning">
              <SVG
                src={toAbsoluteUrl("/media/svg/icons/Communication/Write.svg")}
              />
            </span>
          </a>
        </ProtectedLink>
      </OverlayTrigger>
      <Dropdown drop={"down"} style={{ position: "initial" }} size="sm" className="d-inline-block">
        <Dropdown.Toggle size="sm" variant="light" className="mx-1 my-1" id="dropdown-basic">
          <span className="svg-icon svg-icon-md svg-icon-info">
            <SVG
              src={toAbsoluteUrl("/media/svg/icons/General/Settings-2.svg")}
            />
          </span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <ProtectedLink rule={formatExtraData.finishAssociateServiceRule}>
            <Dropdown.Item onClick={() => formatExtraData.openFinishAssociateServiceDialog(row.id)}><FormattedMessage id="ASSOCIATE_SERVICE.FINISH" /></Dropdown.Item>
          </ProtectedLink>
          <ProtectedLink rule={formatExtraData.permanentAssociateServiceRule}>
            <Dropdown.Item onClick={() => formatExtraData.openPermanentAssociateServiceDialog(row.id)}><FormattedMessage id="ASSOCIATE_SERVICE.PERMANENT" /></Dropdown.Item>
          </ProtectedLink>
          <ProtectedLink rule={formatExtraData.inProgressAssociateServiceRule}>
            <Dropdown.Item onClick={() => formatExtraData.openInProgressAssociateServiceDialog(row.id)}><FormattedMessage id="ASSOCIATE_SERVICE.IN_PROGRESS" /></Dropdown.Item>
          </ProtectedLink>
          <ProtectedLink rule={formatExtraData.finishAssociateServiceRule}>
            <Dropdown.Item onClick={() => formatExtraData.openStopAssociateServiceDialog(row.id)}><FormattedMessage id="ASSOCIATE_SERVICE.SUSPENDED" /></Dropdown.Item>
          </ProtectedLink>
        </Dropdown.Menu>
      </Dropdown>

      { !row.isImmutable && <OverlayTrigger
        overlay={<Tooltip id="smsTemplate-disable-tooltip"><FormattedMessage id="ASSOCIATE_SERVICE.DELETE" /></Tooltip>}
      >
        <ProtectedLink rule={formatExtraData.deleteAssociateServiceRule}>
          <a
            className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
            onClick={() => formatExtraData.openDeleteAssociateServiceDialog(row.id)}
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
