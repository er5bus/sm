import { ACTIONS, ENDPOINTS } from './../constants'
import { CALL_API, HTTP_METHODS } from './../../../../../../../../constants'

export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_FAMILY_MEMBER
  })

export const fetchFamilyMembers = (familyMemberParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FAMILY_MEMBERS_INIT,
        success: ACTIONS.FETCH_FAMILY_MEMBERS_SUCCEDED,
        fail: ACTIONS.FETCH_FAMILY_MEMBERS_FAILED
      },
      endpoint: ENDPOINTS.FAMILY_MEMBERS.replace(':param', familyMemberParams.param),
      method: HTTP_METHODS.GET,
      params: familyMemberParams,
      auth: true
    }
  })

export const createFamilyMember = (familyMemberParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_FAMILY_MEMBER_INIT,
        success: ACTIONS.CREATE_FAMILY_MEMBER_SUCCEDED,
        fail: ACTIONS.CREATE_FAMILY_MEMBER_FAILED
      },
      endpoint: ENDPOINTS.FAMILY_MEMBERS.replace(':param', familyMemberParams.param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })

export const editFamilyMember = ({ familyMemberParam, param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_FAMILY_MEMBER_INIT,
        success: ACTIONS.EDIT_FAMILY_MEMBER_SUCCEDED,
        fail: ACTIONS.EDIT_FAMILY_MEMBER_FAILED
      },
      endpoint: ENDPOINTS.FAMILY_MEMBER.replace(':familyMemberParam', familyMemberParam).replace(':param', param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })

export const deleteFamilyMember = ({ familyMemberParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_FAMILY_MEMBER_INIT,
        success: ACTIONS.DELETE_FAMILY_MEMBER_SUCCEDED,
        fail: ACTIONS.DELETE_FAMILY_MEMBER_FAILED
      },
      endpoint: ENDPOINTS.FAMILY_MEMBER.replace(':familyMemberParam', familyMemberParam).replace(':param', param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const deleteFamilyMembers = (familyMemberParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DELETE_FAMILY_MEMBER_INIT,
        success: ACTIONS.DELETE_FAMILY_MEMBER_SUCCEDED,
        fail: ACTIONS.DELETE_FAMILY_MEMBER_FAILED
      },
      endpoint: ENDPOINTS.FAMILY_MEMBERS,
      method: HTTP_METHODS.DELETE,
      familyMemberParams,
      auth: true
    }
  })

export const fetchFamilyMember = ({ familyMemberParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_FAMILY_MEMBER_INIT,
        success: ACTIONS.FETCH_FAMILY_MEMBER_SUCCEDED,
        fail: ACTIONS.FETCH_FAMILY_MEMBER_FAILED
      },
      endpoint: ENDPOINTS.FAMILY_MEMBER.replace(':familyMemberParam', familyMemberParam).replace(':param', param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
