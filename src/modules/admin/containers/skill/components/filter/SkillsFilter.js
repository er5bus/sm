import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useSkillsUIContext } from "../../context/SkillsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const SkillsFilter = () => {
  // Skills UI Context
  const skillsUIContext = useSkillsUIContext()
  const skillsUIProps = useMemo(() => {
    return {
      ...skillsUIContext
    }
  }, [skillsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...skillsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, skillsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      skillsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default SkillsFilter
