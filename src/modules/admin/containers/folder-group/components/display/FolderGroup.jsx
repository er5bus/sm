import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { useSubheader } from "../../../../../../components/layout"
import { fetchFolderGroup, clearStore } from "./../../store/actions"
import routes from "./../../../../routes"

import {
  ShowView,
  DisplayItems,
  LanguageTab,
  RenderItems
} from "./../../../../../../components/partials/controls"
import { folderGroupFields, folderGroupFieldsFr, folderGroupFieldsAr } from "./fields/folderGroupFields"

const FolderGroupTemplate = ({ intl, params, history }) => {

  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "FOLDER_GROUP.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  const { isFetching, folderGroupForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.folderGroup.isFetching,
      folderGroupForShow: state.admin.folderGroup.folderGroup,
      error: state.admin.folderGroup.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchFolderGroup(params))

    // eslint-disable-next-line
  }, [])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goToEdit = () => {
    history.push(routes.folderGroupEdit.path.replace(":param", params.param))
  }

  const fields = folderGroupFields({ intl })
  const fieldsFr = folderGroupFieldsFr({ intl })
  const fieldsAr = folderGroupFieldsAr({ intl })

  const goBackToFolderGroupsList = () => {
    history.push(routes.folderGroupList.path)
  }

  return (
    <ShowView
      title={_title}
      goBackTo={goBackToFolderGroupsList}
      onClose={clearStore}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        {
          ({ isFr, isAr }) => (
            <DisplayItems
              error={error}
              isFetching={isFetching}
              object={folderGroupForShow}
            >
              <RenderItems fields={fieldsAr} show={isAr} />
              <RenderItems fields={fieldsFr} show={isFr} />
              <RenderItems fields={fields} />
            </DisplayItems>
          )
        }

      </LanguageTab>

    </ShowView>
  )

}

export default injectIntl(FolderGroupTemplate)
