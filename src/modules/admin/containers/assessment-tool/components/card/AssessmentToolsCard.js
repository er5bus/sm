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

import AssessmentToolsTable from "./../table/AssessmentToolsTable"
import AssessmentTooling from "./../grouping/AssessmentTooling"
import { useAssessmentToolsUIContext } from "./../../context/AssessmentToolsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const AssessmentToolCard = () => {

  const assessmentToolsUIProps = useAssessmentToolsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.assessmentTool.success,
      error: state.admin.assessmentTool.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isUpdated, label: <FormattedMessage  id="ASSESSMENT_TOOL.EDIT.MSG" /> },
          { condition: success.isCreated, label: <FormattedMessage id="ASSESSMENT_TOOL.NEW.MSG" /> },
          { condition: success.isActivated, label: <FormattedMessage id="ASSESSMENT_TOOL.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="ASSESSMENT_TOOL.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ASSESSMENT_TOOL.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={assessmentToolsUIProps.newAssessmentToolRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary mx-2"
                onClick={assessmentToolsUIProps.newAssessmentToolButtonClick}
              >
                <FormattedMessage id="ASSESSMENT_TOOL.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={assessmentToolsUIProps.newAssessmentToolRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={assessmentToolsUIProps.openAssessmentToolImportDialog}
              >
                <FormattedMessage id="ASSESSMENT_TOOL.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {assessmentToolsUIProps.ids.length > 0 && <AssessmentTooling />}
          <AssessmentToolsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default AssessmentToolCard
