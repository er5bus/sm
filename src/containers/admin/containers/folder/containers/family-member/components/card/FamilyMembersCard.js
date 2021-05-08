import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FlashMessages,
} from "../../../../../../../../components/partials/controls"
import { isRLTLang } from "./../../../../../../../../i18n"

import FamilyMembersTable from "./../table/FamilyMembersTable"
import FamilyMembersGrouping from "./../grouping/FamilyMembersGrouping"
import { useFamilyMembersUIContext } from "./../../context/FamilyMembersUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const FamilyMemberCard = ({ folderParam, goBackToFolder }) => {

  const familyMembersUIProps = useFamilyMembersUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.familyMember.success,
      error: state.admin.familyMember.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="FAMILY_MEMBER.MSG.DELETE" /> },
          { condition: success.isCreated, label: <FormattedMessage id="FAMILY_MEMBER.NEW.MSG" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="FAMILY_MEMBER.EDIT.MSG" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="FAMILY_MEMBER.LIST.TITLE" />
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
            <ProtectedLink rule={familyMembersUIProps.newFamilyMemberRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={familyMembersUIProps.newFamilyMemberButtonClick}
              >
                <FormattedMessage id="FAMILY_MEMBER.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {familyMembersUIProps.ids.length > 0 && <FamilyMembersGrouping />}
          <FamilyMembersTable folderParam={folderParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default FamilyMemberCard
