import * as Yup from 'yup'

// import addressUIHelper from "./../../../../../../common/UIHelpers/addressUIHelper";
import {
  civilityUIHelper,
  permissionUIHelper,
  groupUIHelper
} from './../../../../../UIHelpers'

import {
  // ASYNC_SELECT,
  INPUT,
  SELECT,
  INPUT_MASK,
  RADIO,
  CHECKBOX_GROUP
} from './../../../../../../../components/partials'

// Validation schema

export const userFieldsAr = ({ intl }) => [
  {
    name: 'user.firstNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_AR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_AR' }),
    size: 6,
    validation: Yup.string().min(2).max(200).required(),
    required: true
  },
  {
    name: 'user.lastNameAr',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_AR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_AR' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  }
]

export const userFieldsFr = ({ intl }) => [
  {
    name: 'user.firstName',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_FR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.FIRST_NAME_FR' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  },
  {
    name: 'user.lastName',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_FR' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.LAST_NAME_FR' }),
    validation: Yup.string().min(2).max(200).required(),
    required: true,

    size: 6
  }
]

export const userFields = ({ intl }) => [
  {
    name: 'civility',
    component: RADIO,
    options: civilityUIHelper(intl),
    label: intl.formatMessage({ id: 'USER.INPUT.CIVILITY' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.CIVILITY' }),
    validation: Yup.number().required(),
    size: 6,
    required: true
  },

  /* {
    name: "user.username",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
    size: 6,
    validation: Yup.string().min(2).max(200).required(),
  }, */
  {
    name: 'user.email',
    component: INPUT,
    label: intl.formatMessage({ id: 'USER.INPUT.EMAIL' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.EMAIL' }),
    size: 6,
    validation: Yup.string().email().required(),
    required: true
  },
  /* {
    name: "address.headAddress",
    component: ASYNC_SELECT,
    loadOptions: addressUIHelper,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
    validation: Yup.number().required(),
    required: true,
  },
  {
    name: "address.addressAr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    validation: Yup.string().min(2).max(110).required(),
    required: true,

    size: 6,
  },
  {
    name: "address.addressFr",
    component: INPUT,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    validation: Yup.string().min(2).max(110).required(),
    required: true,

    size: 6,
  }, */
  {
    name: 'phone',
    component: INPUT_MASK,
    mask: '99999999',
    label: intl.formatMessage({ id: 'USER.INPUT.MOBILE' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.MOBILE' }),
    validation: Yup.number().phone(),
    size: 6,
    maxLength: 8
  },
  {
    name: 'secondPhone',
    component: INPUT_MASK,
    mask: '99999999',
    label: intl.formatMessage({ id: 'USER.INPUT.PHONE' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.PHONE' }),
    validation: Yup.number().phone(),
    size: 6
  },
  {
    name: 'user.groups',
    component: SELECT,
    multiple: true,
    loadOptions: groupUIHelper,
    saveOptions: {
      ref: 'groups-save',
      attr: 'permissions'
    },
    label: intl.formatMessage({ id: 'USER.INPUT.GROUP' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.GROUP' }),
    validation: Yup.string().array().required(),
    required: true
  },
  {
    name: 'user.userPermissions',
    label: intl.formatMessage({ id: 'USER.INPUT.PERMISSIONS' }),
    placeholder: intl.formatMessage({ id: 'USER.INPUT.PERMISSIONS' }),
    component: CHECKBOX_GROUP,
    disabledOptionsRef: 'groups-save',
    translateLabels: true,
    loadOptions: permissionUIHelper,
    size: 12,
    validation: Yup.mixed().array()
  }
]
