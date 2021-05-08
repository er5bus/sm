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

import AptitudeSkillsTable from "./../table/AptitudeSkillsTable"
import AptitudeSkillGrouping from "./../grouping/AptitudeSkillGrouping"
import { useAptitudeSkillsUIContext } from "./../../context/AptitudeSkillsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const AptitudeSkillCard = () => {

  const aptitudeSkillsUIProps = useAptitudeSkillsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.aptitudeSkill.success,
      error: state.admin.aptitudeSkill.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="APTITUDE_SKILL.MSG.ACTIVATED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="APTITUDE_SKILL.NEW.MSG" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="APTITUDE_SKILL.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="APTITUDE_SKILL.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={aptitudeSkillsUIProps.newAptitudeSkillRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={aptitudeSkillsUIProps.newAptitudeSkillButtonClick}
              >
                <FormattedMessage id="APTITUDE_SKILL.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={aptitudeSkillsUIProps.newAptitudeSkillRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={aptitudeSkillsUIProps.openAptitudeSkillImportDialog}
              >
                <FormattedMessage id="APTITUDE_SKILL.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {aptitudeSkillsUIProps.ids.length > 0 && <AptitudeSkillGrouping />}
          <AptitudeSkillsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default AptitudeSkillCard
