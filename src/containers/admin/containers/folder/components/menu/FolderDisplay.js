import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useDispatch, useSelector } from "react-redux"

import menuItems from "./items/display"
import { fetchFolder } from "./../../store/actions"
import {Menu} from "../../../../../../components/partials";
import FolderInformations from "./FolderInformation";

const FolderDisplay = ({ param, intl }) => {

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

  const items = menuItems({ intl, param })

  return (
    <Menu items={items}>
      <FolderInformations folder={folder} param={param} />
    </Menu>
  )
}

export default injectIntl(FolderDisplay)
