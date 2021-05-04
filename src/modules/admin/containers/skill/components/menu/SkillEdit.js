import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import menuItems from "./items/edit"

import { fetchSkill } from "./../../store/actions"
import {Menu} from "../../../../../../components/partials"
import SkillInformation from "./SkillInformation"

const EditSkill = ({ param, intl }) => {
  
  const dispatch = useDispatch()
  const { skill } = useSelector(
    (state) => ({
      refresh: state.admin.skill.refresh,
      isFetching: state.admin.skill.isFetching,
      skill: state.admin.skill.skill
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(skill) || skill.id !== param) {
      dispatch(fetchSkill({ param }))
    }

    // eslint-disable-next-line
  }, [])

  const items = menuItems({ intl, param })

  return (<Menu items={items}>
    <SkillInformation skill={skill} />
  </Menu>
  )
}

export default injectIntl(EditSkill)
