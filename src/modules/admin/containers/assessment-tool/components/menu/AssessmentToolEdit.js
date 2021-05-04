import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { fetchAssessmentTool } from "./../../store/actions"
import menuItems from "./items/edit"
import {Menu} from "../../../../../../components/partials"
import AssessmentToolInformation from "./AssessmentToolInformation"

const EditAssessmentTool = ({ param, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { assessmentTool } = useSelector(
    (state) => ({
      refresh: state.admin.assessmentTool.refresh,
      isFetching: state.admin.assessmentTool.isFetching,
      assessmentTool: state.admin.assessmentTool.assessmentTool
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(assessmentTool) || assessmentTool.id !== param) {
      dispatch(fetchAssessmentTool({ param }))
    }

    // eslint-disable-next-line
  }, [])

  const items = menuItems({ intl, param })

  return (<Menu items={items}>
    <AssessmentToolInformation assessmentTool={assessmentTool} param={param} />
  </Menu>
  )
}


export default injectIntl(EditAssessmentTool)
