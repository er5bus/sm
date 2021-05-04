/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import {Link} from "react-router-dom"
import {AR, FR} from "../../../../../../../../../constants"
import {getLang} from "../../../../../../../../../i18n"
import routes from "../../../../../../../routes"
import {getAttr} from "../../../../../../../../../helpers"


const SERVICE_NAME = {
  [FR]: "labelFr",
  [AR]: "labelAr",
}

const ServiceColumnFormatter = (
  cellContent
) => (
  <Link to={routes.serviceShow.path.replace(":param", cellContent.id)}>
    { getAttr(cellContent, SERVICE_NAME[getLang()], "") }
  </Link>
);


export default ServiceColumnFormatter
