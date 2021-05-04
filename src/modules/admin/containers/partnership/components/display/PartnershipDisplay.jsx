import React, { useEffect } from "react"
import { injectIntl } from "react-intl"

//import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchPartnershipExtraData } from "./../../store/actions"

import {  partnershipFieldsAr, partnershipFieldsFr, partnershipFields } from "./fields/partnershipFields"
import routesForm from "./../../routes/edit"
import {DisplayItems, LanguageTab, RenderItems, ShowView} from "../../../../../../components/partials"


const PersonalData = ({ params, history, goBackToList, intl }) => {

  const fieldsFr = partnershipFieldsFr({ intl })
  const fieldsAr = partnershipFieldsAr({ intl })
  const fields = partnershipFields({ intl })

  const dispatch = useDispatch()

  const { isFetching, error, item } = useSelector(
    (state) => ({
      isFetching: state.admin.partnership.isFetching,
      item: state.admin.partnership.partnership,
      error: state.admin.partnership.error,
    }),
    shallowEqual
  )

  const goToEdit = () => {
    history.push(routesForm.partnershipForm.path.replace(":param", params.param))
  }

  useEffect(() => {
    dispatch(fetchPartnershipExtraData(params))
    // eslint-disable-next-line
  }, [])

  return (
    <ShowView
      title={ intl.formatMessage({ id: "PARTNERSHIP.SHOW.TITLE" }) }
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

export default injectIntl(PersonalData)
