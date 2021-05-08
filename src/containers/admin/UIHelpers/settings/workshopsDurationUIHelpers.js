import {eventNatureUIHelper} from "../folder";


export const workshopsDurationUIHelper = (intl) =>
  eventNatureUIHelper(intl).map((value) => ({ eventNature: value.value, sessionTime: "01:00" }))
