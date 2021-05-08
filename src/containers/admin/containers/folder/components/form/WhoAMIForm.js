import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { WhoAMIFieldsAr, WhoAMIFieldsFr } from './fields/whoAMIFields'
import { DynamicForm, FormView, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { clearStore, editFolderHowAmI, fetchFolderHowAmI } from './../../store/actions'
import routes from './../../routes/details'

const FolderHowAmIForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { FolderHowAmIToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      FolderHowAmIToEdit: state.admin.folder.folderExtraData,
      isFetching: state.admin.folder.isFetching,
      success: state.admin.folder.success,
      error: state.admin.folder.error,
      isLoading: state.admin.folder.isLoading
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchFolderHowAmI(params))
    }
  }, [params, intl, dispatch])

  const saveFolderHowAmI = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    dispatch(editFolderHowAmI(params, values))
  }

  const goToDisplay = () => {
    history.push(routes.whoAmIDisplay.path.replace(':param', params.param))
  }

  const fieldsFr = WhoAMIFieldsFr({ intl })
  const fieldsAr = WhoAMIFieldsAr({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: 'FOLDER.NEW.MSG' }) },
        { condition: success.isCreated, label: intl.formatMessage({ id: 'FOLDER.EDIT.MSG' }) }
      ]}
      error={error}
      onClose={clearStore}
      goToDisplay={goToDisplay}
      title={intl.formatMessage({ id: 'FOLDER.HOWAMI.EDIT.TITLE' })}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className='mt-5'
              initialValues={!_.isEmpty(params) && FolderHowAmIToEdit}
              onSubmit={saveFolderHowAmI}
            >
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

export default injectIntl(FolderHowAmIForm)
