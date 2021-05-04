import AvailabilitySettingStructureDeleteDialog from "./../components/dialog/AvailabilitySettingStructureDeleteDialog"
import AvailabilitySettingStructuresDeleteDialog from "./../components/dialog/AvailabilitySettingStructuresDeleteDialog"
import {MODULES_PERMISSIONS, DEACTIVATE} from "../../../../../constants"


const {AVAILABILITY_SETTING_STRUCTURE} = MODULES_PERMISSIONS


export const availabilitySettingStructureDelete = {
  path: "/delete/availabilitySettingStructure/:param",
  component: AvailabilitySettingStructureDeleteDialog,
  can: AVAILABILITY_SETTING_STRUCTURE.permissions[DEACTIVATE]
}

export const availabilitySettingStructuresDelete = {
  path: "/delete/availabilitySettingStructures",
  component: AvailabilitySettingStructuresDeleteDialog,
  can: AVAILABILITY_SETTING_STRUCTURE.permissions[DEACTIVATE]
}
