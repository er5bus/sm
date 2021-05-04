import React from "react"
import { isEmpty } from "lodash"
import { FormattedMessage } from "react-intl"
import {AR, FR} from "../../../../../../constants"
import {toAbsoluteUrl} from "../../../../../../helpers"
import {getLang, isRLTLang} from "../../../../../../i18n"
import Typography from "@material-ui/core/Typography"
import MenuLoader from "../loading/MenuLodaer"

const PARTNER_NAME_VALUE = {
  [AR] : "nameAr",
  [FR] : "nameFr"
}

const PARTNER_NAME_TEXT = {
  [AR] : "PARTNERSHIP.INPUT.NAME_AR",
  [FR] : "PARTNERSHIP.INPUT.NAME_FR",
}

const PARTNER_ACTIVITY_VALUE = {
  [AR] : "activityAr",
  [FR] : "activityFr"
}

const PARTNER_ACTIVITY_TEXT = {
  [AR] : "PARTNERSHIP.INPUT.ACTIVITY_AR",
  [FR] : "PARTNERSHIP.INPUT.ACTIVITY_FR",
}

const PartnershipMenu = ({ partnership }) => {

  return (isEmpty(partnership) ? <MenuLoader /> : <>
    <div className="d-flex align-items-center">
      <div className={"symbol symbol-60 symbol-xl-90 m" + (isRLTLang() ? "l" : "r") + "-3 align-self-start align-self-xl-center"}>
        {
          partnership.logo
            ? <div className="symbol-label" style={{ backgroundImage: `url(${partnership.logo})` }} />
            : <div className="symbol-label" style={{ backgroundImage: `url(${toAbsoluteUrl(`/media/img/no-photo.svg`)})` }} />
        }
      </div>
      <div>
        <span className="font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary">
          <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
            {  <>{ partnership[PARTNER_NAME_VALUE[getLang()]] || "----"}</> }
          </div>
          <Typography variant="overline" display="block" gutterBottom>
            {  <>{ partnership[PARTNER_ACTIVITY_VALUE[getLang()]] || "----"}</> }
          </Typography>
        </span>
        <div className="text-muted"></div>
      </div>
    </div>
    <div className="py-5">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="font-weight-bold mr-2"><FormattedMessage id={ PARTNER_NAME_TEXT[getLang()] || "GENERAL.EMPTY" } /></span>
        <span className={`label label-lg label-light-info label-inline`}>
          {  <>{ partnership[PARTNER_NAME_VALUE[getLang()]] || "----"}</> }
        </span>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="font-weight-bold mr-2"><FormattedMessage id={ PARTNER_ACTIVITY_TEXT[getLang()] || "GENERAL.EMPTY" } /></span>
        <span className={`label label-lg label-light-primary label-inline`}>
          { partnership[PARTNER_ACTIVITY_VALUE[getLang()]] || "----" }
        </span>
      </div>
    </div>
  </>
  )
}


export default PartnershipMenu
