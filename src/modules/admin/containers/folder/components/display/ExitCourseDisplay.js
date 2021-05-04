import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchExitCourse } from "./../../store/actions"
import { exitCourseFieldsFr, exitCourseFieldsAr, exitCourseFields } from "./fields/exitCourseFields"

import routesForm from "./../../routes/forms"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"

const FolderExitCourse = ({ params, history, goBackToList, intl }) => {

  const dispatch = useDispatch()

  const fields = exitCourseFields({ intl })
  const fieldsFr = exitCourseFieldsFr({ intl })
  const fieldsAr = exitCourseFieldsAr({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.exitCourseForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchExitCourse(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={intl.formatMessage({ id: "FOLDER.EXIT_COURSE.SHOW.TITLE" })}
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
            <RenderItems fields={fields} />
            <RenderItems fields={fieldsAr} show={isAr} />
            <RenderItems fields={fieldsFr} show={isFr} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(FolderExitCourse)
