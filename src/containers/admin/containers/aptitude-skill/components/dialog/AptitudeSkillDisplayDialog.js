/* eslint-disable no-restricted-imports */
import React, { useEffect } from "react"
import _ from "lodash"
import { injectIntl } from "react-intl"
import { shallowEqual, useDispatch, useSelector } from "react-redux"
import { ShowModal } from "../../../../../../components/partials/controls"
import { clearStore, fetchAptitudeSkill } from "../../store/actions"
import AptitudeSkill from "../display/AptitudeSkill"

const AptitudeSkillShowDialog = ({ params, show, onHide, intl }) => {

  const dispatch = useDispatch()
  const { isFetching, error, aptitudeSkillForShow } = useSelector(
    (state) => ({
      isFetching: state.admin.aptitudeSkill.isFetching,
      aptitudeSkillForShow: state.admin.aptitudeSkill.aptitudeSkill,
      error: state.admin.aptitudeSkill.error
    }),
    shallowEqual
  )

  useEffect(() => {
    if (!_.isEmpty(params)){
      dispatch(fetchAptitudeSkill(params))
    }
    dispatch(clearStore())
  }, [params, dispatch])

  return (
    <ShowModal
      title={!_.isEmpty(params)
        ? intl.formatMessage({ id: "APTITUDE_SKILL.EDIT.TITLE" })
        : intl.formatMessage({ id: "APTITUDE_SKILL.NEW.TITLE" })}
      show={show}
      isFetching={isFetching}
      onHide={onHide}
    >
      <AptitudeSkill error={error} isFetching={isFetching} aptitudeSkill={aptitudeSkillForShow} />
    </ShowModal>
  )
}


export default injectIntl(AptitudeSkillShowDialog)
