import React from "react"
import { FormattedMessage } from "react-intl"
import {
  Card,
  CardBody,
  CardHeader,
  CardHeaderTitle,
  CardHeaderToolbar,
  FilterFormView,
  FlashMessages,
} from "../../../../../../components/partials/controls"
import FoldersFilter from "./../form/FoldersFilter"
import FoldersTable from "./../table/FoldersTable"
import FoldersGrouping from "./../grouping/FoldersGrouping"
import { useFoldersUIContext } from "./../../context/FoldersUIContext"
import { useSelector, shallowEqual } from "react-redux"
import { clearStore } from "./../../store/actions"

import {ProtectedLink} from "../../../../../../components/wrappers"
import {Button} from "react-bootstrap"

const FolderCard = () => {

  const foldersUIProps = useFoldersUIContext()

  const { success, error } = useSelector(
    (state) => ({
      success: state.admin.folder.success,
      error: state.admin.folder.error
    }),
    shallowEqual
  )

  return (
    <>
      <FlashMessages
        error={error}
        onClose={clearStore}
        successMsg={[
          { condition: success.isActivated, label: <FormattedMessage id="FOLDER.MSG.ACTIVATED" /> },
          { condition: success.isDeactivated, label: <FormattedMessage id="FOLDER.MSG.DEACTIVATED" /> }
        ]}
      />
      <FilterFormView
        title={ <FormattedMessage id="FOLDER.FILTER.TITLE" /> }
      >
        {
          ({ searchRef, resetRef }) => (
            <FoldersFilter clearSearchRef={resetRef} searchRef={searchRef} />
          )
        }
      </FilterFormView>
      <Card>
        <CardHeader>
          <div className="card-title">
            <CardHeaderTitle>
              <FormattedMessage id="FOLDER.LIST.TITLE" />
            </CardHeaderTitle>
          </div>
          <CardHeaderToolbar>
            <ProtectedLink rule={foldersUIProps.newFolderRule}>
              <Button
                type="button"
                className="btn btn-sm btn-primary"
                onClick={foldersUIProps.newFolderButtonClick}
              >
                <FormattedMessage id="FOLDER.NEW.TITLE" />
              </Button>
            </ProtectedLink>
            <ProtectedLink rule={foldersUIProps.newFolderRule}>
              <Button
                type="button"
                className="btn btn-sm btn-info mx-2"
                onClick={foldersUIProps.openFolderImportDialog}
              >
                <FormattedMessage id="FOLDER.NEW.IMPORT" />
              </Button>
            </ProtectedLink>
          </CardHeaderToolbar>
        </CardHeader>
        <CardBody>
          {foldersUIProps.ids.length > 0 && <FoldersGrouping />}
          <FoldersTable />
        </CardBody>
      </Card>
    </>
  )
}


export default FolderCard
