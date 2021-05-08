import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { personalDataFieldsAr, personalDataFieldsFr, personalDataFields } from './fields/personalDataFields'

import { DynamicForm, FormView, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { editFolderPersonalData, createFolderPersonalData, fetchFolderPersonalData, clearStore } from './../../store/actions'

import routes from './../../routes/details'

const PersonalDataForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { personalDataToEdit, error, success, isLoading } = useSelector(
    (state) => ({
      success: state.admin.folder.success,
      error: state.admin.folder.error,
      personalDataToEdit: state.admin.folder.folderExtraData,
      isLoading: state.admin.folder.isLoading
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchFolderPersonalData(params))
    }

    // eslint-disable-next-line
  }, [])

  const savePersonalData = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    if (!_.isEmpty(params)) {
      dispatch(editFolderPersonalData(params, values))
    } else {
      dispatch(createFolderPersonalData(values))
    }
  }

  const goToDisplay = () => {
    history.push(routes.personalDataDisplay.path.replace(':param', params.param))
  }

  const fieldsFr = personalDataFieldsFr({ intl })
  const fieldsAr = personalDataFieldsAr({ intl })
  const fields = personalDataFields({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={params.param && goToDisplay}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: 'FOLDER.NEW.MSG' }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: 'FOLDER.EDIT.MSG' }) }
      ]}
      error={error}
      onClose={clearStore}
      title={intl.formatMessage({ id: (_.isEmpty(params) ? 'FOLDER.NEW.TITLE' : 'FOLDER.EDIT.TITLE') })}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className='mt-5'
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && personalDataToEdit}
              onSubmit={savePersonalData}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <RenderFields fields={fields} show />
              <button ref={saveRef} className='d-none' type='submit' />
            </DynamicForm>
          )}
        </LanguageTab>
      )}
    </FormView>
  )
}

export default injectIntl(PersonalDataForm)
