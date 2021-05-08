/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { ShowView } from "../../../../components/partials/controls"
import AptitudeSkill from "./components/display/AptitudeSkill"
import { useSubheader } from "../../../../components/layout"
import { fetchAptitudeSkill, clearStore } from "./store/actions"
import routes from "./../../routes"

const AptitudeSkillShow = ({ history, match: { params = null }, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const _title = intl.formatMessage({ id: "APTITUDE_SKILL.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, aptitudeSkillForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.aptitudeSkill.isFetching,
      aptitudeSkillForShow: state.admin.aptitudeSkill.aptitudeSkill,
      error: state.admin.aptitudeSkill.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchAptitudeSkill(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackToAptitudeSkillsList = () => {
    history.push(routes.aptitudeSkillList.path)
  }

  return (
    <ShowView 
      title={_title}
      goBackTo={goBackToAptitudeSkillsList}
      onClose={clearStore}
      error={error}
    >
      <AptitudeSkill error={error} isFetching={isFetching} aptitudeSkill={aptitudeSkillForShow} />
    </ShowView>
  )
}

export default injectIntl(AptitudeSkillShow)
