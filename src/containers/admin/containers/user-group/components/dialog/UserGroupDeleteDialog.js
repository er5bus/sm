/* eslint-disable no-restricted-imports */
import React from "react"
import { FormattedMessage } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { deleteUserGroup, fetchUserGroups } from "../../store/actions"
import { useUserGroupsUIContext } from "../../context/UserGroupsUIContext"
import {ActionModal} from "../../../../../../components/partials"

const UserGroupDeleteDialog = ({ params, show, onHide }) => {
  // UserGroups UI Context
  const userGroupsUIProps = useUserGroupsUIContext()

  // UserGroups Redux state
  const dispatch = useDispatch()
  const { isLoading, success } = useSelector(
    (state) => ({ isLoading: state.admin.userGroup.isLoading, success: state.admin.userGroup.success }),
    shallowEqual
  )

  // if !id we should close modal
  const onRefresh = () => {
    onHide()
    dispatch(fetchUserGroups(userGroupsUIProps.queryParams))
    userGroupsUIProps.setIds([])
  }

  const onDeleteUserGroup = () => {
    // server request for deleting userGroup by id
    dispatch(deleteUserGroup(params))
  }

  return (<ActionModal
    show={show}
    onHide={onHide}
    onRefresh={onRefresh}
    onClick={onDeleteUserGroup}
    isLoading={isLoading}
    success={success.isDeleted}
    title={<FormattedMessage id="USER_GROUP.DELETE.TITLE" />}
    body={<FormattedMessage id="USER_GROUP.DELETE.MSG" />}
  />
  )
}


export default UserGroupDeleteDialog
