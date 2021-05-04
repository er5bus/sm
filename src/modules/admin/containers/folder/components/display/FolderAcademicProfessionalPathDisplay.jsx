import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchFolderAcademicProfessionalPath } from "./../../store/actions"
import routesForm from "./../../routes/forms"
import { academicProfessionalPathFieldsAr, academicProfessionalPathFieldsFr } from "./fields/academicProfessionalPathFields"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const FolderAcademicProfessionalPath = ({ params, history, goBackToList, intl }) => {

  const dispatch = useDispatch()

  const fieldsFr = academicProfessionalPathFieldsFr({ intl })
  const fieldsAr = academicProfessionalPathFieldsAr({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.academicProfessionalPathForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchFolderAcademicProfessionalPath(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "FOLDER.ACADEMIC_PROFESSIONAL_PATH.SHOW.TITLE" })}
      goBackTo={goBackToList}
      goToEdit={goToEdit}
    >
      <LanguageTab>
        { ({ isFr, isAr }) => (
          <DisplayItems
            error={error}
            isFetching={isFetching}
            object={item}
          >
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(FolderAcademicProfessionalPath)
