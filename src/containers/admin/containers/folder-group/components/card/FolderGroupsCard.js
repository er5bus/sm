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

import FolderGroupsTable from "./../table/FolderGroupsTable"
import FolderGrouping from "./../grouping/FolderGrouping"
import { useFolderGroupsUIContext } from "./../../context/FolderGroupsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const FolderGroupCard = () => {

  const folderGroupsUIProps = useFolderGroupsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.folderGroup.success,
      error: state.admin.folderGroup.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="FOLDER_GROUP.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="FOLDER_GROUP.MSG.DEACTIVATED" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="FOLDER_GROUP.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={folderGroupsUIProps.newFolderGroupRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary mx-2"
                onClick={folderGroupsUIProps.newFolderGroupButtonClick}
              >
                <FormattedMessage id="FOLDER_GROUP.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={folderGroupsUIProps.newFolderGroupRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={folderGroupsUIProps.openFolderGroupImportDialog}
              >
                <FormattedMessage id="FOLDER_GROUP.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {folderGroupsUIProps.ids.length > 0 && <FolderGrouping />}
          <FolderGroupsTable />
        </CardBody>
      </Card>
    </>
  )
}


export default FolderGroupCard
