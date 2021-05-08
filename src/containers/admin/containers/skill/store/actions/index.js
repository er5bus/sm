import { ACTIONS, ENDPOINTS } from "./../constants"
import { CALL_API, HTTP_METHODS } from "./../../../../../../constants"


export const clearStore = () =>
  ({
    type: ACTIONS.CLEAR_SKILL
  })


export const fetchSkills = (params) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SKILLS_INIT,
        success: ACTIONS.FETCH_SKILLS_SUCCEDED,
        fail: ACTIONS.FETCH_SKILLS_FAILED
      },
      endpoint: ENDPOINTS.SKILLS,
      method: HTTP_METHODS.GET,
      params,
      auth: true
    }
  })


export const createSkill = (payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.CREATE_SKILL_INIT,
        success: ACTIONS.CREATE_SKILL_SUCCEDED,
        fail: ACTIONS.CREATE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILLS,
      method: HTTP_METHODS.POST,
      auth: true
    }
  })


export const editSkill = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_SKILL_INIT,
        success: ACTIONS.EDIT_SKILL_SUCCEDED,
        fail: ACTIONS.EDIT_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const editAptitudeSkill = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_APTITUDE_SKILL_INIT,
        success: ACTIONS.EDIT_APTITUDE_SKILL_SUCCEDED,
        fail: ACTIONS.EDIT_APTITUDE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const editKnowledgeSkill = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_KNOWLEDGE_SKILL_INIT,
        success: ACTIONS.EDIT_KNOWLEDGE_SKILL_SUCCEDED,
        fail: ACTIONS.EDIT_KNOWLEDGE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const editEvaluationRubrics = ({ param }, payload) =>
  ({
    type: CALL_API,
    payload,
    meta: {
      actions: {
        init: ACTIONS.EDIT_EVALUATION_RUBRICS_INIT,
        success: ACTIONS.EDIT_EVALUATION_RUBRICS_SUCCEDED,
        fail: ACTIONS.EDIT_EVALUATION_RUBRICS_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.PATCH,
      auth: true
    }
  })


export const disableSkill = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.DISABLE_SKILL_INIT,
        success: ACTIONS.DISABLE_SKILL_SUCCEDED,
        fail: ACTIONS.DISABLE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL_DEACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })


export const enableSkill = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.ENABLE_SKILL_INIT,
        success: ACTIONS.ENABLE_SKILL_SUCCEDED,
        fail: ACTIONS.ENABLE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL_ACTIVATE.replace(":param", param),
      method: HTTP_METHODS.DELETE,
      auth: true
    }
  })

export const fetchSkill = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SKILL_INIT,
        success: ACTIONS.FETCH_SKILL_SUCCEDED,
        fail: ACTIONS.FETCH_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchSkillExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_SKILL_INIT,
        success: ACTIONS.FETCH_SKILL_SUCCEDED,
        fail: ACTIONS.FETCH_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchAptitudeSkillExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_APTITUDE_SKILL_INIT,
        success: ACTIONS.FETCH_APTITUDE_SKILL_SUCCEDED,
        fail: ACTIONS.FETCH_APTITUDE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchKnowledgeSkillExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_KNOWLEDGE_SKILL_INIT,
        success: ACTIONS.FETCH_KNOWLEDGE_SKILL_SUCCEDED,
        fail: ACTIONS.FETCH_KNOWLEDGE_SKILL_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })


export const fetchEvaluationRubricsExtraData = ({ param }) =>
  ({
    type: CALL_API,
    meta: {
      actions: {
        init: ACTIONS.FETCH_EVALUATION_RUBRICS_INIT,
        success: ACTIONS.FETCH_EVALUATION_RUBRICS_SUCCEDED,
        fail: ACTIONS.FETCH_EVALUATION_RUBRICS_FAILED
      },
      endpoint: ENDPOINTS.SKILL.replace(":param", param),
      method: HTTP_METHODS.GET,
      auth: true
    }
  })
