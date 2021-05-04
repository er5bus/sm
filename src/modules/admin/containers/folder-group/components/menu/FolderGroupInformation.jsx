import React from "react"
import { FormattedMessage } from "react-intl"
import { isEmpty } from "lodash"

import { isRLTLang } from "./../../../../../../i18n"
import { toAbsoluteUrl } from "../../../../../../helpers"
import MenuLoader from "../loading/MenuLodaer"


const FolderGroupInformations = ({ folderGroup }) => {

  return isEmpty(folderGroup) ? <MenuLoader /> : (
    <>
      <div className="d-flex align-items-center">
        <div className={"symbol symbol-90 symbol-xl-90 m" + (isRLTLang() ? "l" : "r") + "-3 align-self-start align-self-xl-center"}>
          <div className="symbol-label" style={{ backgroundImage: `url(${toAbsoluteUrl("/media/img/group.svg")})` }} />
        </div>
        <div>
          <span className="font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary">
            <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
              { isRLTLang() ? folderGroup.nameAr : folderGroup.nameFr || <FormattedMessage id="GENERAL.EMPTY" /> }
            </div>
          </span>
          <div className="text-muted"></div>
        </div>
      </div>
      <div className="py-5">
        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="font-weight-bold mr-2"><FormattedMessage id="FOLDER_GROUP.INPUT.RESPONSIBLE" /></span>
          {folderGroup && folderGroup.responsibleDetails &&
          <span className="label label-lg label-light-primary label-inline">
            {isRLTLang() ?
              <>{folderGroup.responsibleDetails.firstNameAr || "----"} {folderGroup.responsibleDetails.lastNameAr || "----"}</> :
              <>{folderGroup.responsibleDetails.firstName || "----"} {folderGroup.responsibleDetails.lastName || "----"}</>
            }
          </span>
          }
        </div>

        <div className="d-flex align-items-center justify-content-between mb-2">
          <span className="font-weight-bold mr-2"><FormattedMessage id="FOLDER.INPUT.STATUS" /></span>
          <span className={`label label-lg label-light label-inline`}>
            {
              folderGroup && folderGroup.isActive
                ? <FormattedMessage id="GENERAL.ACTIVE" />
                : <FormattedMessage id="GENERAL.INACTIVE" />
            }
          </span>
        </div>
      </div>
    </>
  )
}


export default FolderGroupInformations
