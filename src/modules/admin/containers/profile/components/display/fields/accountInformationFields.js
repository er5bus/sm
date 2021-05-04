// import addressUIHelper from "./../../../../../../common/UIHelpers/addressUIHelper";
import { isEmpty, isArray } from "lodash"
import {NESTED_LIST_OF_ITEMS} from "../../../../../../../components/partials"
import {
  //civilityUIHelper,
  permissionUIHelper
} from "./../../../../../UIHelpers"


export const accountInformationFieldsAr = ({ intl }) => [
  {
    name: "user.firstNameAr",
    label: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME_AR" }),
    size: 6,
  },
  {
    name: "user.lastNameAr",
    label: intl.formatMessage({ id: "USER.INPUT.LAST_NAME_AR" }),
    size: 6
  }
]

export const accountInformationFieldsFr = ({ intl }) => [
  {
    name: "user.firstName",
    label: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME_FR" }),
    size: 6
  },
  {
    name: "user.lastName",
    label: intl.formatMessage({ id: "USER.INPUT.LAST_NAME_FR" }),
    size: 6
  }
]

export const accountInformationFields = ({ intl }) => [
  /*{
    name: "civility",
    options: civilityUIHelper(intl),
    label: intl.formatMessage({ id: "USER.INPUT.CIVILITY" }),
    size: 6,
  },

  /* {
    name: "user.username",
    label: intl.formatMessage({ id: "USER.INPUT.USERNAME" }),
    size: 6,
  }, 
{
  name: "user.email",
  label: intl.formatMessage({ id: "USER.INPUT.EMAIL" }),
  size: 6,
},
  /* {
    name: "address.headAddress",
    loadOptions: addressUIHelper,
    label: intl.formatMessage({ id: "ADDRESS.INPUT.ADDRESS" }),
  },
  {
    name: "address.addressAr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_AR" }),
    size: 6,
  },
  {
    name: "address.addressFr",
    label: intl.formatMessage({ id: "ADDRESS.INPUT.STREET_NAME_FR" }),
    size: 6,
  }, */
  {
    name: "phone",
    label: intl.formatMessage({ id: "USER.INPUT.MOBILE" }),
    size: 6,
  },
  {
    name: "secondPhone",
    label: intl.formatMessage({ id: "USER.INPUT.PHONE" }),
    size: 6
  },
  /*{
    name: "user.displayGroups[].name",
    label: intl.formatMessage({ id: "USER.INPUT.GROUP" }),
  },*/
  {
    name: "user.userPermissions",
    component: NESTED_LIST_OF_ITEMS,
    columns: ([
      { text: intl.formatMessage({ id: "GENERAL.MODULE" }) },
      { text: intl.formatMessage({ id: "GENERAL.PERMISSIONS" }) }
    ]),
    label: intl.formatMessage({ id: "USER.INPUT.PERMISSIONS" }),
    formatter: (value) => {
      let fieldValue = {}
      permissionUIHelper( (permissions) => {
        if (!isEmpty(permissions) && isArray(permissions)) {
          fieldValue = permissions.reduce((acc, permission) => {
            acc[intl.formatMessage({ id: permission.label })] = permission.options.map((perm) => intl.formatMessage({ id: perm.label }))
            return acc
          }, {})
        }}, value)
      return fieldValue
    },
    size: 12,
  }
]
