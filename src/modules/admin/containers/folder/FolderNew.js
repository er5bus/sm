/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import _ from "lodash"

import FolderForm from "./components/form/PersonalDataForm"

import { useSubheader } from "../../../../components/layout"

import routes from "./../../routes"


const Folder = ({ history, intl, match: { params } }) => {

  const suhbeader = useSubheader()

  const goBackToFoldersList = () => {
    history.push(routes.folderList.path)
  }

  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: (_.isEmpty(params) ? "FOLDER.NEW.TITLE" : "FOLDER.EDIT.TITLE") }))

    // eslint-disable-next-line
  }, [])

  return (
    <FolderForm
      goBackToList={goBackToFoldersList}
      params={params}
    />
  )
}


export default injectIntl(Folder)
