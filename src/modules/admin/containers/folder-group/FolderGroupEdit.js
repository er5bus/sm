/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { Switch, Redirect } from "react-router-dom"
import FolderGroupMenu from "./components/menu/FolderGroupEdit"
import { Col, Row } from "react-bootstrap"
import formRoutes from "./routes/edit"
import routes from "./../../routes"
import {ProtectedRoute} from "../../../../components/routes"
import {useSubheader} from "../../../../components/layout"


const FolderGroup = ({ history, intl, match: { params } }) => {

  const suhbeader = useSubheader()
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "FOLDER_GROUP.EDIT.TITLE" }))
  })

  const goBackToList = () => {
    history.push(routes.folderList.path)
  }

  const renderRoute = ({ component, match, history })  => {
    const Component = component
    return <Component
      params={Object.assign(match.params||{}, params)} 
      goBackToList={goBackToList}
      history={history}
    />
  }

  return (
    <Row>
      <Col xl="3" lg="5">
        <FolderGroupMenu history={history} param={params.param} />
      </Col>
      <Col xl="9" lg="7">
        <Switch>
          { Object.keys(formRoutes).map((key, i) => (
            <ProtectedRoute key={i} path={formRoutes[key].path.replace(":param", params.param)}>
              {({ history, match }) => renderRoute({ component: formRoutes[key].component, history, match }) }
            </ProtectedRoute>
          ))}
          <Redirect from="*" to={ formRoutes.folderGroupForm.path.replace(":param", params.param)}/>
        </Switch>
      </Col>
    </Row>
  )
}


export default injectIntl(FolderGroup)
