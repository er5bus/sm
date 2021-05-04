import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import { fetchSkill } from "./../../store/actions"

import menuItems from "./items/display"
import SkillInformation from "./SkillInformation"
import {Menu} from "../../../../../../components/partials"

const SkillDisplay = ({ param, intl }) => {
  const dispatch = useDispatch()

  const { skill } = useSelector(
    (state) => ({
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
    <SkillInformation skill={skill} param={param} />
  </Menu>
  )
}

export default injectIntl(SkillDisplay)
