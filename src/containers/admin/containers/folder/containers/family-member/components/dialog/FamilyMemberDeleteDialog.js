/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteFamilyMember, fetchFamilyMembers } from "../../store/actions"
import { useFamilyMembersUIContext } from "../../context/FamilyMembersUIContext"
import {ActionModal} from "../../../../../../../../components/partials"

const FamilyMemberDeleteDialog = ({ params, show, onHide }) => {
  // FamilyMembers UI Context
  const familyMembersUIProps = useFamilyMembersUIContext()
  
  // FamilyMembers Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.familyMember.isLoading, success: state.admin.familyMember.success }),
    shallowEqual
  )

  const onDeleteFamilyMember = () => {
    // server request for deleting familyMember by id
    dispatch(deleteFamilyMember(params))
  }

  const onRefresh = () => {
    dispatch(fetchFamilyMembers(params))
    familyMembersUIProps.setIds([])
  }

  return (
    <ActionModal
      show={show}
      onHide={onHide}
      onRefresh={onRefresh}
      onClick={onDeleteFamilyMember}
      isLoading={isLoading}
      success={success.isDeleted}
      title={<FormattedMessage id="FAMILY_MEMBER.DELETE.TITLE" />}
      body={<FormattedMessage id="FAMILY_MEMBER.DELETE.MSG" />}
    />
  )
}


export default FamilyMemberDeleteDialog
