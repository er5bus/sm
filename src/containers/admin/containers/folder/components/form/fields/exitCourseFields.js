import * as Yup from "yup"
import _ from "lodash"
import {DATE_PICKER, SELECT, TEXTAREA} from "../../../../../../../components/partials"
import {
  ABUNDANT,
  ACCESS_TO_DIRECT_EMPLOYMENT, ACCESS_TO_QUALIFYING_TRAINING,
  exitCourseTypeUIHelper, orientationOtherSituationUIHelper,
  orientationPartnershipsUIHelper/*, OTHER_INDICATION,*/
} from "../../../../../UIHelpers"


export const exitCourseFields = _.memoize(({ intl }) => [
  {
    name: "date",
    component: DATE_PICKER,
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.DATE" }),
    validation: Yup.string().required(),
    required: true,
    size: 6,
  },
  {
    name: "type",
    component: SELECT,
    options: exitCourseTypeUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.EXIT_COURSE_TYPE" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.EXIT_COURSE_TYPE" }),
    size: 6,
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "partenar",
    component: SELECT,
    loadOptions: orientationPartnershipsUIHelper,
    label: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.PARTNER" }),
    size: 6,
    validation: Yup.number().nullable(),
    hide: true,
    hideOn: "type",
    condition: [ACCESS_TO_QUALIFYING_TRAINING, ACCESS_TO_DIRECT_EMPLOYMENT],
  },
  {
    name: "causeAbandon",
    component: SELECT,
    options: orientationOtherSituationUIHelper(intl),
    label: intl.formatMessage({ id: "FOLDER.INPUT.CAUSE_ABANDON" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.CAUSE_ABANDON" }),
    hide: true,
    hideOn: "type",
    initialValue: null,
    condition: ABUNDANT,
    size: 12,
    validation: Yup.number().nullable()
  },
])

export const exitCourseFieldsAr = _.memoize(({ intl }) => [
 {
    name: "commentAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200)
  },

])


export const exitCourseFieldsFr = _.memoize(({ intl }) => [
  {
    name: "commentAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.INPUT.COMMENT_AR" }),
    size: 12,
    validation: Yup.string().min(2).max(200)
  },

  
])
