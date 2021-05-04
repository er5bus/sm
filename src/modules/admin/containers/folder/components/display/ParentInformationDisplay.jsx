import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty, isEqual, isArray } from "lodash"

import { useSelector, useDispatch } from "react-redux"
import { fetchFolderParentInformation } from "./../../store/actions"
import { AccordionShowView, LanguageTab, DisplayItems, RenderItems } from "./../../../../../../components/partials/controls"
import { parentInformationFields, parentInformationFieldsFr, parentInformationFieldsAr } from "./fields/parentInformationFields"
//import routesForm from "./../../routes/forms"

const PARENT_SECTIONS = [
  {
    title: "FOLDER.FATHER.TITLE",
    parentType: 1,
    object: {},
    isFetching: true
  },
  {
    title: "FOLDER.MOTHER.TITLE",
    parentType: 2,
    object: {},
    isFetching: true
  },
  {
    title: "FOLDER.GODFATHER.TITLE",
    parentType: 3,
    object: {},
    isFetching: true
  },
]

const ParentInformation = ({ params, /*history, goBackToList,*/ intl }) => {

  // Tabs
  const dispatch = useDispatch()

  const fieldsFr = parentInformationFieldsFr({ intl })
  const fieldsAr = parentInformationFieldsAr({ intl })
  const fields = parentInformationFields({ intl })

  const { items, error } = useSelector(
    (state) => {
      const parentInformations = state.admin.folder.folderExtraData
      let items = PARENT_SECTIONS
      if (parentInformations && isArray(parentInformations)) {
        items = PARENT_SECTIONS.reduce((acc, section) => {
          const object = parentInformations.find((parent) => parent.parentType === section.parentType)
          acc = [ ...acc, { ...section, object: object || { empty: true }, isFetching: isEmpty(object) } ]
          return acc
        }, [])
      }
      return ({
        error: state.admin.folder.error,
        items
      })
    },
    isEqual
  )

  /*const goToEdit = () => {
    history.push(routesForm.parentInformationForm.path.replace(":param", params.param))
  }*/

  useEffect(() => {
    dispatch(fetchFolderParentInformation(params))

    // eslint-disable-next-line
  }, [])

  return (
    <>
      { items && isArray(items) && items.map((item, idx) => (
        <AccordionShowView
          key={idx}
          hide={idx !== 0}
          title={intl.formatMessage({ id: item.title })}
        >
          <LanguageTab>
            { ({ isFr, isAr }) => (
              <DisplayItems
                error={error}
                isFetching={item.isFetching}
                object={item.object}
              >
                <RenderItems fields={fieldsAr} show={isAr} />
                <RenderItems fields={fieldsFr} show={isFr} />
                <RenderItems fields={fields} />
              </DisplayItems>
            ) }
          </LanguageTab>
        </AccordionShowView>
      )) }
    </>
  )
}

export default injectIntl(ParentInformation)
