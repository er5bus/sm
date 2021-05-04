import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'
import { shallowEqual, useSelector, useDispatch } from 'react-redux'

import { exitCourseFieldsAr, exitCourseFieldsFr, exitCourseFields } from './fields/exitCourseFields'
import { DynamicForm, FormView, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { clearStore, editExitCourse, fetchExitCourse } from './../../store/actions'
import routes from './../../routes/details'

const ExitCourseForm = (props) => {
  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { exitCourseToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      exitCourseToEdit: state.admin.folder.folderExtraData,
      isFetching: state.admin.folder.isFetching,
      success: state.admin.folder.success,
      error: state.admin.folder.error,
      isLoading: state.admin.folder.isLoading
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchExitCourse(params))
    }
  }, [params, intl, dispatch])

  const saveExitCourse = (fieldValues) => {
    const values = _.cloneDeep(fieldValues)
    dispatch(editExitCourse(params, values))
  }

  const goToDisplay = () => {
    history.push(routes.exitCourseDisplay.path.replace(':param', params.param))
  }

  const fields = exitCourseFields({ intl })
  const fieldsFr = exitCourseFieldsFr({ intl })
  const fieldsAr = exitCourseFieldsAr({ intl })

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
      title={intl.formatMessage({ id: 'FOLDER.EXIT_COURSE.EDIT.TITLE' })}
      isLoading={isLoading}
    >
      {({ saveRef }) => (
        <LanguageTab>
          {({ isFr, isAr }) => (
            <DynamicForm
              className='mt-5'
              initialValues={!_.isEmpty(params) && exitCourseToEdit}
              onSubmit={saveExitCourse}
            >
              <RenderFields fields={fields} />
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

export default injectIntl(ExitCourseForm)
