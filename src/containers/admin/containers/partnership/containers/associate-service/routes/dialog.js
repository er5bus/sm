import AssociateServiceDeleteDialog from "./../components/dialog/AssociateServiceDeleteDialog"
import AssociateServicesDeleteDialog from "./../components/dialog/AssociateServicesDeleteDialog"

import AssociateServiceStopDialog from "./../components/dialog/AssociateServiceStopDialog"
import AssociateServiceFinishDialog from "./../components/dialog/AssociateServiceFinishDialog"
import AssociateServicePermanentDialog from "./../components/dialog/AssociateServicePermanentDialog"
import AssociateServiceInPendingDialog from "./../components/dialog/AssociateServiceInPendingDialog"

import {MODULES_PERMISSIONS, DEACTIVATE} from "../../../../../../../constants"

const {ASSOCIATE_SERVICE} = MODULES_PERMISSIONS


export const associateServiceDelete = {
  path: "/delete/associate-service/:associateServiceParam",
  component: AssociateServiceDeleteDialog,
  can: ASSOCIATE_SERVICE.permissions[DEACTIVATE]
}

export const associateServiceStop = {
  path: "/suspend/associate-service/:associateServiceParam",
  component: AssociateServiceStopDialog,
  can: ASSOCIATE_SERVICE.permissions[DEACTIVATE]
}

export const associateServiceFinish = {
  path: "/finish/associate-service/:associateServiceParam",
  component: AssociateServiceFinishDialog,
  can: ASSOCIATE_SERVICE.permissions[DEACTIVATE]
}

export const associateServicePermanent = {
  path: "/permanent/associate-service/:associateServiceParam",
  component: AssociateServicePermanentDialog,
  can: ASSOCIATE_SERVICE.permissions[DEACTIVATE]
}

export const associateServiceInProgress = {
  path: "/in-progress/associate-service/:associateServiceParam",
  component: AssociateServiceInPendingDialog,
  can: ASSOCIATE_SERVICE.permissions[DEACTIVATE]
}

export const associateServicesDelete = {
  path: "/delete/associate-services",
  component: AssociateServicesDeleteDialog,
  can: ASSOCIATE_SERVICE.permissions[DEACTIVATE]
}
