import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { ENDPOINTS } from "./../../store/constants"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchFolderPersonalData } from "./../../store/actions"
import routesForm from "./../../routes/forms"
import { personalDataFields, personalDataFieldsFr, personalDataFieldsAr } from "./fields/personalDataFields"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"

const PersonalData = ({ params, history, goBackToList, intl }) => {

  const dispatch = useDispatch()

  const fieldsFr = personalDataFieldsFr({ intl })
  const fieldsAr = personalDataFieldsAr({ intl })
  const fields = personalDataFields({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.personalDataForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchFolderPersonalData(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "FOLDER.SHOW.TITLE" })}
      goBackTo={goBackToList}
      printURL={ENDPOINTS.EXPORT_FOLDER.replace(":param", params.param)}
      goToEdit={goToEdit}
    >
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
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(PersonalData)
