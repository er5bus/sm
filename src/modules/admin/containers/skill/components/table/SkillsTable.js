import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import skillColumn from "./fields/skillFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchSkills }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useSkillsUIContext } from "../../context/SkillsUIContext"

const SkillTable = ({ intl }) => {
  // Skills UI Context
  const skillsUIProps = useSkillsUIContext()
  
  const columns = skillColumn({ intl, skillsUIProps })

  // Getting curret state of skills list from store (Redux)
  const { totalSize, skills: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.skill }),
    shallowEqual
  )
  // Skills Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    skillsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchSkills({ ...(skillsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={skillsUIProps.queryParams}
        onQueryParamsChange={skillsUIProps.setQueryParams}
        ids={skillsUIProps.ids}
        setIds={skillsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(SkillTable)
