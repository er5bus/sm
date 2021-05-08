/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"

import AssociateServiceForm from "./components/form/AssociateServiceForm"
import { createAssociateService, clearStore, editAssociateService, fetchAssociateService } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
import {getBasePath} from "./routes"


const AssociateService = ({ history, params = null, intl }) => {

  const basePath = getBasePath()

  // Subheader
  const suhbeader = useSubheader()

  const _title = _.isEmpty(params.associateServiceParam)
    ? intl.formatMessage({ id: "ASSOCIATE_SERVICE.NEW.TITLE" })
    : intl.formatMessage({ id: "ASSOCIATE_SERVICE.EDIT.TITLE" })
  
  suhbeader.setTitle(_title)

  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, associateServiceForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.associateService.isLoading,
      associateServiceForEdit: state.admin.associateService.associateService,
      success: state.admin.associateService.success,
      error: state.admin.associateService.error
    }),
    shallowEqual
  )

  const saveAssociateService = (values) => {
    if (_.isEmpty(params.associateServiceParam)) {
      dispatch(createAssociateService(params, values))
    } else {
      dispatch(editAssociateService(params, values))
    }
  }

  useEffect(() => {
    if (((success.isCreated || success.isUpdated) && !_.isEmpty(params) ) ) {
      //history.goBack()
    }

    // eslint-disable-next-line
  }, [success, params])

  useEffect(() => {
    if (!_.isEmpty(params.associateServiceParam)){
      dispatch(fetchAssociateService(params))
    }
    // eslint-disable-next-line
  }, [])

  const goBackToList = () => {
    history.push(basePath.replace(":param", params.param))
  }

  return (
    <FormView
      goBackTo={goBackToList}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "ASSOCIATE_SERVICE.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ASSOCIATE_SERVICE.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<AssociateServiceForm
          isLoading={isLoading}
          success={success.isCreated}
          associateService={ !_.isEmpty(params.associateServiceParam) && associateServiceForEdit}
          onSubmit={saveAssociateService}
          saveRef={saveRef}
        />)
      }
    </FormView>
  )
}


export default withRouter(injectIntl(AssociateService))
