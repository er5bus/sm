import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { FormRepeater, FormRepeaterFields, FormView, LanguageTab } from "../../../../../../components/partials/controls"

import { partnershipFieldsAr, partnershipFieldsFr, partnershipFields } from "./fields/partnershipFields"
import { partnershipContactFieldsAr, partnershipContactFieldsFr, partnershipContactFields } from "./fields/partnershipContactsFields"

import { DynamicForm, RenderFields } from "../../../../../../components/partials/controls"
import { editPartnership, createPartnership, fetchPartnershipExtraData, clearStore } from "../../store/actions"

import routes from "../../routes/display"

const PartnershipForm = (props) => {

  const { intl, history, goBackToList, params = undefined } = props

  const dispatch = useDispatch()
  const { partnershipToEdit, error, success, isLoading } = useSelector(
    (state) => ({
      error: state.admin.partnership.error,
      success: state.admin.partnership.success,
      partnershipToEdit: state.admin.partnership.partnershipExtraData,
      isLoading: state.admin.partnership.isLoading,
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)) {
      dispatch(fetchPartnershipExtraData(params))
    }
  }, [params, dispatch])

  const savePartnership = (values) => {
    if (_.isEmpty(params)){
      dispatch(createPartnership(values))
    }else {
      dispatch(editPartnership(params, values))
    }
  }

  const goToShow = () => {
    history.push(routes.partnershipDisplay.path.replace(":param", params.param))
  }

  const fieldsFr = partnershipFieldsFr({ intl })
  const fieldsAr = partnershipFieldsAr({ intl })
  const fields = partnershipFields({ intl })

  const contactFieldsFr = partnershipContactFieldsFr({ intl })
  const contactFieldsAr = partnershipContactFieldsAr({ intl })
  const contactFields = partnershipContactFields({ intl })

  return (
    <FormView
      goBackTo={goBackToList}
      goToDisplay={ !_.isEmpty(params) && goToShow }
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "PARTNERSHIP.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "PARTNERSHIP.EDIT.MSG" }) }
      ]}
      error={error}
      onClose={clearStore}
      title={
        intl.formatMessage({ id: _.isEmpty(params) ? "PARTNERSHIP.NEW.TITLE" : "PARTNERSHIP.EDIT.TITLE" })
      }
      isLoading={isLoading}
    >
      { ({ saveRef }) => (
        <LanguageTab>
          { ({ isFr, isAr }) => (
            <DynamicForm
              className="mt-5"
              clearValuesAfterSubmit={success.isCreated}
              initialValues={!_.isEmpty(params) && partnershipToEdit}
              onSubmit={savePartnership}
            >
              <RenderFields fields={fieldsFr} show={isFr} />
              <RenderFields fields={fieldsAr} show={isAr} />
              <RenderFields fields={fields} show={true} />

              <FormRepeater max={10} min={1} label={ intl.formatMessage({ id: "PARTNERSHIP.INPUT.CONTACT" }) }>
                <FormRepeaterFields fields={contactFieldsFr} show={isFr} />
                <FormRepeaterFields fields={contactFieldsAr} show={isAr} />
                <FormRepeaterFields fields={contactFields} show={true} />
              </FormRepeater>

              <button ref={saveRef} className="d-none" type="submit"></button>
            </DynamicForm>
          ) }
        </LanguageTab>
      ) }
    </FormView>
  )
}

export default injectIntl(PartnershipForm)
