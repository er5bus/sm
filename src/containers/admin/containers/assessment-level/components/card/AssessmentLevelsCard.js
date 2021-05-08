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

import AssessmentLevelsTable from "./../table/AssessmentLevelsTable"
import AssessmentLevelGrouping from "./../grouping/AssessmentLevelGrouping"
import { useAssessmentLevelsUIContext } from "./../../context/AssessmentLevelsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const AssessmentLevelCard = () => {

  const assessmentLevelsUIProps = useAssessmentLevelsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.assessmentLevel.success,
      error: state.admin.assessmentLevel.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="ASSESSMENT_LEVEL.MSG.ACTIVATED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="ASSESSMENT_LEVEL.NEW.MSG" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="ASSESSMENT_LEVEL.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ASSESSMENT_LEVEL.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={assessmentLevelsUIProps.newAssessmentLevelRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={assessmentLevelsUIProps.newAssessmentLevelButtonClick}
              >
                <FormattedMessage id="ASSESSMENT_LEVEL.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={assessmentLevelsUIProps.newAssessmentLevelRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={assessmentLevelsUIProps.openAssessmentLevelImportDialog}
              >
                <FormattedMessage id="ASSESSMENT_LEVEL.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {assessmentLevelsUIProps.ids.length > 0 && <AssessmentLevelGrouping />}
          <AssessmentLevelsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default AssessmentLevelCard
