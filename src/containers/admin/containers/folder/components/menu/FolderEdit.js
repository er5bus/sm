import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { Menu } from "../../../../../../components/partials"

import menuItems from "./items/edit"

import { fetchFolder } from "./../../store/actions"
import FolderInformations from "./FolderInformation";


const EditFolder = ({ intl, param }) => {

  const dispatch = useDispatch()

  const { refresh, folder } = useSelector(
    (state) => ({
      refresh: state.admin.folder.refresh,
      folder: state.admin.folder.folder
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(folder) || folder.id !== param) {
      dispatch(fetchFolder({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(folder)])

  const items = menuItems({ intl, param, folderStatus: (folder && folder.status) || 0 })

  return (<Menu items={items}>
    <FolderInformations folder={folder} editMode={true} param={param} />
  </Menu>
  )
}


export default injectIntl(EditFolder)
