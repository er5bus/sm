/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"

import { FlashMessages } from "../../../../components/partials/controls"

import _ from "lodash"

import AssessmentToolMenu from "./components/menu/AssessmentToolDisplay"

import { Col, Row } from "react-bootstrap"
import { clearStore } from "./store/actions"

import detailRoutes from "./routes/details"
import routes from "./../../routes"


const AssessmentTool = ({ history, match: { params } }) => {

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { error } = useSelector(
    (state) => ({
      error: state.admin.assessmentTool.error
    }),
    shallowEqual
  )

  const goBackToList = () => {
    history.push(routes.assessmentToolList.path)
  }

  const renderRoute = ({ component, match, history })  => {
    const Component = component
    return <Component
      params={(match && !_.isEmpty(match.params)) ? {...match.params, ...params} : params}
      goBackToList={goBackToList}
      history={history}
    />
  }

  return (
    <>
      <FlashMessages error={error} onClose={clearStore} />
      <Row>
        <Col xl="3" lg="5">
          <AssessmentToolMenu param={params.param} />
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            { Object.keys(detailRoutes).map((key) => (
              <Route key={key} path={detailRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: detailRoutes[key].component, match, history }) }
              </Route>
            ))}
          </Switch>
        </Col>
      </Row>
    </>
  )
}


export default injectIntl(AssessmentTool)
