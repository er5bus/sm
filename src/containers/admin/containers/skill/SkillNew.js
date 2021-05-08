/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useCallback } from "react"
import { injectIntl } from "react-intl"

import SkillForm from "./components/form/SkillForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"

const Skill = ({ history, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  suhbeader.setTitle(intl.formatMessage({ id: "SKILL.NEW.TITLE" }))

  const goBackToSkillsList = useCallback(() => {
    history.push(routes.skillList.path)
  }, [history])

  return (
    <SkillForm
      goBackToList={goBackToSkillsList}
    />
  )
}


export default injectIntl(Skill)
