import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchFolderActionPlan } from "../../store/actions"

import { folderActionPlanFields, folderActionPlanFieldsFr, folderActionPlanFieldsAr } from "./fields/folderActionPlanFields"
import routesForm from "../../routes/forms"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const FolderActionPlan = ({ params, history, goBackToList, intl }) => {

  const dispatch = useDispatch()

  const fieldsFr = folderActionPlanFieldsFr({ intl })
  const fieldsAr = folderActionPlanFieldsAr({ intl })
  const fields = folderActionPlanFields({ intl })

  const { isFetching, item, error } = useSelector(
    (state) => ({
      error: state.admin.folder.error,
      isFetching: state.admin.folder.isFetching,
      item: state.admin.folder.folderExtraData,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.actionPlanForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchFolderActionPlan(params))
    // eslint-disable-next-line
  }, [])


  return (
    <ShowView
      error={error}
      title={intl.formatMessage({ id: "FOLDER.ACTION_PLAN.TITLE" })}
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
            <RenderItems fields={fields} />
          </DisplayItems>
        ) }
      </LanguageTab>
    </ShowView>
  )
}

export default injectIntl(FolderActionPlan)
