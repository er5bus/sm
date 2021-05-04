import * as Yup from "yup"
import _ from "lodash"
import {
  TEXTAREA,
} from "../../../../../../../components/partials"



export const WhoAMIFieldsAr = _.memoize(({ intl }) => [
  {
    name: "aboutYourselfAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.ABOUT_YOUR_SELF_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.ABOUT_YOUR_SELF_AR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "strengthsWeaknessesAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.STRENGTHS_WEAKNESSES_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.STRENGTHS_WEAKNESSES_AR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "careerLifeAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.CAREER_LIFE_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.CAREER_LIFE_AR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "readyToJoinAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.READY_TO_JOIN_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.READY_TO_JOIN_AR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "impressionsInterviewAr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.IMPRESSIONS_INTERVIEW_AR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.IMPRESSIONS_INTERVIEW_AR" }),
    size: 12,
    validation: Yup.string(),
  },

])


export const WhoAMIFieldsFr = _.memoize(({ intl }) => [
  {
    name: "aboutYourselfFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.ABOUT_YOUR_SELF_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.ABOUT_YOUR_SELF_FR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "strengthsWeaknessesFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.STRENGTHS_WEAKNESSES_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.STRENGTHS_WEAKNESSES_FR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "careerLifeFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.CAREER_LIFE_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.CAREER_LIFE_FR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "readyToJoinFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.READY_TO_JOIN_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.READY_TO_JOIN_FR" }),
    size: 12,
    validation: Yup.string(),
  },
  {
    name: "impressionsInterviewFr",
    component: TEXTAREA,
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.IMPRESSIONS_INTERVIEW_FR" }),
    placeholder: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.IMPRESSIONS_INTERVIEW_FR" }),
    size: 12,
    validation: Yup.string(),
  },
  
])
