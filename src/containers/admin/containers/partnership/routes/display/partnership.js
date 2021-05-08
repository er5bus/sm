import routes from "./../../../../routes"
import { combinePathRoutes } from "./../../../../../../helpers"

import PartnershipDisplay from "./../../components/display/PartnershipDisplay"


import { MODULES_PERMISSIONS, ACTIVATE } from "../../../../../../constants"

const { PARTNERSHIP } = MODULES_PERMISSIONS


const partnershipDisplay = {
  path: "/partnership",
  component: PartnershipDisplay,
  can: PARTNERSHIP.permissions[ACTIVATE]
}


export default combinePathRoutes(
  {
    path: routes.partnershipShow.path
  },
  {
    partnershipDisplay,
  }
)
