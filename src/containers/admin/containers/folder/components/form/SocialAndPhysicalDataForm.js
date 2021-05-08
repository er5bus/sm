import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { socialAndPhysicalDataFieldsAr, socialAndPhysicalDataFieldsFr, socialAndPhysicalDataFields } from './fields/socialAndPhysicalDataFields'
import { DynamicForm, FormView, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { clearStore, editFolderSocialAndPhysicalData, fetchFolderSocialAndPhysicalData } from './../../store/actions'
import routes from './../../routes/details'

const SocialAndPhysicalDataForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { socialAndPhysicalDataToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      socialAndPhysicalDataToEdit: state.admin.folder.folderExtraData,
      isFetching: state.admin.folder.isFetching,
      isLoading: state.admin.folder.isLoading,
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchFolderSocialAndPhysicalData(params))
    }
  }, [params, intl, dispatch])

  const saveSocialAndPhysicalData = (values) => {
    dispatch(editFolderSocialAndPhysicalData(params, values))
  }

  const goToDisplay = () => {
    history.push(routes.socialAndPhysicalDataDisplay.path.replace(':param', params.param))
  }

  const fieldsFr = socialAndPhysicalDataFieldsFr({ intl })
  const fieldsAr = socialAndPhysicalDataFieldsAr({ intl })
  const fields = socialAndPhysicalDataFields({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={goToDisplay}
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
              initialValues={socialAndPhysicalDataToEdit}
              onSubmit={saveSocialAndPhysicalData}
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

export default injectIntl(SocialAndPhysicalDataForm)
