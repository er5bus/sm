import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import familyMemberFields from "./fields/familyMemberFields"
import { fetchFamilyMembers }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { useFamilyMembersUIContext } from "../../context/FamilyMembersUIContext"


const FamilyMemberTable = ({ intl, folderParam }) => {
  // FamilyMembers UI Context
  const familyMembersUIProps = useFamilyMembersUIContext()

  const columns = familyMemberFields({ intl, familyMembersUIProps })

  // Getting curret state of familyMembers list from store (Redux)
  const { totalSize, familyMembers: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.familyMember }),
    shallowEqual
  )
  // FamilyMembers Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    familyMembersUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchFamilyMembers({ ...(familyMembersUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [familyMembersUIProps.queryParams, dispatch])

  return (
    <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={familyMembersUIProps.queryParams}
        onQueryParamsChange={familyMembersUIProps.setQueryParams}
      />
  )
}

//ids={familyMembersUIProps.ids}
//setIds={familyMembersUIProps.setIds}

export default injectIntl(FamilyMemberTable)
