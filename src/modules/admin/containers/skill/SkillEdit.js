/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React from "react"
import { injectIntl } from "react-intl"
import { Switch, Route } from "react-router-dom"
import _ from "lodash"
import SkillMenu from "./components/menu/SkillEdit"
import { Col, Row } from "react-bootstrap"
import formRoutes from "./routes/forms"
import routes from "./../../routes"
import {useSubheader} from "../../../../components/layout"


const Skill = ({ history, match: { params }, intl }) => {

  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "SKILL.EDIT.TITLE" }))

  const goBackToList = () => {
    history.push(routes.skillList.path)
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
      <Row>
        <Col xl="3" lg="5">
          <SkillMenu param={params.param} />
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            { Object.keys(formRoutes).map((key) => (
              <Route key={key} path={formRoutes[key].path.replace(":param", params.param)}>
                { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history }) }
              </Route>
            ))}
          </Switch>
        </Col>
      </Row>
    </>
  )
}


export default injectIntl(Skill)
