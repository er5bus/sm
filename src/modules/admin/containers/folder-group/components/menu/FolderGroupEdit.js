import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"

import { Menu } from "../../../../../../components/partials"

import menuItems from "./items/edit"

import { fetchFolderGroup } from "./../../store/actions"
import FolderGroupInformations from "./FolderGroupInformation";


const EditFolderGroup = ({ intl, param }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, folderGroup } = useSelector(
    (state) => ({
      refresh: state.admin.folderGroup.refresh,
      isFetching: state.admin.folderGroup.isFetching,
      folderGroup: state.admin.folderGroup.folderGroup
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(folderGroup) || folderGroup.id !== param) {
      dispatch(fetchFolderGroup({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(folderGroup)])

  const items = menuItems({ intl, param, folderGroupStatus: (folderGroup && folderGroup.status) || 0 })

  return (<Menu items={items}>
    <FolderGroupInformations folderGroup={folderGroup} param={param} />
  </Menu>
  )
}


export default injectIntl(EditFolderGroup)
