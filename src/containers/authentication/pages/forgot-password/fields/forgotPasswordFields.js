import * as Yup from "yup"
import {INPUT} from "../../../../../components/forms"


const forgotPasswordFields = [
  {
    name: "email",
    component: INPUT,
    label: "E-mail",
    placeholder: "E-mail",
    inputClassName: "form-control form-control-lg form-control-solid",
    inputGroupClassName: "fv-row mb-10 fv-plugins-icon-container",
    validation: Yup.string().email().nullable().required(),
    type: "text"      
  }
]


export default forgotPasswordFields
