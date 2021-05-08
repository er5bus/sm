import * as Yup from 'yup'

import {
  INPUT,
  CHECKBOX,
  INPUT_MASK,
} from "../../../../../../../components/partials"


// Validation schema
export const partnershipContactFields = ({ intl }) => [
  {
    name: "contactSet[].email",
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.EMAIL" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.EMAIL" }),
    size: 4,
    validation: Yup.string().email().required()
  },
  {
    name: "contactSet[].phone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PHONE" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.PHONE" }),
    size: 2,
    validation: Yup.string().max(8)
  },
  {
    name: "contactSet[].isPrincipal",
    component: CHECKBOX,
    options: [
      { value: true, label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.IS_PRINCIPAL" }) }
    ],
    initialValue: false,
    checkboxSize: "sm",
    size: 2,
  }
]

// Validation schema
export const partnershipContactFieldsAr = ({ intl }) => [
  {
    name: 'contactSet[].firstNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.FIRST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.FIRST_NAME_AR" }),
    size: 2,
    validation: Yup.string().required(),
  },
  {
    name: 'contactSet[].lastNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LAST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LAST_NAME_AR" }),
    size: 2,
    validation: Yup.string().required(),
  },
]

export const partnershipContactFieldsFr = ({ intl }) => [
  {
    name: 'contactSet[].firstNameFr',
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.FIRST_NAME_FR" }),
    size: 2,
    validation: Yup.string().required(),
  },
  {
    name: 'contactSet[].lastNameFr',
    component: INPUT,
    label: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "PARTNERSHIP.INPUT.LAST_NAME_FR" }),
    size: 2,
    validation: Yup.string().required(),
  }
]
