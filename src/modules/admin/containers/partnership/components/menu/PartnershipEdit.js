import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import menuItems from "./items/edit"
import { fetchPartnership } from "./../../store/actions"
import {Menu} from "../../../../../../components/partials"
import PartnershipMenu from "./PartnershipMenu"

const EditPartnership = ({ param, intl }) => {

  const dispatch = useDispatch()

  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { refresh, partnership } = useSelector(
    (state) => ({
      refresh: state.admin.partnership.refresh,
      isFetching: state.admin.partnership.isFetching,
      partnership: state.admin.partnership.partnership
    }),
    shallowEqual
  )

  useEffect(() => {
    if (isEmpty(partnership) || partnership.id !== param) {
      dispatch(fetchPartnership({ param }))
    }

    // eslint-disable-next-line
  }, [refresh && isEmpty(partnership)])

  const items = menuItems({ intl, param })

  return (<Menu items={items}>
    <PartnershipMenu partnership={partnership} param={param} />
  </Menu>
  )
}


export default injectIntl(EditPartnership)
