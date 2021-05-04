import _ from "lodash"


export const whoAMIFieldsAr = _.memoize(({ intl }) => [
  {
    name: "aboutYourselfAr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.ABOUT_YOUR_SELF_AR" }),
    size: 12,
  },
  {
    name: "strengthsWeaknessesAr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.STRENGTHS_WEAKNESSES_AR" }),
    size: 12,
  },
  {
    name: "careerLifeAr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.CAREER_LIFE_AR" }),
    size: 12,
  },
  {
    name: "readyToJoinAr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.READY_TO_JOIN_AR" }),
    size: 12,
  },
  {
    name: "impressionsInterviewAr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.IMPRESSIONS_INTERVIEW_AR" }),
    size: 12,
  },

])


export const whoAMIFieldsFr = _.memoize(({ intl }) => [
  {
    name: "aboutYourselfFr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.ABOUT_YOUR_SELF_FR" }),
    size: 12,
  },
  {
    name: "strengthsWeaknessesFr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.STRENGTHS_WEAKNESSES_FR" }),
    size: 12,
  },
  {
    name: "careerLifeFr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.CAREER_LIFE_FR" }),
    size: 12,
  },
  {
    name: "readyToJoinFr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.READY_TO_JOIN_FR" }),
    size: 12,
  },
  {
    name: "impressionsInterviewFr",
    label: intl.formatMessage({ id: "FOLDER.HOWAMI.INPUT.IMPRESSIONS_INTERVIEW_FR" }),
    size: 12,
  }, 
])
