/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, { useEffect, useLayoutEffect } from "react"
import { injectIntl } from "react-intl"
import { shallowEqual, useSelector, useDispatch } from "react-redux"
import FamilyMember from "./components/display/FamilyMember"
import { useSubheader } from "../../../../../../components/layout"
import { fetchFamilyMember, clearStore } from "./store/actions"
import { getBasePath } from "./routes"
import {ShowView} from "../../../../../../components/partials"


const FamilyMemberShow = ({ history, params = null, intl }) => {
  // Subheader
  const suhbeader = useSubheader()
  const basePath = getBasePath()
  const _title = intl.formatMessage({ id: "FAMILY_MEMBER.SHOW.TITLE" })

  // Tabs
  const dispatch = useDispatch()
  // const layoutDispatch = useContext(LayoutContext.Dispatch)
  const { isFetching, familyMemberForShow = null, error } = useSelector(
    (state) => ({
      isFetching: state.admin.familyMember.isFetching,
      familyMemberForShow: state.admin.familyMember.familyMember,
      error: state.admin.familyMember.error
    }),
    shallowEqual
  )

  useEffect(() => {
    dispatch(fetchFamilyMember(params))
  }, [params, dispatch])

  useLayoutEffect(() => {
    suhbeader.setTitle(_title)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const goBackTo = () => {
    history.push(basePath.replace(":param", params.param))
  }

  return (
    <ShowView
      title={_title}
      goBackTo={goBackTo}
      onClose={clearStore}
      error={error}
    >
      <FamilyMember error={error} isFetching={isFetching} familyMember={familyMemberForShow} />
    </ShowView>
  )
}


export default injectIntl(FamilyMemberShow)
