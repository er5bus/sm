import React, { useEffect, useCallback } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"

import { createFolderGroup, clearStore, editFolderGroup, fetchFolderGroup } from "./../../store/actions"
import { useSubheader } from "../../../../../../components/layout"
import routes from "./../../../../routes"
import {FormView} from "../../../../../../components/partials"
import { folderGroupFields, folderGroupFieldsAr, folderGroupFieldsFr } from "./fields/folderGroupFields"
import { DynamicForm, LanguageTab, RenderFields } from "./../../../../../../components/partials/controls"

const FolderGroupForm = (props) => {

  const { intl, params, history } = props

  const fieldsFr = folderGroupFieldsFr({ intl })
  const fieldsAr = folderGroupFieldsAr({ intl })
  const fields = folderGroupFields({ intl })

  let _title = _.isEmpty(params) ? intl.formatMessage({ id: "FOLDER_GROUP.NEW.TITLE" }) : intl.formatMessage({ id: "FOLDER_GROUP.EDIT.TITLE" })
  const suhbeader = useSubheader()

  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, folderGroupForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.folderGroup.isLoading,
      folderGroupForEdit: state.admin.folderGroup.folderGroup,
      success: state.admin.folderGroup.success,
      error: state.admin.folderGroup.error
    }),
    shallowEqual
  )

  const saveFolderGroup = (values) => {
    if (_.isEmpty(params)) {
      dispatch(createFolderGroup(values))
    } else {
      dispatch(editFolderGroup(params, values))
    }
  }

  const goToDisplay = () => {
    history.push(routes.folderGroupShow.path.replace(":param", params.param))
  }

  const goBackToFolderGroupsList = useCallback(() => {
    history.push(routes.folderGroupList.path)
  }, [history])

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchFolderGroup(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  useEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [folderGroupForEdit, params])

  return (
    <FormView
      goBackTo={goBackToFolderGroupsList}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      goToDisplay={!_.isEmpty(params) && goToDisplay}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "FOLDER_GROUP.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "FOLDER_GROUP.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (<DynamicForm
            className="mt-5"
            saveRef={saveRef}
            initialValues={ (!_.isEmpty(params) && !_.isEmpty(folderGroupForEdit)) && ({ ...folderGroupForEdit, folders: folderGroupForEdit.folderDetails || [] })}
            saveForm={true}
            clearValuesAfterSubmit={success.isCreated || success.isUpdated}
            saveFormName="folder-group"
            onSubmit={saveFolderGroup}
          >
            <RenderFields fields={fieldsFr} show={isFr} />
            <RenderFields fields={fieldsAr} show={isAr} />
            <RenderFields fields={fields} show={true} />
          </DynamicForm>)}
        </LanguageTab>
      ) }
    </FormView>
  )
}

export default injectIntl(withRouter(FolderGroupForm))
