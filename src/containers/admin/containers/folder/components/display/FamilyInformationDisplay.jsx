import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchFolderFamilyInformation } from "./../../store/actions"
import routesForm from "./../../routes/forms"
import { familyInformationFields, familyInformationFieldsFr, familyInformationFieldsAr } from "./fields/familyInformationFields"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const FamilyInformation = ({ params, history, goBackToList, intl }) => {

  // Tabs
  const dispatch = useDispatch()

  const fieldsFr = familyInformationFieldsFr({ intl })
  const fieldsAr = familyInformationFieldsAr({ intl })
  const fields = familyInformationFields({ intl })

  const { isFetching, error, item } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.familyInformationForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchFolderFamilyInformation(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "FAMILY_INFORMATION.SHOW.TITLE" })}
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        { ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={item}
          >
            <RenderItems fields={fields} />
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(FamilyInformation)
