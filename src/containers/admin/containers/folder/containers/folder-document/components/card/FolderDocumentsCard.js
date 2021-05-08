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

import FolderDocumentsTable from "./../table/FolderDocumentsTable"
import FolderDocumentsGrouping from "./../grouping/FolderDocumentsGrouping"
import { useFolderDocumentsUIContext } from "./../../context/FolderDocumentsUIContext"
import {Button} from "react-bootstrap"
import {ProtectedLink} from "../../../../../../../../components/wrappers"
import {shallowEqual, useSelector} from "react-redux"
import {clearStore} from "../../store/actions"


const FolderDocumentCard = ({ folderParam, goBackToFolder }) => {

  const folderDocumentsUIProps = useFolderDocumentsUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.folderDocument.success,
      error: state.admin.folderDocument.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="FOLDER_DOCUMENT.MSG.DELETE" /> },
          { condition: success.isCreated, label: <FormattedMessage id="FOLDER_DOCUMENT.NEW.MSG" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="FOLDER_DOCUMENT.EDIT.MSG" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="FOLDER_DOCUMENT.LIST.TITLE" />
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
            <ProtectedLink rule={folderDocumentsUIProps.newFolderDocumentRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={folderDocumentsUIProps.newFolderDocumentButtonClick}
              >
                <FormattedMessage id="FOLDER_DOCUMENT.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {folderDocumentsUIProps.ids.length > 0 && <FolderDocumentsGrouping />}
          <FolderDocumentsTable folderParam={folderParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default FolderDocumentCard
