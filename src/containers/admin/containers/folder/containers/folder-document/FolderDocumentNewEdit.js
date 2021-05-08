/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import * as qs from 'query-string'
import FolderDocumentForm from "./components/form/FolderDocumentForm"
import { createFolderDocument, clearStore, editFolderDocument, fetchFolderDocument } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
import { getBasePath } from "./routes"


const FolderDocument = ({ history, location, params = null, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const basePath = getBasePath()

  const _title = !_.isEmpty(params.documentParam) ? intl.formatMessage({ id: "FOLDER_DOCUMENT.EDIT.TITLE" }) : intl.formatMessage({ id: "FOLDER_DOCUMENT.NEW.TITLE" })

  useEffect(() => {
    suhbeader.setTitle(_title)
  })

  const [prefilledFolderDocumentForAdd, setPrefilledFolderDocumentForAdd] = useState({})
  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, folderDocumentForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.folderDocument.isLoading,
      folderDocumentForEdit: state.admin.folderDocument.folderDocument,
      success: state.admin.folderDocument.success,
      error: state.admin.folderDocument.error
    }),
    shallowEqual
  )

  const saveFolderDocument = (values) => {
    if (_.isEmpty(params.documentParam)) {
      dispatch(createFolderDocument(params, values))
    } else {
      dispatch(editFolderDocument(params, values))
    }
  }

  useEffect(() => {
    if (location.search){
      const query = qs.parse(location.search, { interpretNumericEntities: true })
      Object.keys(query).forEach((key) => {
        query[key] = isNaN(query[key]) ? query[key] : parseInt(query[key])
      })
      setPrefilledFolderDocumentForAdd(query)
    }

    // eslint-disable-next-line
  }, [])

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  useEffect(() => {
    if ((success.isCreated || success.isUpdated) && !_.isEmpty(params)  ) {
      //history.goBack()
    }

    // eslint-disable-next-line
  }, [success, params])

  useEffect(() => {
    if (!_.isEmpty(params.documentParam)){
      dispatch(fetchFolderDocument(params))
    }

    // eslint-disable-next-line
  }, [])

  return (
    <FormView
      goBackTo={goBackTo}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "FOLDER_DOCUMENT.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "FOLDER_DOCUMENT.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<FolderDocumentForm
        isLoading={isLoading}
        success={success.isCreated}
        folderDocument={ !_.isEmpty(params.documentParam) ? folderDocumentForEdit : prefilledFolderDocumentForAdd}
        onSubmit={saveFolderDocument}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(FolderDocument))
