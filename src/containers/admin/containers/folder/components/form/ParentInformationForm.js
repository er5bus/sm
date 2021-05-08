import React, { useEffect } from 'react'
import { injectIntl } from 'react-intl'
import _ from 'lodash'

import { shallowEqual, useSelector, useDispatch } from 'react-redux'
import { parentInformationFieldsAr, parentInformationFieldsFr, parentInformationFields } from './fields/parentInformationFields'

import { AccordionFormView, DynamicForm, LanguageTab, RenderFields } from './../../../../../../components/partials/controls'
import { editFolderParentInformation, fetchFolderParentInformation, createFolderParentInformation, clearStore } from './../../store/actions'

//import routes from './../../routes/details'

const PARENT_SECTIONS = [
  {
    title: 'FOLDER.FATHER.TITLE',
    type: 1
  },
  {
    title: 'FOLDER.MOTHER.TITLE',
    type: 2
  },
  {
    title: 'FOLDER.GODFATHER.TITLE',
    type: 3
  }
]

const ParentInformationForm = (props) => {
  const { intl,/* history, /*goBackToList,*/ params = undefined } = props

  const dispatch = useDispatch()
  const { parentInformationToEdit, isLoading, error, success } = useSelector(
    (state) => ({
      parentInformationToEdit: state.admin.folder.folderExtraData,
      isFetching: state.admin.folder.isFetching,
      success: state.admin.folder.success,
      error: state.admin.folder.error,
      isLoading: state.admin.folder.isLoading
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchFolderParentInformation(params))
    }

    // eslint-disable-next-line
  }, [])

  const getParent = (parentType, parentInformations) => {
    return _.isArray(parentInformations)
      ? parentInformations.find((parentInfo) => parentInfo.parentType === parentType)
      : ((!_.isEmpty(parentInformations) && parentInformations.parentType === parentType) ? { ...parentInformationToEdit } : null)
  }

  const saveParentInformation = (parentType) => (values) => {
    const parentObj = getParent(parentType, parentInformationToEdit)
    if (!_.isEmpty(parentObj) && _.has(parentObj, 'id')) {
      dispatch(editFolderParentInformation({ params, parentParam: parentObj.id }, { ...values, parentType }))
    } else {
      dispatch(createFolderParentInformation(params, { ...values, parentType }))
    }
  }

  /*const goToDisplay = () => {
    history.push(routes.parentInformationDisplay.path.replace(':param', params.param))
  }*/

  const fieldsFr = parentInformationFieldsFr({ intl })
  const fieldsAr = parentInformationFieldsAr({ intl })
  const fields = parentInformationFields({ intl })

  return (
    <>
      {PARENT_SECTIONS.map((section, i) => (
        <AccordionFormView
          key={i}
          hide={i !== 0}
          successMsg={[
            { condition: success.isCreated, label: intl.formatMessage({ id: 'FOLDER.NEW.MSG' }) },
            { condition: success.isUpdated, label: intl.formatMessage({ id: 'FOLDER.EDIT.MSG' }) }
          ]}
          error={error}
          onClose={clearStore}
          title={intl.formatMessage({ id: section.title })}
          isLoading={isLoading}
        >
          {({ saveRef }) => (
            <LanguageTab>
              {({ isFr, isAr }) => (
                <DynamicForm
                  className='mt-5'
                  initialValues={getParent(section.type, parentInformationToEdit)}
                  onSubmit={saveParentInformation(section.type)}
                >
                  <RenderFields fields={fieldsFr} show={isFr} />
                  <RenderFields fields={fieldsAr} show={isAr} />
                  <RenderFields fields={fields} show />
                  <button ref={saveRef} className='d-none' type='submit' />
                </DynamicForm>
              )}
            </LanguageTab>
          )}
        </AccordionFormView>

      ))}
    </>
  )
}

export default injectIntl(ParentInformationForm)
