import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import menuItems from "./items/display"
import {fetchFolderGroup} from "./../../store/actions"
import {Menu} from "../../../../../../components/partials";
import FolderGroupInformations from "./FolderGroupInformation";

const FolderGroupDisplay = ({ param, intl }) => {

  const dispatch = useDispatch()
  const { folderGroup } = useSelector(
    (state) => ({
      folderGroup: state.admin.folderGroup.folderGroup
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(folderGroup) || folderGroup.id !== param) {
      dispatch(fetchFolderGroup({ param }))
    }
    // eslint-disable-next-line
  }, [])

  const items = menuItems({ intl, param })

  return (
    <Menu items={items}>
      <FolderGroupInformations folderGroup={folderGroup} param={param} />
    </Menu>
  )
}

export default injectIntl(FolderGroupDisplay)
