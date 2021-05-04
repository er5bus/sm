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
      {row.isActive && (
        <OverlayTrigger
          overlay={
            <Tooltip id="partnership-edit-tooltip">
              <FormattedMessage id="ASSESSMENT_LEVEL.EDIT" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.editAssessmentLevelRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-warning btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openEditAssessmentLevelPage(row.id)}
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
              <FormattedMessage id="ASSESSMENT_LEVEL.SHOW" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.showAssessmentLevelRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-primary btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openShowAssessmentLevelPage(row.id)}
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
            <Tooltip id="partnership-disable-tooltip">
              <FormattedMessage id="ASSESSMENT_LEVEL.DISABLE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.deactivateAssessmentLevelRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-danger btn-sm my-1 mx-1"
              onClick={() => formatExtraData.openDeactivateAssessmentLevelDialog(row.id)}
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
              <FormattedMessage id="ASSESSMENT_LEVEL.ENABLE" />
            </Tooltip>
          }
        >
          <ProtectedLink rule={formatExtraData.activateAssessmentLevelRule}>
            <a
              className="btn btn-sm btn-icon btn-light btn-hover-success btn-sm mx-1 my-1"
              onClick={() => formatExtraData.openActivateAssessmentLevelDialog(row.id)}
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
