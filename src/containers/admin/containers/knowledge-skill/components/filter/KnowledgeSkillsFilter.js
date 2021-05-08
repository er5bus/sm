import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useKnowledgeSkillsUIContext } from "../../context/KnowledgeSkillsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const KnowledgeSkillsFilter = () => {
  // KnowledgeSkills UI Context
  const knowledgeSkillsUIContext = useKnowledgeSkillsUIContext()
  const knowledgeSkillsUIProps = useMemo(() => {
    return {
      ...knowledgeSkillsUIContext
    }
  }, [knowledgeSkillsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...knowledgeSkillsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, knowledgeSkillsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      knowledgeSkillsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default KnowledgeSkillsFilter
