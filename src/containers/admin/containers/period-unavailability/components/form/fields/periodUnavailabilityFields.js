import * as Yup from 'yup'
import { ASYNC_SELECT, DATE_PICKER } from '../../../../../../../components/partials'
import { consultantUIHelper } from '../../../../../UIHelpers'

// Validation schema
export const periodUnavailabilityFields = ({ intl, isSuperAdmin }) => {
  let fields = []
  if (isSuperAdmin) {
    fields = [{
      name: 'user',
      label: intl.formatMessage({ id: 'FOLDER.INPUT.USER' }),
      placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.USER' }),
      component: ASYNC_SELECT,
      loadOptions: consultantUIHelper,
      size: 12,
      required: true,
      validation: Yup.string().required()
    }]
  }

  return fields.concat([
    {
      name: 'startDate',
      component: DATE_PICKER,
      label: intl.formatMessage({ id: 'FOLDER.INPUT.DATE_START' }),
      placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.DATE_START' }),
      validation: Yup.string().nullable().required(),
      required: true,
      timeFormat: true,
      size: 12
    },
    {
      name: 'endDate',
      component: DATE_PICKER,
      label: intl.formatMessage({ id: 'FOLDER.INPUT.DATE_END' }),
      placeholder: intl.formatMessage({ id: 'FOLDER.INPUT.DATE_END' }),
      validation: Yup.string().nullable().required(),
      required: true,
      timeFormat: true,
      size: 12
    }
  ])
}
