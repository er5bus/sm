import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import PartnershipForm from "./../../components/form/PartnershipForm"


import {MODULES_PERMISSIONS, ACTIVATE} from "../../../../../../constants"

const { PARTNERSHIP } = MODULES_PERMISSIONS


const partnershipForm = {
  path: "/partnership",
  component: PartnershipForm,
  can: PARTNERSHIP.permissions[ACTIVATE]
}

export default combinePathRoutes(
  {
    path: routes.partnershipEdit.path
  },
  {
    partnershipForm,
  }
)
