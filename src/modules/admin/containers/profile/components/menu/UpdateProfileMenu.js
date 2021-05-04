import React from "react"
import { injectIntl } from "react-intl"
import {Menu} from "../../../../../../components/partials"
import {AR, FR} from "../../../../../../constants"
import {getAttr, toAbsoluteUrl} from "../../../../../../helpers"
import {isRLTLang} from "../../../../../../i18n"

import menuItems from "./items/edit"

const UpdateProfileMenu = ({ account, intl }) => {

  const items = menuItems({ intl })

  return (<Menu items={items}>
    {/*<!--begin::User-->*/}
    <div className="d-flex align-items-center">
      <div className={"symbol symbol-60 symbol-xl-50 m" + (isRLTLang() ? "l" : "r" ) + "-3 align-self-start align-self-xl-center"}>
        <span className="symbol-label text-primary font-weight-bold font-size-h4">
          <img src={toAbsoluteUrl("/media/svg/avatars/ninja.svg")} className="h-100 align-self-end" alt="" />
        </span>
        <i className="symbol-badge bg-success"></i>
      </div>
      <div>
        <span className="font-weight-bolder mx-5 font-size-h5 text-dark-75 text-hover-primary">
          <div className="text-dark m-0 flex-grow-1 mr-3 font-size-h5">
            { getAttr(account, {
              [FR]: ["user.firstName", "user.lastName"],
              [AR]: ["user.firstNameAr", "user.lastNameAr"]
            }, intl.formatMessage({ id: "GENERAL.EMPTY" })) }
          </div>

        </span>
        <div className="text-muted"></div>
      </div>
    </div>
    {/*<!--end::User-->*/}
    {/*<!--begin::Contact-->*/}
    <div className="py-9">
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="font-weight-bold mr-2">{ intl.formatMessage({ id: "USER.INPUT.EMAIL" }) }</span>
        <span className="text-muted text-hover-primary">{ getAttr(account, "user.email", intl.formatMessage({ id: "GENERAL.EMPTY" })) }</span>
      </div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <span className="font-weight-bold mr-2">{ intl.formatMessage({ id: "USER.INPUT.USERNAME" }) }</span>
        <span className="text-muted">
          { getAttr(account, {
            [FR]: "user.firstName",
            [AR]: "user.firstNameAr"
          }, intl.formatMessage({ id: "GENERAL.EMPTY" })) }
        </span>
      </div>
    </div>
    {/*<!--end::Contact-->*/}
  </Menu>
  )
}


export default injectIntl(UpdateProfileMenu)
