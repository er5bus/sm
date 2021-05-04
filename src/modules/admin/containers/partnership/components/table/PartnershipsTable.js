import React, { useEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import {DataTable} from "../../../../../../components/partials"
import { usePartnershipsUIContext } from "../../context/PartnershipsUIContext"
import { fetchPartnerships } from "../../store/actions"
import partnershipFields from "./fields/partnershipFields"

const PartnershipTable = ({ intl }) => {
  // Partnerships UI Context
  const partnershipsUIProps = usePartnershipsUIContext()

  const columns = partnershipFields({ intl, partnershipsUIProps })

  // Getting curret state of partnerships list from store (Redux)
  const { totalSize, partnerships: entities = [], isFetching = false } = useSelector(
    (state) => ({
      partnerships: state.admin.partnership.partnerships,
      isFetching: state.admin.partnership.isFetching,
      totalSize: state.admin.partnership.totalSize,
    }),
    shallowEqual
  )

  // Partnerships Redux state
  const dispatch = useDispatch()

  useEffect(() => {
    partnershipsUIProps.setIds([])
    dispatch(fetchPartnerships(partnershipsUIProps.queryParams))

    // eslint-disable-next-line
  }, [partnershipsUIProps.queryParams, dispatch])

  return (
    <DataTable
      isFetching={isFetching}
      entities={entities}
      columns={columns}
      totalSize={totalSize}
      queryParams={partnershipsUIProps.queryParams}
      onQueryParamsChange={partnershipsUIProps.setQueryParams}
      ids={partnershipsUIProps.ids}
      setIds={partnershipsUIProps.setIds}
    />
  )
}

export default injectIntl(PartnershipTable)
