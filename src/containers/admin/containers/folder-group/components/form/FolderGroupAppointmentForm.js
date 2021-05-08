import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { folderGroupFieldsFr, folderGroupFieldsAr } from "./../display/fields/folderGroupFields"
import { appointmentEditFields, appointmentFields, appointmentFieldsFr, appointmentFieldsAr } from "./fields/folderGroupAppointmentFields"
import { DisplayItems, DynamicForm, LanguageTab, RenderFields, RenderItems } from "./../../../../../../components/partials/controls"
import { editFolderGroupAppointment, fetchFolderGroupAppointment, createFolderGroupAppointment } from "./../../store/actions"

const AppointmentForm = (props) => {

  const { saveRef, intl, params, initialValues={} } = props

  const dispatch = useDispatch()
  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { appointmentToEdit, isFetching, folderGroupForShow } = useSelector(
    (state) => ({
      error: state.admin.folderGroup.error,
      isFetching: state.admin.folderGroup.isFetching,
      folderGroupForShow: state.admin.folderGroup.folderGroup,
      appointmentToEdit: state.admin.folderGroup.appointment,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (params.appointmentParam) {
      dispatch(fetchFolderGroupAppointment(params))
    }
    // eslint-disable-next-line
  }, [])

  const saveAppointment = (values) => {
    if (params.appointmentParam){
      dispatch(editFolderGroupAppointment(params, values))
    }else {
      dispatch(createFolderGroupAppointment(params, values))
    }
  }

  const fields = appointmentFields({ intl })
  const fieldsFr = appointmentFieldsFr({ intl })
  const fieldsAr = appointmentFieldsAr({ intl })
  const fieldsForEditOnly = appointmentEditFields({ intl })

  const displayFieldsFr = folderGroupFieldsFr({ intl })
  const displayFieldsAr = folderGroupFieldsAr({ intl })
  //const displayFields = appointmentDisplayFields({ intl })

  return (
      <LanguageTab>
        { ({ isFr, isAr }) => (<>
          <DisplayItems
            isFetching={isFetching}
            object={folderGroupForShow}
          >
            <RenderItems fields={displayFieldsAr} show={isAr} />
            <RenderItems fields={displayFieldsFr} show={isFr} />
          </DisplayItems>
          <DynamicForm
            className="mt-5"
            initialValues={!_.isEmpty(params.appointmentParam) ? appointmentToEdit : initialValues}
            onSubmit={saveAppointment}
          >
            <RenderFields fields={fields} show={true} />
            { params.appointmentParam && <RenderFields fields={fieldsForEditOnly} show={true} /> }
            <RenderFields fields={fieldsFr} show={isFr} />
            <RenderFields fields={fieldsAr} show={isAr} />
            <button ref={saveRef} className="d-none" type="submit"></button>
          </DynamicForm>
        </>)
        }
      </LanguageTab>
  )
}

export default injectIntl(AppointmentForm)
