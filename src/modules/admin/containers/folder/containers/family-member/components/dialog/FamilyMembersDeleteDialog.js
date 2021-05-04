/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../../../components/partials"
import { useFamilyMembersUIContext } from "../../context/FamilyMembersUIContext"
import {fetchFamilyMembers, deleteFamilyMembers} from "../../store/actions"


const FamilyMembersDeleteDialog = ({ show, onHide }) => {
  // FamilyMembers UI Context
  const familyMembersUIProps = useFamilyMembersUIContext()
  
  // FamilyMembers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.familyMember.isLoading, success: state.admin.familyMember.success }),
    shallowEqual
  )

  const onDeleteFamilyMembers = () => {
    // server request for deleting familyMember by seleted ids
    dispatch(deleteFamilyMembers(familyMembersUIProps.ids))
  }

  const onRefresh = () => {
    familyMembersUIProps.setIds([])
    dispatch(fetchFamilyMembers(familyMembersUIProps.queryParams))
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteFamilyMembers}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="FAMILY_MEMBER.MULTIPLE_DELETE.TITLE" />}
      body={<FormattedMessage id="FAMILY_MEMBER.MULTIPLE_DELETE.MSG" />}
    />
  )
}


export default FamilyMembersDeleteDialog
