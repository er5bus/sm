//import PeriodUnavailabilityActivateDialog from "./../components/dialog/PeriodUnavailabilityActivateDialog"
import PeriodUnavailabilityDeleteDialog from "./../components/dialog/PeriodUnavailabilityDeleteDialog"
import PeriodUnavailabilityImportDialog from "./../components/dialog/PeriodUnavailabilityImportDialog"
import PeriodUnavailabilityNewEditDialog from "./../components/dialog/PeriodUnavailabilityNewEditDialog"
import PeriodUnavailabilityShowDialog from "./../components/dialog/PeriodUnavailabilityDisplayDialog"

import {MODULES_PERMISSIONS, CREATE, VIEW, UPDATE, DELETE} from "../../../../../constants"


const {PERIOD_UNAVAILABILITY} = MODULES_PERMISSIONS


/*export const periodUnavailabilityActivate = {
  path: "/activate/:param",
  component: PeriodUnavailabilityActivateDialog,
  can: PERIOD_UNAVAILABILITY.permissions[ACTIVATE]
}*/

export const periodUnavailabilityDelete = {
  path: "/delete/:param",
  component: PeriodUnavailabilityDeleteDialog,
  can: PERIOD_UNAVAILABILITY.permissions[DELETE]
}

export const periodUnavailabilityImport = {
  path: "/import",
  component: PeriodUnavailabilityImportDialog,
  can: PERIOD_UNAVAILABILITY.permissions[CREATE]
}

export const periodUnavailabilityCreate = {
  path: "/create",
  component: PeriodUnavailabilityNewEditDialog,
  can: PERIOD_UNAVAILABILITY.permissions[CREATE]
}

export const periodUnavailabilityEdit = {
  path: "/:param/update",
  component: PeriodUnavailabilityNewEditDialog,
  can: PERIOD_UNAVAILABILITY.permissions[UPDATE]
}


export const periodUnavailabilityShow = {
  path: "/:param/view",
  component: PeriodUnavailabilityShowDialog,
  can: PERIOD_UNAVAILABILITY.permissions[VIEW]
}
