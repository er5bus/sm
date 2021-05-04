import { ACTIVATE, CREATE, UPDATE, DEACTIVATE, VIEW, DELETE, UNDELETE, CLOSE, /*VIEW_UPDATE*/ } from "./Permissions"


export const USER = {
  module: "profile",
  permissions: {
    [VIEW]: "view_profile",
    [CREATE]: "add_profile",
    [UPDATE]: "change_profile",
    [ACTIVATE]: "activate_profile",
    [DEACTIVATE]: "delete_profile",
    [DELETE]: "soft_delete_profile",
    [UNDELETE]: "undelete_profile",
  },
}

export const USER_GROUP = {
  module: "group",
  permissions: {
    [VIEW]: "view_group",
    [CREATE]: "add_group",
    [UPDATE]: "change_group",
    [DELETE]: "delete_group"
  }
}

export const FOLDER_GROUP = {
  module: "folder_group",
  permissions: {
    [VIEW]: "view_foldergroup",
    [CREATE]: "add_foldergroup",
    [UPDATE]: "change_foldergroup",
    [DELETE]: "delete_foldergroup"
  }
}

export const FOLDER = {
  module: "folder",
  permissions: {
    [VIEW]: "view_folder",
    [CREATE]: "add_folder",
    [UPDATE]: "change_folder",
    [DELETE]: "delete_folder"
  }
}

export const EVENT = {
  module: "event",
  permissions: {
    [VIEW]: "view_event",
    [CREATE]: "add_event",
    [UPDATE]: "change_event",
    [DELETE]: "delete_event",
    [CLOSE]: "close_event",
  }
}

export const SKILLS_EVALUATION = {
  module: "level",
  permissions: {
    [VIEW]: "view_level",
    [CREATE]: "add_level",
    [UPDATE]: "change_level",
    [DELETE]: "delete_level",
    [CLOSE]: "close_level",
  }
}

export const FOLDER_DOCUMENT = {
  module: "folder_document",
  permissions: {
    [VIEW]: "view_folder_document",
    [CREATE]: "add_folder_document",
    [UPDATE]: "change_folder_document",
    [DELETE]: "delete_folder_document"
  }
}

export const PERIOD_UNAVAILABILITY = {
  module: "period_unavailability",
  permissions: {
    [VIEW]: "view_period_unavailability",
    [CREATE]: "add_period_unavailability",
    [UPDATE]: "change_period_unavailability",
    [DELETE]: "delete_period_unavailability"
  }
}

export const AVAILABILITY_SETTING_USER = {
  module: "availability_setting",
  permissions: {
    [VIEW]: "view_availability_setting",
    [CREATE]: "add_availability_setting",
    [UPDATE]: "change_availability_setting",
    [DELETE]: "delete_availability_setting"
  }
}

export const AVAILABILITY_SETTING_STRUCTURE = {
  module: "availability_setting",
  permissions: {
    [VIEW]: "view_availability_setting",
    [CREATE]: "add_availability_setting",
    [UPDATE]: "change_availability_setting",
    [DELETE]: "delete_availability_setting"
  }
}


export const FAMILY_MEMBER = {
  module: "family_member",
  permissions: {
    [VIEW]: "view_family_member",
    [CREATE]: "add_family_member",
    [UPDATE]: "change_family_member",
    [DELETE]: "delete_family_member"
  }
}

export const SERVICE = {
  module: "service",
  permissions: {
    [VIEW]: "view_service",
    [CREATE]: "add_service",
    [UPDATE]: "change_service",
    [ACTIVATE]: "activate_service",
    [DEACTIVATE]: "delete_service",
  },
}

export const ASSOCIATE_SERVICE = {
  module: "associate_service",
  permissions: {
    [VIEW]: "view_associate_service",
    [CREATE]: "add_associate_service",
    [UPDATE]: "change_associate_service",
    [ACTIVATE]: "activate_associate_service",
    [DEACTIVATE]: "delete_associate_service",
  },
}

export const PARTNERSHIP = {
  module: "partnership",
  permissions: {
    [VIEW]: "view_partner",
    [CREATE]: "add_partner",
    [UPDATE]: "change_partner",
    [ACTIVATE]: "activate_partner",
    [DEACTIVATE]: "delete_partner",
  },
}

export const EVALUATION_RUBRIC = {
  module: "evaluation_rubric",
  permissions: {
    [VIEW]: "view_evaluationrubric",
    [CREATE]: "add_evaluationrubric",
    [UPDATE]: "change_evaluationrubric",
    [ACTIVATE]: "activate_evaluationrubric",
    [DEACTIVATE]: "delete_evaluationrubric",
  },
}

export const ASSESSMENT_LEVEL = {
  module: "assessment_level",
  permissions: {
    [VIEW]: "view_assessmentlevel",
    [CREATE]: "add_assessmentlevel",
    [UPDATE]: "change_assessmentlevel",
    [ACTIVATE]: "activate_assessmentlevel",
    [DEACTIVATE]: "delete_assessmentlevel",
  },
}

export const KNOWLEDGE_SKILL = {
  module: "knowledge_skill",
  permissions: {
    [VIEW]: "view_knowledgeskill",
    [CREATE]: "add_knowledgeskill",
    [UPDATE]: "change_knowledgeskill",
    [ACTIVATE]: "activate_knowledgeskill",
    [DEACTIVATE]: "delete_knowledgeskill",
  },
}

export const APTITUDE_SKILL = {
  module: "aptitude_skill",
  permissions: {
    [VIEW]: "view_aptitudeskill",
    [CREATE]: "add_aptitudeskill",
    [UPDATE]: "change_aptitudeskill",
    [ACTIVATE]: "activate_aptitudeskill",
    [DEACTIVATE]: "delete_aptitudeskill",
  },
}

export const SKILL = {
  module: "skill",
  permissions: {
    [VIEW]: "view_kill",
    [CREATE]: "add_skill",
    [UPDATE]: "change_skill",
    [ACTIVATE]: "activate_skill",
    [DEACTIVATE]: "delete_skill",
  },
}


export const ASSESSMENT_TOOL = {
  module: "assessment_tool",
  permissions: {
    [VIEW]: "view_skillsevaluation",
    [CREATE]: "add_skillsevaluation",
    [UPDATE]: "change_skillsevaluation",
    [ACTIVATE]: "activate_skillsevaluation",
    [DEACTIVATE]: "delete_skillsevaluation",
  },
}
export const ORIENTATION = {
  module: "orientation",
  permissions: {
    [VIEW]: "view_orientation",
    [CREATE]: "add_orientation",
    [UPDATE]: "change_orientation",
    [ACTIVATE]: "activate_orientation",
    [DEACTIVATE]: "delete_orientation",
  },
}

export const POST_COURSE_FOLLOWUP  = {
  module: "followup",
  permissions: {
    [VIEW]: "view_followup",
    [CREATE]: "add_followup",
    [UPDATE]: "change_followup",
    [ACTIVATE]: "activate_followup",
    [DEACTIVATE]: "delete_followup",
  }
}

export const SCHOOL_DROPOUT = {
  module: "school_dropout",
  permissions: {
    [VIEW]: "view_schooldropout",
    [CREATE]: "add_schooldropout",
    [UPDATE]: "change_schooldropout",
    [ACTIVATE]: "activate_schooldropout",
    [DEACTIVATE]: "delete_schooldropout",
  },
}
