/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { Switch } from "react-router-dom"
import _ from "lodash"

import FolderMenu from "./components/menu/FolderEdit"

import { Col, Row } from "react-bootstrap"

import formRoutes from "./routes/forms"
import routes from "./../../routes"
import {ProtectedRoute} from "../../../../components/routes"
import {useSubheader} from "../../../../components/layout"


const Folder = ({ history, match: { params }, intl }) => {

  const suhbeader = useSubheader()

  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "FOLDER.EDIT.TITLE" }))

    // eslint-disable-next-line
  }, [])

  const goBackToList = () => {
    history.push(routes.folderList.path)
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
          <FolderMenu history={history} param={params.param} />
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            { Object.keys(formRoutes).map((key) => (
                <ProtectedRoute
                  key={key}
                  path={formRoutes[key].path.replace(":param", params.param)}
                >
                  { ({ history, match }) => renderRoute({ component: formRoutes[key].component, match, history }) }
                </ProtectedRoute>
              ))
            }
          </Switch>

        </Col>
      </Row>
    </>
  )
}


export default injectIntl(Folder)
