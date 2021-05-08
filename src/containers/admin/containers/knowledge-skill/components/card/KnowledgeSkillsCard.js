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

import KnowledgeSkillsTable from "./../table/KnowledgeSkillsTable"
import KnowledgeSkillGrouping from "./../grouping/KnowledgeSkillGrouping"
import { useKnowledgeSkillsUIContext } from "./../../context/KnowledgeSkillsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {clearStore} from "../../store/actions"
import {shallowEqual, useSelector} from "react-redux"


const KnowledgeSkillCard = () => {

  const knowledgeSkillsUIProps = useKnowledgeSkillsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.knowledgeSkill.success,
      error: state.admin.knowledgeSkill.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="KNOWLEDGE_SKILL.MSG.ACTIVATED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="KNOWLEDGE_SKILL.NEW.MSG" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="KNOWLEDGE_SKILL.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="KNOWLEDGE_SKILL.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={knowledgeSkillsUIProps.newKnowledgeSkillRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={knowledgeSkillsUIProps.newKnowledgeSkillButtonClick}
              >
                <FormattedMessage id="KNOWLEDGE_SKILL.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={knowledgeSkillsUIProps.newKnowledgeSkillRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={knowledgeSkillsUIProps.openKnowledgeSkillImportDialog}
              >
                <FormattedMessage id="KNOWLEDGE_SKILL.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {knowledgeSkillsUIProps.ids.length > 0 && <KnowledgeSkillGrouping />}
          <KnowledgeSkillsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default KnowledgeSkillCard
