export const SOCIAL_COVERAGE_TYPES = {
  1: 'SOCIAL_COVERAGE_TYPES.CNRPS',
  2: 'SOCIAL_COVERAGE_TYPES.CNSS',
  3: 'SOCIAL_COVERAGE_TYPES.FREE_TREATMENT',
  4: 'SOCIAL_COVERAGE_TYPES.LOW_TARIFF_TREATMENT'
}

export const socialCoverageTypesUIHelper = (intl) =>
  Object.keys(SOCIAL_COVERAGE_TYPES).map((key) => ({
    value: parseInt(key),
    label: intl.formatMessage({ id: SOCIAL_COVERAGE_TYPES[key] })
  }))
