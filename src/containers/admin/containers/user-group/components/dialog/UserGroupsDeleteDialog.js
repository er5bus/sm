/* eslint-delete no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {ActionModal} from "../../../../../../components/partials"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"
import {fetchUserGroups, deleteUserGroups} from "../../store/actions"


const UserGroupsDeleteDialog = ({ show, onHide }) => {
  // UserGroups UI Context
  const userGroupsUIProps = useUserGroupsUIContext()

  // UserGroups Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.userGroup.isLoading, success: state.admin.userGroup.success }),
    shallowEqual
  )

  // if there weren't selected userGroups we should close modal
  const onRefresh = () => {
    onHide()
    userGroupsUIProps.setIds([])
    dispatch(fetchUserGroups(userGroupsUIProps.queryParams))
  }

  const onDeleteUserGroups = () => {
    // server request for deleting userGroup by seleted ids
    dispatch(deleteUserGroups(userGroupsUIProps.ids))
  }

  return (<ActionModal
    show={show}
    onHide={onHide}
    onRefresh={onRefresh}
    onClick={onDeleteUserGroups}
    isLoading={isLoading}
    success={success.isDeleted}
    title={<FormattedMessage id="USER_GROUP.DELETE_MULTIPLE.TITLE" />}
    body={<FormattedMessage id="USER_GROUP.DELETE_MULTIPLE.MSG" />}
  />
  )
}


export default UserGroupsDeleteDialog
