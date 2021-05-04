import React, { useMemo } from "react"
import { isEqual } from "lodash"
import { useAptitudeSkillsUIContext } from "../../context/AptitudeSkillsUIContext"
import {SearchFilter} from "../../../../../../components/partials"


const AptitudeSkillsFilter = () => {
  // AptitudeSkills UI Context
  const aptitudeSkillsUIContext = useAptitudeSkillsUIContext()
  const aptitudeSkillsUIProps = useMemo(() => {
    return {
      ...aptitudeSkillsUIContext
    }
  }, [aptitudeSkillsUIContext])

  const applyFilter = (values) => {
    const newQueryParams = { ...aptitudeSkillsUIProps.queryParams, ...values }
    if (!isEqual(newQueryParams, aptitudeSkillsUIProps.queryParams)) {
      newQueryParams.pageNumber = 1
      aptitudeSkillsUIProps.setQueryParams(newQueryParams)
    }
  }

  return (
    <SearchFilter applyFilter={applyFilter} />
  )
}


export default AptitudeSkillsFilter
