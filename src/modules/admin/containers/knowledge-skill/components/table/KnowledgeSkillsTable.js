import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import knowledgeSkillColumn from "./fields/knowledgeSkillFields"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchKnowledgeSkills }  from "../../store/actions"
import { DataTable } from "../../../../../../components/partials/controls"
import { useKnowledgeSkillsUIContext } from "../../context/KnowledgeSkillsUIContext"

const KnowledgeSkillTable = ({ intl }) => {
  // KnowledgeSkills UI Context
  const knowledgeSkillsUIProps = useKnowledgeSkillsUIContext()
  
  const columns = knowledgeSkillColumn({ intl, knowledgeSkillsUIProps })

  // Getting curret state of knowledgeSkills list from store (Redux)
  const { totalSize, knowledgeSkills: entities = [], isFetching } = useSelector(
    (state) => ({ ...state.admin.knowledgeSkill }),
    shallowEqual
  )
  // KnowledgeSkills Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    // clear selections list
    knowledgeSkillsUIProps.setIds([])
    // server call by queryParams
    dispatch(fetchKnowledgeSkills({ ...(knowledgeSkillsUIProps.queryParams || {}) }))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [knowledgeSkillsUIProps.queryParams, dispatch])

  return (
    <>
      <DataTable 
        isFetching={isFetching}
        entities={entities}
        columns={columns}
        totalSize={totalSize}
        queryParams={knowledgeSkillsUIProps.queryParams}
        onQueryParamsChange={knowledgeSkillsUIProps.setQueryParams}
        ids={knowledgeSkillsUIProps.ids}
        setIds={knowledgeSkillsUIProps.setIds}
      />
    </>
  )
}


export default injectIntl(KnowledgeSkillTable)
