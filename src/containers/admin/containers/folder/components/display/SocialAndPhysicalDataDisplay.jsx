import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { socialAndPhysicalDataFields, socialAndPhysicalDataFieldsFr, socialAndPhysicalDataFieldsAr } from "./fields/socialAndPhysicalDataFields"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchFolderSocialAndPhysicalData } from "./../../store/actions"
import routesForm from "./../../routes/forms"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"

const SocialAndPhysicalData = ({ params, history, goBackToList, intl }) => {

  const dispatch = useDispatch()

  const fieldsFr = socialAndPhysicalDataFieldsFr({ intl })
  const fieldsAr = socialAndPhysicalDataFieldsAr({ intl })
  const fields = socialAndPhysicalDataFields({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.socialAndPhysicalDataForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchFolderSocialAndPhysicalData(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "FOLDER.SOCIAL_PHYSICAL_DATA.TITLE" })}
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

export default injectIntl(SocialAndPhysicalData)
