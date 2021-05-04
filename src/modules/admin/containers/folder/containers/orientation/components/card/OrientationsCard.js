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
import { isRLTLang } from "../../../../../../../../i18n"

import OrientationsTable from "../table/OrientationsTable"
import OrientationsGrouping from "../grouping/OrientationsGrouping"
import { useOrientationsUIContext } from "../../context/OrientationsUIContext"
import { Button } from "react-bootstrap"
import { ProtectedLink } from "../../../../../../../../components/wrappers"
import { shallowEqual, useSelector } from "react-redux"
import { clearStore } from "../../store/actions"
import {FOLDER_ORIENTED} from "../../../../../../UIHelpers"


const OrientationCard = ({ folderParam, goBackToFolder }) => {

  const orientationsUIProps = useOrientationsUIContext()

  const { success, error, folder } = useSelector(
    (state) => ({
      success: state.admin.orientation.success,
      error: state.admin.orientation.error,
      folder: state.admin.folder.folder
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isDeleted, label: <FormattedMessage id="ORIENTATION.MSG.DELETE" /> },
          { condition: success.isClosed, label: <FormattedMessage id="ORIENTATION.MSG.COLSED" /> },
          { condition: success.isCreated, label: <FormattedMessage id="ORIENTATION.NEW.MSG" /> },
          { condition: success.isUpdated, label: <FormattedMessage id="ORIENTATION.EDIT.MSG" /> }
        ]}
      />
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="ORIENTATION.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <Button
              type="button"
              onClick={goBackToFolder}
              className="btn btn-sm btn-light mx-2"
            >
              {isRLTLang() ?
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
            <ProtectedLink rule={orientationsUIProps.newOrientationRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={orientationsUIProps.newOrientationButtonClick}
                disabled={folder && folder.status === FOLDER_ORIENTED}
              >
                <FormattedMessage id="ORIENTATION.NEW.TITLE" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {orientationsUIProps.ids.length > 0 && <OrientationsGrouping />}
          <OrientationsTable folderParam={folderParam} />
        </CardBody>
      </Card>
    </>
  )
}


export default OrientationCard
