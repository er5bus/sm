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

import EvaluationRubricsTable from "./../table/EvaluationRubricsTable"
import EvaluationRubricGrouping from "./../grouping/EvaluationRubricGrouping"
import { useEvaluationRubricsUIContext } from "./../../context/EvaluationRubricsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const EvaluationRubricCard = () => {

  const evaluationRubricsUIProps = useEvaluationRubricsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.evaluationRubric.success,
      error: state.admin.evaluationRubric.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="EVALUATION_RUBRIC.MSG.ACTIVATED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="EVALUATION_RUBRIC.NEW.MSG" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="EVALUATION_RUBRIC.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="EVALUATION_RUBRIC.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={evaluationRubricsUIProps.newEvaluationRubricRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={evaluationRubricsUIProps.newEvaluationRubricButtonClick}
              >
                <FormattedMessage id="EVALUATION_RUBRIC.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={evaluationRubricsUIProps.newEvaluationRubricRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={evaluationRubricsUIProps.openEvaluationRubricImportDialog}
              >
                <FormattedMessage id="EVALUATION_RUBRIC.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {evaluationRubricsUIProps.ids.length > 0 && <EvaluationRubricGrouping />}
          <EvaluationRubricsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default EvaluationRubricCard
