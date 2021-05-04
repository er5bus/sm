import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchFolderHowAmI } from "./../../store/actions"
import { whoAMIFieldsFr, whoAMIFieldsAr } from "./fields/whoAMIFields"

import routesForm from "./../../routes/forms"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"

const FolderHowAmI = ({ params, history, goBackToList, intl }) => {

  const dispatch = useDispatch()

  const fieldsFr = whoAMIFieldsFr({ intl })
  const fieldsAr = whoAMIFieldsAr({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.whoAmIForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchFolderHowAmI(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "FOLDER.HOWAMI.SHOW.TITLE" })}
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
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(FolderHowAmI)
