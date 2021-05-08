import React from "react"
import { FormattedMessage } from "react-intl"
import { isEqual, isArray, isEmpty } from "lodash"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
//  DownloadFile,
  FlashMessages,
} from "../../../../../../../../components/partials/controls"
import { isRLTLang } from "./../../../../../../../../i18n"

import SkillsEvaluationsTable from "./../table/SkillsEvaluationsTable"
import SkillsEvaluationsGrouping from "./../grouping/SkillsEvaluationsGrouping"
import { useSkillsEvaluationsUIContext } from "./../../context/SkillsEvaluationsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../../../components/wrappers"
import {useSelector} from "react-redux"
import {clearStore} from "../../store/actions"
//import { ENDPOINTS } from "./../../store/constants"


const SkillsEvaluationCard = ({ folderParam, goBackToFolder }) => {

  const skillsEvaluationsUIProps = useSkillsEvaluationsUIContext()

  const { success, error, /*folderGroup, showDownload*/ } = useSelector(
    (state) => ({
      folderGroup: state.admin.folderGroup.folderGroup,
      showDownload: isArray(state.admin.skillsEvaluationGroup.skillsEvaluations) && !isEmpty(state.admin.skillsEvaluationGroup.skillsEvaluations),
      success: state.admin.skillsEvaluationGroup.success,
      error: state.admin.skillsEvaluationGroup.error
    }),
    isEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="SKILLS_EVALUATION.MSG.DELETE" /> },
          { condition: success.isCreated, label: <FormattedMessage id="SKILLS_EVALUATION.NEW.MSG" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="SKILLS_EVALUATION.EDIT.MSG" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="SKILLS_EVALUATION.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <Button
              type="button"
              onClick={goBackToFolder}
              className="btn btn-sm btn-light mx-2"
            >
              { isRLTLang() ?
                <>
                  <FormattedMessage id="GENERAL.BACK" />
                  <i className="fa fa-arrow-left" />
                </>
                : <>
                  <i className="fa fa-arrow-left" />
                  <FormattedMessage id="GENERAL.BACK" />
                </>
              }
            </Button>
            <ProtectedLink rule={skillsEvaluationsUIProps.newSkillsEvaluationRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={skillsEvaluationsUIProps.newSkillsEvaluationButtonClick}
              >
                <FormattedMessage id="SKILLS_EVALUATION.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            { /* showDownload && folderGroup && <DownloadFile endpoint={ENDPOINTS.GENERATE_GLOBAL_RESULT.replace(":param", folderGroup.id)} />*/ }
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {skillsEvaluationsUIProps.ids.length > 0 && <SkillsEvaluationsGrouping />}
          <SkillsEvaluationsTable folderParam={folderParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default SkillsEvaluationCard
