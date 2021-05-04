import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
} from "../../../../../../components/partials/controls"

import SkillsTable from "./../table/SkillsTable"
import Skilling from "./../grouping/Skilling"
import { useSkillsUIContext } from "./../../context/SkillsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const SkillCard = () => {

  const skillsUIProps = useSkillsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.skill.success,
      error: state.admin.skill.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="SKILL.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="SKILL.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="SKILL.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={skillsUIProps.newSkillRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary mx-2"
                onClick={skillsUIProps.newSkillButtonClick}
              >
                <FormattedMessage id="SKILL.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={skillsUIProps.newSkillRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={skillsUIProps.openSkillImportDialog}
              >
                <FormattedMessage id="SKILL.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {skillsUIProps.ids.length > 0 && <Skilling />}
          <SkillsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default SkillCard
