import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import aptitudeSkillColumn from "./fields/aptitudeSkillFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchAptitudeSkills }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useAptitudeSkillsUIContext } from "../../context/AptitudeSkillsUIContext"

const AptitudeSkillTable = ({ intl }) => {
  // AptitudeSkills UI Context
  const aptitudeSkillsUIProps = useAptitudeSkillsUIContext()
  
  const columns = aptitudeSkillColumn({ intl, aptitudeSkillsUIProps })

  // Getting curret state of aptitudeSkills list from store (Redux)
  const { totalSize, aptitudeSkills: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.aptitudeSkill }),
    shallowEqual
  )
  // AptitudeSkills Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    aptitudeSkillsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchAptitudeSkills({ ...(aptitudeSkillsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [aptitudeSkillsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={aptitudeSkillsUIProps.queryParams}
        onQueryParamsChange={aptitudeSkillsUIProps.setQueryParams}
        ids={aptitudeSkillsUIProps.ids}
        setIds={aptitudeSkillsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(AptitudeSkillTable)
