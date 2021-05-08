import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { familyInformationFieldsAr, familyInformationFieldsFr, familyInformationFields } from './fields/familyInformationFields'

import { DynamicForm, FormView, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { clearStore, editFolderFamilyInformation, fetchFolderFamilyInformation } from './../../store/actions'

import routes from './../../routes/details'

const FamilyInformationForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { familyInformationToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      familyInformationToEdit: state.admin.folder.folderExtraData,
      isFetching: state.admin.folder.isFetching,
      isLoading: state.admin.folder.isLoading,
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchFolderFamilyInformation(params))

    // eslint-disable-next-line
  }, [])

  const saveFamilyInformation = (values) => {
    dispatch(editFolderFamilyInformation(params, values))
  }

  const goToDisplay = () => {
    history.push(routes.familyInformationDisplay.path.replace(':param', params.param))
  }

  const fieldsFr = familyInformationFieldsFr({ intl })
  const fieldsAr = familyInformationFieldsAr({ intl })
  const fields = familyInformationFields({ intl })

  return (
    <FormView
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: 'FOLDER.NEW.MSG' }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: 'FOLDER.EDIT.MSG' }) }
      ]}
      error={error}
      onClose={clearStore}
      goBackTo={goBackToList}
      goToDisplay={goToDisplay}
      title={intl.formatMessage({ id: 'FAMILTY_INFOMATION.EDIT.TITLE' })}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className='mt-5'
              initialValues={!_.isEmpty(params) && familyInformationToEdit}
              onSubmit={saveFamilyInformation}
            >
              <RenderFields fields={fields} show />
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <button ref={saveRef} className='d-none' type='submit' />
            </DynamicForm>
          )}
        </LanguageTab>
      )}
    </FormView>
  )
}

export default injectIntl(FamilyInformationForm)
