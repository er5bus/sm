/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { withRouter } from "react-router-dom"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import _ from "lodash"
import FamilyMemberForm from "./components/form/FamilyMemberForm"
import { createFamilyMember, clearStore, editFamilyMember, fetchFamilyMember } from "./store/actions"
import { useSubheader } from "../../../../../../components/layout"
import {FormView} from "../../../../../../components/partials"
import { getBasePath } from "./routes"


const FamilyMember = ({ history, params = null, intl }) => {
  // Subheader
  const suhbeader = useSubheader()

  const basePath = getBasePath()

  const _title = !_.isEmpty(params.familyMemberParam) ? intl.formatMessage({ id: "FAMILY_MEMBER.EDIT.TITLE" }) : intl.formatMessage({ id: "FAMILY_MEMBER.NEW.TITLE" })
  useEffect(() => {
    suhbeader.setTitle(_title)
  })

  const dispatch = useDispatch()

  //const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isLoading, familyMemberForEdit, success, error } = useSelector(
    (state) => ({
      isLoading: state.admin.familyMember.isLoading,
      familyMemberForEdit: state.admin.familyMember.familyMember,
      success: state.admin.familyMember.success,
      error: state.admin.familyMember.error
    }),
    shallowEqual
  )

  const saveFamilyMember = (values) => {
    if (_.isEmpty(params.familyMemberParam)) {
      dispatch(createFamilyMember(params, values))
    } else {
      dispatch(editFamilyMember(params, values))
    }
  }

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  useEffect(() => {
    if ((success.isCreated || success.isUpdated) && !_.isEmpty(params)  ) {
      //history.goBack()
    }

    // eslint-disable-next-line
  }, [success, params])

  useEffect(() => {
    if (!_.isEmpty(params.familyMemberParam)){
      dispatch(fetchFamilyMember(params))
    }

    // eslint-disable-next-line
  }, [])

  return (
    <FormView
      goBackTo={goBackTo}
      title={_title}
      onClose={clearStore}
      error={error}
      isLoading={isLoading}
      successMsg={[
        { condition: success.isCreated, label: intl.formatMessage({ id: "FAMILY_MEMBER.NEW.MSG" }) },
        { condition: success.isUpdated, label: intl.formatMessage({ id: "FAMILY_MEMBER.EDIT.MSG" }) }
      ]}
    >
      { ({ saveRef }) => (<FamilyMemberForm
        isLoading={isLoading}
        success={success.isCreated}
        familyMember={ !_.isEmpty(params.familyMemberParam) && familyMemberForEdit}
        onSubmit={saveFamilyMember}
        saveRef={saveRef}
      />
      )
      }
    </FormView>
  )
}


export default withRouter(injectIntl(FamilyMember))
