import _ from "lodash"
import {AR, FR} from "../../../../../../../constants"
import {
  ABUNDANT,
  ACCESS_TO_DIRECT_EMPLOYMENT,
  ACCESS_TO_QUALIFYING_TRAINING,
  exitCourseTypeUIHelper, orientationOtherSituationUIHelper,
  orientationPartnershipsUIHelper
} from "../../../../../UIHelpers"


export const exitCourseFields = _.memoize(({ intl }) => [
  {
    name: "date",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    size: 6,
  },
  {
    name: "type",
    options: exitCourseTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.EXIT_COURSE_TYPE" }),
    size: 6,
  },
  {
    name:  {
      [FR]: "partenarDetails.nameFr",
      [AR]: "partenarDetails.nameAr",
    },
    loadOptions: orientationPartnershipsUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    size: 6,
    hide: true,
    hideOn: "type",
    condition: [ACCESS_TO_QUALIFYING_TRAINING, ACCESS_TO_DIRECT_EMPLOYMENT],
  },
  {
    name: "causeAbandon",
    options: orientationOtherSituationUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CAUSE_ABANDON" }),
    hide: true,
    hideOn: "type",
    condition: ABUNDANT,
    size: 12,
  },
])

export const exitCourseFieldsAr = _.memoize(({ intl }) => [
 {
    name: "commentAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    size: 12,
  },

])


export const exitCourseFieldsFr = _.memoize(({ intl }) => [
  {
    name: "commentAr",
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    size: 12,
  },
])
