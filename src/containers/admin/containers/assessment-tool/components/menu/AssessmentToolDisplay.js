import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { fetchAssessmentTool } from "./../../store/actions"
import {Menu} from "../../../../../../components/partials"
import menuItems from "./items/display"
import AssessmentToolInformation from "./AssessmentToolInformation"

const AssessmentToolDisplay = ({ param, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { assessmentTool } = useSelector(
    (state) => ({
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


export default injectIntl(AssessmentToolDisplay)
