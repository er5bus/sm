import {toAbsoluteUrl} from "./../../helpers"

const Img = ({ src, path, ...props }) => {

  return <img alt="..." src={ path ? toAbsoluteUrl(path) : src } { ...props } />
}


export default Img
