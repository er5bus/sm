import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { folderActionPlanFieldsAr, folderActionPlanFieldsFr, folderActionPlanFields } from './fields/folderActionPlanFields'

import { DynamicForm, FormView, LanguageTab, RenderFields } from '../../../../../../components/partials/controls'
import { clearStore, editFolderActionPlan, fetchFolderActionPlan } from '../../store/actions'

import routes from '../../routes/details'

const FolderActionPlanForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { folderActionPlanToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      folderActionPlanToEdit: state.admin.folder.folderExtraData,
      isLoading: state.admin.folder.isLoading,
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchFolderActionPlan(params))
    }
  }, [params, intl, dispatch])

  const saveFolderActionPlan = (values) => {
    dispatch(editFolderActionPlan(params, values))
  }

  const goToDisplay = () => {
    history.push(routes.actionPlanDisplay.path.replace(':param', params.param))
  }

  const fieldsFr = folderActionPlanFieldsFr({ intl })
  const fieldsAr = folderActionPlanFieldsAr({ intl })
  const fields = folderActionPlanFields({ intl })

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
      title={intl.formatMessage({ id: 'FOLDER.ACTION_PLAN.EDIT.TITLE' })}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className='mt-5'
              initialValues={folderActionPlanToEdit}
              onSubmit={saveFolderActionPlan}
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

export default injectIntl(FolderActionPlanForm)
