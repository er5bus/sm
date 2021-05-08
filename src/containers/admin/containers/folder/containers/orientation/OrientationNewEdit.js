/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import * as qs from 'query-string'
import OrientationForm from "./components/form/OrientationForm"
import { createOrientation, clearStore, editOrientation, fetchOrientation } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
import { getBasePath } from "./routes"


const Orientation = ({ history, location, params = null, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const basePath = getBasePath()

  const title = !_.isEmpty(params.orientationParam) ? intl.formatMessage({ id: "ORIENTATION.EDIT.TITLE" }) : intl.formatMessage({ id: "ORIENTATION.NEW.TITLE" })

  useEffect(() => {
    suhbeader.setTitle(title)
  })
  
  const [prefilledOrientationForAdd, setPrefilledOrientationForAdd] = useState({})
  const dispatch = useDispatch()

  const { isLoading, orientationForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.orientation.isLoading,
      orientationForEdit: state.admin.orientation.orientation,
      success: state.admin.orientation.success,
      error: state.admin.orientation.error
    }),
    shallowEqual
  )

  const saveOrientation = (values) => {
    if (_.isEmpty(params.orientationParam)) {
      dispatch(createOrientation(params, values))
    } else {
      dispatch(editOrientation(params, values))
    }
  }

  useEffect(() => {
    if (location.search){
      const query = qs.parse(location.search, { interpretNumericEntities: true })
      Object.keys(query).forEach((key) => {
        query[key] = isNaN(query[key]) ? query[key] : parseInt(query[key])
      })
      setPrefilledOrientationForAdd(query)
    }

    // eslint-disable-next-line
  }, [])

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  useEffect(() => {
    if (!_.isEmpty(params.orientationParam)){
      dispatch(fetchOrientation(params))
    }

    // eslint-disable-next-line
  }, [])

  return (
    <FormView
      goBackTo={goBackTo}
      title={title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "ORIENTATION.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "ORIENTATION.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<OrientationForm
        isLoading={isLoading}
        orientation={ !_.isEmpty(params.orientationParam) ? orientationForEdit : prefilledOrientationForAdd}
        success={success.isCreated}
        onSubmit={saveOrientation}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(Orientation))
