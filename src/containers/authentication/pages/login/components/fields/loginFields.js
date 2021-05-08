import * as Yup from "yup"
import { INPUT } from "./../../../../../../components/forms"


const loginFields = [
  {
    name: "email",
    component: INPUT,
    placeholder: "E-mail",
    label: "E-mail",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    type: "text",
    validation: Yup.string().nullable().required()
  },
  {
    name: "password",
    component: INPUT,
    placeholder: "Password",
    label: "Password",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    type: "password",
    validation: Yup.string().nullable().required()
  }
]


export default loginFields
