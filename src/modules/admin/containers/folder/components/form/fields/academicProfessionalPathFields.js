import * as Yup from 'yup'
import _ from 'lodash'
import {
  TEXTAREA
} from '../../../../../../../components/partials'

export const AcademicProfessionalPathFieldsAr = _.memoize(({ intl }) => [
  {
    name: 'lastAcademicTrackAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_ACADEMIC_TRACK_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_ACADEMIC_TRACK_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'academicInterestsAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_INTERESTS_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_INTERESTS_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'academicPathAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_PATH_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_PATH_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'lastCareerPathsAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_CAREER_PATHS_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_CAREER_PATHS_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'careerPathsInterestsAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_INTERESTS_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_INTERESTS_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'careerPathsExpectationsAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_EXPECTATIONS_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_EXPECTATIONS_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'problemsAnalysisAr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.PROBLEMS_ANALYSIS_AR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.PROBLEMS_ANALYSIS_AR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  }

])

export const AcademicProfessionalPathFieldsFr = _.memoize(({ intl }) => [
  {
    name: 'lastAcademicTrackFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_ACADEMIC_TRACK_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_ACADEMIC_TRACK_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'academicInterestsFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_INTERESTS_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_INTERESTS_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'academicPathFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_PATH_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_PATH_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'lastCareerPathsFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_CAREER_PATHS_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_CAREER_PATHS_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'careerPathsInterestsFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_INTERESTS_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_INTERESTS_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'careerPathsExpectationsFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_EXPECTATIONS_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_EXPECTATIONS_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  },
  {
    name: 'problemsAnalysisFr',
    component: TEXTAREA,
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.PROBLEMS_ANALYSIS_FR' }),
    placeholder: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.PROBLEMS_ANALYSIS_FR' }),
    size: 12,
    validation: Yup.string(),
    required: false
  }
])
