/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import FolderGroupForm from "./components/form/FolderGroupForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"


const FolderGroup = ({ history, intl, match: { params } }) => {

  const suhbeader = useSubheader()
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "FOLDER_GROUP.NEW.TITLE" }))
  })

  const goBackToFolderGroupsList = () => {
    history.push(routes.folderGroupList.path)
  }

  return (
    <FolderGroupForm
      goBackToList={goBackToFolderGroupsList}
      params={params}
    />
  )
}


export default injectIntl(FolderGroup)
