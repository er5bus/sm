import _ from "lodash"
import * as Yup from "yup"
import { /*ASYNC_SELECT,*/ INPUT, INPUT_MASK } from "./../../../../../../../components/partials"
//import addressUIHelper from "../../../../../../common/UIHelpers/addressUIHelper"


// Validation schema
const personalInformationFields = ({ intl }) => [
  {
    name: "user.firstNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME_AR" }),
    validation: Yup.string().min(2).max(200).required(),
    size: 6,
  },
  {
    name: "user.firstName",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.FIRST_NAME_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    size: 6,
  },
  {
    name: "user.lastNameAr",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.LAST_NAME_AR" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.LAST_NAME_AR" }),
    validation: Yup.string().min(2).max(200).required(),
    size: 6,
  },
  {
    name: "user.lastName",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.LAST_NAME_FR" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.LAST_NAME_FR" }),
    validation: Yup.string().min(2).max(200).required(),
    size: 6,
  },
  {
    name: "phone",
    component: INPUT_MASK,
    mask: "99999999",
    label: intl.formatMessage({ id: "USER.INPUT.MOBILE" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.MOBILE" }),
    size: 6,
    validation: Yup.number().phone(),
    maxLength: 8,
  },
  {
    name: "secondPhone",
    component: INPUT,
    label: intl.formatMessage({ id: "USER.INPUT.PHONE" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.PHONE" }),
    size: 6,
    validation: Yup.number().phone(),
  },
  {
    name: "currentPassword",
    inputGroupClassName: "pt-5",
    component: INPUT,
    type: "password",
    label: intl.formatMessage({ id: "USER.INPUT.CURRENT_PASSWORD" }),
    placeholder: intl.formatMessage({ id: "USER.INPUT.CURRENT_PASSWORD" }),
    size: 12,
    validation: Yup.string().min(2).max(200).required(),
  },
]


export default _.memoize(personalInformationFields)
