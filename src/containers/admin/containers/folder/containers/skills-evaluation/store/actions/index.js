import { ACTIONS, ENDPOINTS } from './../constants'
import { CALL_API, HTTP_METHODS } from './../../../../../../../../constants'

export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_SKILLS_EVALUATION
  })

export const fetchSkillsEvaluations = (skillsEvaluationFolderParams) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SKILLS_EVALUATIONS_INIT,
        success: ACTIONS.FETCH_SKILLS_EVALUATIONS_SUCCEDED,
        fail: ACTIONS.FETCH_SKILLS_EVALUATIONS_FAILED
      },
      endpoint: ENDPOINTS.SKILLS_EVALUATIONS.replace(':param', skillsEvaluationFolderParams.param),
      method: HTTP_METHODS.GET,
      params: skillsEvaluationFolderParams,
      auth: true
    }
  })

export const createSkillsEvaluation = (skillsEvaluationFolderParams, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_SKILLS_EVALUATION_INIT,
        success: ACTIONS.CREATE_SKILLS_EVALUATION_SUCCEDED,
        fail: ACTIONS.CREATE_SKILLS_EVALUATION_FAILED
      },
      endpoint: ENDPOINTS.SKILLS_EVALUATIONS.replace(':param', skillsEvaluationFolderParams.param),
      method: HTTP_METHODS.POST,
      auth: true
    }
  })

export const editSkillsEvaluation = ({ skillsEvaluationFolderParam, param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_SKILLS_EVALUATION_INIT,
        success: ACTIONS.EDIT_SKILLS_EVALUATION_SUCCEDED,
        fail: ACTIONS.EDIT_SKILLS_EVALUATION_FAILED
      },
      endpoint: ENDPOINTS.SKILLS_EVALUATION.replace(':skillsEvaluationFolderParam', skillsEvaluationFolderParam).replace(':param', param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })

export const deactivateSkillsEvaluation = ({ skillsEvaluationFolderParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DEACTIVATE_SKILLS_EVALUATION_INIT,
        success: ACTIONS.DEACTIVATE_SKILLS_EVALUATION_SUCCEDED,
        fail: ACTIONS.DEACTIVATE_SKILLS_EVALUATION_FAILED
      },
      endpoint: ENDPOINTS.SKILLS_EVALUATION_DEACTIVATE.replace(':skillsEvaluationFolderParam', skillsEvaluationFolderParam).replace(':param', param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const activateSkillsEvaluation = ({ skillsEvaluationFolderParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ACTIVATE_SKILLS_EVALUATION_INIT,
        success: ACTIONS.ACTIVATE_SKILLS_EVALUATION_SUCCEDED,
        fail: ACTIONS.ACTIVATE_SKILLS_EVALUATION_FAILED
      },
      endpoint: ENDPOINTS.SKILLS_EVALUATION_ACTIVATE.replace(':skillsEvaluationFolderParam', skillsEvaluationFolderParam).replace(':param', param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const fetchSkillsEvaluation = ({ skillsEvaluationFolderParam, param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SKILLS_EVALUATION_INIT,
        success: ACTIONS.FETCH_SKILLS_EVALUATION_SUCCEDED,
        fail: ACTIONS.FETCH_SKILLS_EVALUATION_FAILED
      },
      endpoint: ENDPOINTS.SKILLS_EVALUATION.replace(':skillsEvaluationFolderParam', skillsEvaluationFolderParam).replace(':param', param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
