/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import * as qs from 'query-string'
import EventForm from "./components/form/EventForm"
import { createEvent, clearStore, editEvent, fetchEvent } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
//import { getBasePath } from "./routes"


const Event = ({ history, location, params = null, intl }) => {
  // Subheader
  //const basePath = getBasePath()
  const suhbeader = useSubheader()

  const title = !_.isEmpty(params.eventParam) ? intl.formatMessage({ id: "EVENT.EDIT.TITLE" }) : intl.formatMessage({ id: "EVENT.NEW.TITLE" })

  useEffect(() => {
    suhbeader.setTitle(title)
  })

  const [prefilledEventForAdd, setPrefilledEventForAdd] = useState({})
  const dispatch = useDispatch()

  const { isLoading, eventForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.event.isLoading,
      eventForEdit: state.admin.event.event,
      success: state.admin.event.success,
      error: state.admin.event.error
    }),
    shallowEqual
  )

  const saveEvent = (values) => {
    if (_.isEmpty(params.eventParam)) {
      dispatch(createEvent(params, values))
    } else {
      dispatch(editEvent(params, values))
    }
  }

  useEffect(() => {
    if (location.search){
      const query = qs.parse(location.search, { interpretNumericEntities: true })
      Object.keys(query).forEach((key) => {
        query[key] = isNaN(query[key]) ? query[key] : parseInt(query[key])
      })
      setPrefilledEventForAdd(query)
    }

    // eslint-disable-next-line
  }, [])

  const goBackTo = () => {
    history.goBack()
    //history.push(basePath.replace(":param", params.param))
  }

  useEffect(() => {
    if ((success.isCreated || success.isUpdated) && !_.isEmpty(params)  ) {
      //history.goBack()
    }

    // eslint-disable-next-line
  }, [success, params])

  useEffect(() => {
    if (!_.isEmpty(params.eventParam)){
      dispatch(fetchEvent(params))
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
        { condition: success.isCreated, label: intl.formatMessage({ id: "EVENT.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "EVENT.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<EventForm
        isLoading={isLoading}
        event={ !_.isEmpty(params.eventParam) ? eventForEdit : prefilledEventForAdd}
        success={success.isCreated}
        onSubmit={saveEvent}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(Event))
