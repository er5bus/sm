import React from "react"
import { Col, Row } from "react-bootstrap"
import { injectIntl } from "react-intl"
import { Switch, Redirect} from "react-router-dom"

import { ContentRoute } from "../../../../components/router"
import { useSubheader } from "../../../../components/layout"

import routes from "./routes"
import {useSelector, shallowEqual, useDispatch} from "react-redux"
import {fetchUser, clearError} from "./store/actions"
import {FlashMessages} from "../../../../components/partials"

import UpdateProfileMenu from "./components/menu/UpdateProfileMenu"


const UpdateProfile = ({ intl }) => {

  // Subheader
  const subheader = useSubheader()
  const dispatch = useDispatch()

  React.useLayoutEffect(() => {
    subheader.setTitle(intl.formatMessage({ id: "GENERAL.EDIT_PROFILE" }))
  }, [subheader, intl])

  React.useEffect(() => {
    dispatch(fetchUser())
  }, [dispatch])

  const { account, isFetching, success, error } = useSelector(
    (state) => ({
      account: state.admin.profile.account,
      isFetching: state.admin.profile.isFetching,
      success: state.admin.profile.success,
      error: state.admin.profile.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearError}
        successMsg={[
          { condition: success, label: intl.formatMessage({ id: "PROFILE.EDIT.MSG" }) },
        ]}  />
      <Row>
        <Col xl="4" lg="5">
          <UpdateProfileMenu account={account} isFetching={isFetching} />
        </Col>
        <Col xl="8"  lg="7">
          <Switch>
            { Object.keys(routes).map((key, i) => <ContentRoute key={i} { ...routes[key] }  />) }
            <Redirect from="*" to={ routes.personalInformation.path }/>
          </Switch>
        </Col>
      </Row>
    </>)
}


export default injectIntl(UpdateProfile)
