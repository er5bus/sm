import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { appointmentFields, appointmentFieldsFr, appointmentFieldsAr } from "./fields/appointmentFields"
import { fetchFolderAppointment } from "./../../store/actions"
import {DisplayItems, LanguageTab, RenderItems} from "../../../../../../components/partials"

const FolderAppointment = ({ params, intl }) => {

  const dispatch = useDispatch()

  const fields = appointmentFields({ intl })
  const fieldsFr = appointmentFieldsFr({ intl })
  const fieldsAr = appointmentFieldsAr({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.appointment,
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchFolderAppointment(params))

    // eslint-disable-next-line
  }, [])

  return (
    <LanguageTab>
      { ({ isFr, isAr }) => (
        <DisplayItems
          error={error}
          isFetching={isFetching}
          object={item}
        >
          <RenderItems fields={fieldsAr} show={isAr} />
          <RenderItems fields={fieldsFr} show={isFr} />
          <RenderItems fields={fields} />
        </DisplayItems>
      )}
    </LanguageTab>
  )
}

export default injectIntl(FolderAppointment)
