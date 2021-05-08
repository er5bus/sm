import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { appointmentEditFields, appointmentFields, folderFieldsFr, folderFieldsAr, appointmentFieldsFr, appointmentFieldsAr } from "./fields/folderAppointmentFields"
import { DisplayItems, DynamicForm, LanguageTab, RenderFields, RenderItems } from "./../../../../../../components/partials/controls"
import { editFolderAppointment, fetchFolder, fetchFolderAppointment, createFolderAppointment } from "./../../store/actions"


const AppointmentForm = (props) => {

  const { saveRef, intl, params, initialValues={}, params: { appointmentParam=undefined, param: folder } } = props

  const dispatch = useDispatch()
  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { appointmentToEdit, folderForShow, isFetching } = useSelector(
    (state) => ({
      isFetching: state.admin.folder.isFetching,
      folderForShow: state.admin.folder.folder,
      appointmentToEdit: state.admin.folder.appointment
    }),
    shallowEqual
  )

  useEffect(() => {
    if (appointmentParam) {
      dispatch(fetchFolderAppointment(params))
    }
    dispatch(fetchFolder(params))
    // eslint-disable-next-line
  }, [])

  const saveAppointment = (fieldValues) => {
    const values = {
      ...fieldValues,
      folder,
    }
    if (appointmentParam){
      dispatch(editFolderAppointment(params, values))
    }else {
      dispatch(createFolderAppointment(values))
    }
  }

  const fields = appointmentFields({ intl })
  const fieldsFr = appointmentFieldsFr({ intl })
  const fieldsAr = appointmentFieldsAr({ intl })
  const fieldsForEditOnly = appointmentEditFields({ intl })

  const displayFieldsFr = folderFieldsFr({ intl })
  const displayFieldsAr = folderFieldsAr({ intl })

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (<>
        <DisplayItems
          isFetching={isFetching}
          object={folderForShow}
          title={intl.formatMessage({id: "FOLDER.INPUT.FULL_NAME"})}
        >
          <RenderItems fields={displayFieldsAr} show={isAr} />
          <RenderItems fields={displayFieldsFr} show={isFr} />
        </DisplayItems>
        <DynamicForm
          className="mt-5"
          initialValues={!_.isEmpty(appointmentParam) ? appointmentToEdit : initialValues}
          onSubmit={saveAppointment}
        >
          <RenderFields fields={fields} show={true} />
          { appointmentParam && <RenderFields fields={fieldsForEditOnly} show={true} /> }
          <RenderFields fields={fieldsFr} show={isFr} />
          <RenderFields fields={fieldsAr} show={isAr} />
          <button ref={saveRef} className="d-none" type="submit"></button>
        </DynamicForm>
        </>) }
    </LanguageTab>
  )
}

export default injectIntl(AppointmentForm)
