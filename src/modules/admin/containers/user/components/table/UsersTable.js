import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { useUsersUIContext } from "../../context/UsersUIContext"
import { fetchUsers } from "../../store/actions"
import userColumn from "./fields/userFields"
import FormControlLabel from "@material-ui/core/FormControlLabel"
import Switch from "@material-ui/core/Switch"
import {IS_DELETED} from "../../store/constants"
import {DataTable} from "../../../../../../components/partials"

const UserTable = ({ intl }) => {
  // Users UI Context
  const usersUIProps = useUsersUIContext()

  const columns = userColumn({ intl, usersUIProps })

  // Getting curret state of users list from store (Redux)
  const { totalSize, users: entities = [], isFetching } = useSelector(
    (state) => ({
      users: state.admin.user.users,
      isFetching: state.admin.user.isFetching,
      totalSize: state.admin.user.totalSize,
    }),
    shallowEqual
  )
  // Users Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    usersUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchUsers(usersUIProps.queryParams))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [usersUIProps.queryParams, dispatch])

  const filterUserByDelete = () => {
    if (usersUIProps.queryParams[IS_DELETED]){
      usersUIProps.setQueryParamsBase({[IS_DELETED]: 0})
    }else {
      usersUIProps.setQueryParamsBase({[IS_DELETED]: 1})
    }
  }

  return (
    <>
      <div className="text-right pb-2 pt-2">
        <FormControlLabel
          control={<Switch checked={Boolean(usersUIProps.queryParams[IS_DELETED])} onChange={filterUserByDelete} name="" />}
          label={ intl.formatMessage({ id: "USER.FILTER.DELETE" }) }
        />
      </div>
      <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={usersUIProps.queryParams}
        onQueryParamsChange={usersUIProps.setQueryParams}
        ids={usersUIProps.ids}
        setIds={usersUIProps.setIds}
      />
    </>
  )
}

export default injectIntl(UserTable)
