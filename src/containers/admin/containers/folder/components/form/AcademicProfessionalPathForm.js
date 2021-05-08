import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormView, LanguageTab, } from "./../../../../../../components/partials/controls"
import { AcademicProfessionalPathFieldsAr, AcademicProfessionalPathFieldsFr } from "./fields/academicProfessionalPathFields"
import { DynamicForm, RenderFields } from "./../../../../../../components/partials/controls"
import { clearStore, editFolderAcademicProfessionalPath, fetchFolderAcademicProfessionalPath } from "./../../store/actions"
import routes from "./../../routes/details"


const FolderAcademicProfessionalPathForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props
  const dispatch = useDispatch()

  const { folderAcademicProfessionalPathToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      folderAcademicProfessionalPathToEdit: state.admin.folder.folderExtraData,
      isFetching: state.admin.folder.isFetching,
      isLoading: state.admin.folder.isLoading,
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchFolderAcademicProfessionalPath(params))
    }
  }, [params, intl, dispatch])

  const saveFolderAcademicProfessionalPath = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    dispatch(editFolderAcademicProfessionalPath(params, values))
  }

  const goToDisplay = () => {
    history.push(routes.academicProfessionalPathDisplay.path.replace(":param", params.param))
  }

  const fieldsFr = AcademicProfessionalPathFieldsFr({ intl })
  const fieldsAr = AcademicProfessionalPathFieldsAr({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={goToDisplay}
      title={ intl.formatMessage({ id: "FOLDER.ACADEMIC_PROFESSIONAL_PATH.EDIT.TITLE" }) }
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "FOLDER.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "FOLDER.EDIT.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              initialValues={folderAcademicProfessionalPathToEdit}
              onSubmit={saveFolderAcademicProfessionalPath}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
          ) }
        </LanguageTab>
      ) }
    </FormView>
  )
}

export default injectIntl(FolderAcademicProfessionalPathForm)
