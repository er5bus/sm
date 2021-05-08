import React from "react"
import { injectIntl } from "react-intl"

import { useSubheader } from "../../../../components/layout"
import { Card, CardBody, ModalProgressBar } from "../../../../components/partials/controls"
import { useSelector, shallowEqual, useDispatch } from "react-redux"
import { fetchUser } from "./store/actions"

import { isRLTLang } from "../../../../i18n"
import {getAttr, toAbsoluteUrl} from "../../../../helpers"
import {AR, FR} from "../../../../constants"
import AccountInformationDisplay from "./components/display/AccountInformationDisplay"


const AccountInformation = ({ intl }) => {
  // Subheader
  const subheader = useSubheader()
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    subheader.setTitle(intl.formatMessage({ id: "GENERAL.MY_PROFILE" }))
  }, [subheader, intl])

  React.useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const { account, isFetching, error } = useSelector(
    (state) => ({
      isFetching: state.admin.profile.isFetching,
      account: state.admin.profile.account,
      error: state.admin.profile.error
    }),
    shallowEqual
  )

  return (
    <>
      <Card>
        {isFetching && <ModalProgressBar />}
        <CardBody>
          <>
            <div className="d-flex mb-9">
              <div className="flex-shrink-0 mr-0 mt-lg-0 mt-3">
                <div className={"symbol bg-white-o-15 m" + (isRLTLang() ? "l" : "r" ) + "-3"}>
                  <span className="symbol-label text-primary font-weight-bold font-size-h4">
                    <img src={toAbsoluteUrl("/media/svg/avatars/ninja.svg")} className="h-100 align-self-end" alt="" />
                  </span>
                </div>
              </div>
              <div className="flex-grow-1">
                <div className="d-flex justify-content-between flex-wrap mt-1">
                  <div className="d-flex mr-3">
                    <div>
                      <i className="flaticon2-correct text-primary font-size-h5"></i>
                    </div>
                    <div className="text-dark-75 text-hover-primary font-size-h5 font-weight-bold mr-3"></div>
                    { getAttr(account, {
                      [FR]: ["user.firstName", "user.lastName"],
                      [AR]: ["user.firstNameAr", "user.lastNameAr"]
                    }, intl.formatMessage({ id: "GENERAL.EMPTY" })) }
                  </div>
                </div>
                <div className="d-flex justify-content-between flex-wrap mt-1">
                  <div className="d-flex mr-3">
                    <div>
                      <i className="flaticon2-new-email mr-1 font-size-lg"></i>
                    </div>
                    <div className=" text-hover-primary font-weight-bold mr-lg-3 mr-5 mb-lg-0 mb-2">
                      { getAttr(account, "user.email", intl.formatMessage({ id: "GENERAL.EMPTY" })) }
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="separator separator-solid mb-2"></div>
            <AccountInformationDisplay error={error} account={account} isFetching={isFetching} />
          </>
        </CardBody>
      </Card>
    </>
  )
}


export default injectIntl(AccountInformation)
