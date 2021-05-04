import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import { connect } from "react-redux"
import { Switch } from "react-router-dom"

import { isEmpty } from "lodash"
import { useSubheader } from "../../../../components/layout"
import FolderMenu from "./components/menu/FolderDisplay"
import routes from "./../../routes"
import detailsRoutes from "./routes/details"
import { clearStore } from "./store/actions"

import { Col, Row } from "react-bootstrap"
import {ProtectedRoute} from "../../../../components/routes"


const FolderShow = ({ history, match: { params }, intl }) => {

  const suhbeader = useSubheader()
  
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "FOLDER.SHOW.TITLE" }))

    // eslint-disable-next-line
  }, [])
  
  const goBackToList = () => {
    history.push(routes.folderList.path)
  }

  const renderRoute = ({ component, match, history })  => {
    const Component = component
    return <Component 
      params={(match && !isEmpty(match.params)) ? {...match.params, ...params} : params} 
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
            { Object.keys(detailsRoutes).map((key, i) => (
              <ProtectedRoute key={i} path={detailsRoutes[key].path.replace(":param", params.param)}>
                {({ history, match }) => renderRoute({ component: detailsRoutes[key].component, history, match }) }
              </ProtectedRoute>
            ))}
          </Switch>
        </Col>
      </Row>
    </>
  )
}


const mapStateToProps = (state) => state.admin.folder

export default connect(mapStateToProps, { clearStore })(injectIntl(FolderShow))
