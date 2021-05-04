import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import skillsEvaluationFolderFields from "./fields/skillsEvaluationFolderFields"
import { fetchSkillsEvaluations }  from "../../store/actions"
import { DataTable } from "../../../../../../../../components/partials/controls"
import { useSkillsEvaluationsUIContext } from "../../context/SkillsEvaluationsUIContext"


const SkillsEvaluationTable = ({ intl, folderParam }) => {
  // SkillsEvaluations UI Context
  const skillsEvaluationFoldersUIProps = useSkillsEvaluationsUIContext()

  const columns = skillsEvaluationFolderFields({ intl, skillsEvaluationFoldersUIProps })

  // Getting curret state of skillsEvaluationFolders list from store (Redux)
  const { totalSize, skillsEvaluationFolders: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.skillsEvaluationFolder }),
    shallowEqual
  )
  // SkillsEvaluations Redux state
  const dispatch = useDispatch()
  useEffect(() => {
    // clear selections list
    skillsEvaluationFoldersUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchSkillsEvaluations({ ...(skillsEvaluationFoldersUIProps.queryParams || {}), param: folderParam }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [skillsEvaluationFoldersUIProps.queryParams, dispatch])

  return (
    <DataTable
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={skillsEvaluationFoldersUIProps.queryParams}
        onQueryParamsChange={skillsEvaluationFoldersUIProps.setQueryParams}
      />
  )
}

//ids={skillsEvaluationFoldersUIProps.ids}
//setIds={skillsEvaluationFoldersUIProps.setIds}

export default injectIntl(SkillsEvaluationTable)
