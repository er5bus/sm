import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch, Redirect } from "react-router-dom"

import { useSubheader } from "../../../../components/layout"
import FolderGroupMenu from "./components/menu/FolderGroupDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/show"
import { clearStore } from "./store/actions"

import { Col, Row } from "react-bootstrap"
import {ProtectedRoute} from "../../../../components/routes"


const FolderGroupShow = ({ history, match: { params }, intl}) => {

  const suhbeader = useSubheader()
  
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "FOLDER_GROUP.SHOW.TITLE" }))
  })
  
  const goBackToList = () => {
    history.push(routes.folderGroupList.path)
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
    <>
      <Row>
        <Col xl="3" lg="5">
          <FolderGroupMenu history={history} param={params.param} />
        </Col>
        <Col xl="9" lg="7">
          <Switch>
            { Object.keys(detailsRoutes).map((key, i) => (
              <ProtectedRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match }) }
              </ProtectedRoute>
            ))}
            <Redirect from="*" to={ detailsRoutes.folderGroupDisplay.path.replace(":param", params.param)}/>
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.folderGroup

export default connect(mapStateToProps, { clearStore })(injectIntl(FolderGroupShow))
