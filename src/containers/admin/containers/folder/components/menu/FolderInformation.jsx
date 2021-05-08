import React from "react"
import { FormattedMessage } from "react-intl"
import { isEmpty } from "lodash"
import Typography from '@material-ui/core/Typography';
import { NavLink } from "react-router-dom"

import { isRLTLang } from "./../../../../../../i18n"
import { toAbsoluteUrl } from "../../../../../../helpers"
import { FOLDER_STATUS, FOLDER_STATUS_COLOR, GENDER_MALE, GENDER_FEMALE, FOLDER_STATE, FOLDER_STATE_COLOR, FOLDER_STATUS_CODE, FOLDER_EXIT_COURSE } from "./../../../../UIHelpers"
import formRoutes from "./../../routes/forms"
import detailsRoutes from "./../../routes/details"
import rootRoutes from "./../../../../routes"
import MenuLoader from "../loading/MenuLodaer";

const FolderInformations = ({ folder, editMode=false, param }) => {

  return isEmpty(folder) ? <MenuLoader /> : (
    <>
      <div className="d-flex align-items-center">
        <div className={"symbol symbol-60 symbol-xl-50 m" + (isRLTLang() ? "l" : "r") + "-3 align-self-start align-self-xl-center"}>
          {folder.gender === null && <div className="symbol-label" style={{ backgroundImage: `url(${toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")})` }} />}
          {folder.gender === GENDER_MALE && <div className="symbol-label" style={{ backgroundImage: `url(${toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")})` }} />}
          {folder.gender === GENDER_FEMALE && <div className="symbol-label" style={{ backgroundImage: `url(${toAbsoluteUrl("/media/svg/avatars/010-girl-4.svg")})` }} />}
        </div>
        <div>
          <span className="font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary">
            <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
              {isRLTLang() ?
                <>{folder.firstNameAr || "----"} {folder.lastNameAr || "----"}</> :
                <>{folder.firstNameFr || "----"} {folder.lastNameFr || "----"}</>
              }
            </div>
            {folder && folder.folderIdentifiant &&
            <Typography variant="overline" display="block" gutterBottom>
              {folder.folderIdentifiant}
            </Typography>
            }
          </span>
          <div className="text-muted"></div>
        </div>
      </div>
      <div className="text-right">
        {folder && folder.canBeJustified && folder.status !== FOLDER_STATUS_CODE &&
        <NavLink to={editMode ? formRoutes.justifiedFolder.path.replace(":param", param) : detailsRoutes.justifiedFolder.path.replace(":param", param)} className="btn btn-sm btn-warning my-4 mx-2" >
          <FormattedMessage id="FOLDER.CAN_JUSTUFIED" />
        </NavLink>
        }
        {folder && folder.status === FOLDER_EXIT_COURSE &&
          <NavLink to={editMode ? formRoutes.backToBeingProcessedFolder.path.replace(":param", param) : detailsRoutes.backToBeingProcessedFolder.path.replace(":param", param) } className="btn btn-sm btn-warning my-4 mx-2" >
          <FormattedMessage id="FOLDER.BACK_TO_BEING_PROCESSED" />
        </NavLink>
        }
        <NavLink to={rootRoutes.folderAppointments.path.replace(":param", param)} className="btn btn-sm btn-primary my-4 mx-2" >
          <FormattedMessage id="FOLDER.GET_APPOINTMENT" />
        </NavLink>
        <NavLink to={rootRoutes.userAvailability.path.replace(":param", param)} className="btn btn-sm btn-sm btn-primary my-4 mx-2" >
          <FormattedMessage id="FOLDER.CHECK_AVAILABILITY" />
        </NavLink>
        {/*<NavLink to={rootRoutes.userAppointments.path.replace(":param", param)} className="btn btn-sm btn-primary my-4 mx-3" >
          <FormattedMessage id="FOLDER.AFFECT_USER_APPOINTMENT" />
        </NavLink>*/ }
      </div>
      {folder && folder.status && folder.state &&
      <div className="py-5">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="font-weight-bold mr-2"><FormattedMessage id="FOLDER.INPUT.RESPOSIBLE" /></span>
          {folder && folder.cpDetail &&
          <span className="label label-lg label-light-primary label-inline">
            {isRLTLang() ?
              <>{folder.cpDetail.firstNameAr || "----"} {folder.cpDetail.lastNameAr || "----"}</> :
              <>{folder.cpDetail.firstName || "----"} {folder.cpDetail.lastName || "----"}</>
            }
          </span>
          }
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="font-weight-bold mr-2"><FormattedMessage id="FOLDER.INPUT.STATUS" /></span>
          <span className={`label label-lg label-light-${FOLDER_STATUS_COLOR[folder.status] || "GENERAL.EMPTY"} label-inline`}>
            <FormattedMessage id={FOLDER_STATUS[folder.status] || "GENERAL.EMPTY"} />
          </span>
        </div>
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="font-weight-bold mr-2"><FormattedMessage id="FOLDER.INPUT.STATE" /></span>
          <span className={`label label-lg label-light-${FOLDER_STATE_COLOR[folder.state] || "GENERAL.EMPTY"} label-inline`}>
            <FormattedMessage id={FOLDER_STATE[folder.state] || "GENERAL.EMPTY"} />
          </span>
        </div>
      </div>
      }
    </>
  )
}


export default FolderInformations
