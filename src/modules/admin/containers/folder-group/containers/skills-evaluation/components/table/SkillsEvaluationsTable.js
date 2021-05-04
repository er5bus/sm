import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import skillsEvaluationFields from "./fields/skillsEvaluationFields"
import { fetchSkillsEvaluations }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { useSkillsEvaluationsUIContext } from "../../context/SkillsEvaluationsUIContext"


const SkillsEvaluationTable = ({ intl, folderParam }) => {
  // SkillsEvaluations UI Context
  const skillsEvaluationsUIProps = useSkillsEvaluationsUIContext()

  const columns = skillsEvaluationFields({ intl, skillsEvaluationsUIProps })

  // Getting curret state of skillsEvaluations list from store (Redux)
  const { totalSize, skillsEvaluations: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.skillsEvaluationGroup }),
    shallowEqual
  )
  // SkillsEvaluations Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    skillsEvaluationsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchSkillsEvaluations({ ...(skillsEvaluationsUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsEvaluationsUIProps.queryParams, dispatch])

  return (
    <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={skillsEvaluationsUIProps.queryParams}
        onQueryParamsChange={skillsEvaluationsUIProps.setQueryParams}
      />
  )
}

//ids={skillsEvaluationsUIProps.ids}
//setIds={skillsEvaluationsUIProps.setIds}

export default injectIntl(SkillsEvaluationTable)
