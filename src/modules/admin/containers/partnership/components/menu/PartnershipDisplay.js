import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { isEmpty } from "lodash"
import { useDispatch, useSelector, shallowEqual } from "react-redux"
import { fetchPartnership } from "./../../store/actions"
import menuItems from "./items/display"
import PartnershipMenu from "./PartnershipMenu";
import {Menu} from "../../../../../../components/partials";


const PartnershipDisplay = ({ param, intl }) => {

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

export default injectIntl(PartnershipDisplay)
