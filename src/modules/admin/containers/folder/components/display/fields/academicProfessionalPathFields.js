import _ from 'lodash'

export const academicProfessionalPathFieldsAr = _.memoize(({ intl }) => [
  {
    name: 'lastAcademicTrackAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_ACADEMIC_TRACK_AR' }),
    size: 12,
  },
  {
    name: 'academicInterestsAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_INTERESTS_AR' }),
    size: 12,
  },
  {
    name: 'academicPathAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_PATH_AR' }),
    size: 12,
  },
  {
    name: 'lastCareerPathsAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_CAREER_PATHS_AR' }),
    size: 12,
  },
  {
    name: 'careerPathsInterestsAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_INTERESTS_AR' }),
    size: 12,
  },
  {
    name: 'careerPathsExpectationsAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_EXPECTATIONS_AR' }),
    size: 12,
  },
  {
    name: 'problemsAnalysisAr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.PROBLEMS_ANALYSIS_AR' }),
    size: 12,
  }

])

export const academicProfessionalPathFieldsFr = _.memoize(({ intl }) => [
  {
    name: 'lastAcademicTrackFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_ACADEMIC_TRACK_FR' }),
    size: 12,
  },
  {
    name: 'academicInterestsFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_INTERESTS_FR' }),
    size: 12,
  },
  {
    name: 'academicPathFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.ACADEMIC_PATH_FR' }),
    size: 12,
  },
  {
    name: 'lastCareerPathsFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.LAST_CAREER_PATHS_FR' }),
    size: 12,
  },
  {
    name: 'careerPathsInterestsFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_INTERESTS_FR' }),
    size: 12,
  },
  {
    name: 'careerPathsExpectationsFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.CAREER_PATHS_EXPECTATIONS_FR' }),
    size: 12,
  },
  {
    name: 'problemsAnalysisFr',
    label: intl.formatMessage({ id: 'FOLDER.ACADEMIC_PROFESSIONAL_PATH.INPUT.PROBLEMS_ANALYSIS_FR' }),
    size: 12,
  }
])
