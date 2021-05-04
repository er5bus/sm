import {AR, FR} from "../../../../../../../constants";

export const periodUnavailabilityFields = ({ intl, isSuperAdmin }) => [
  {
    name: {
      [FR]: ["userDetails.firstName", "userDetails.lastName"],
      [AR]: ["userDetails.firstNameAr", "userDetails.lastNameAr"]
    },
    hide: true,
    condition: isSuperAdmin,
    label: intl.formatMessage({ id: "FOLDER.INPUT.USER" }),
    size: 12,
  },
  {
    name: "startDate",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_START" }),
    size: 12
  },
  {
    name: "endDate",
    label: intl.formatMessage({ id: "FOLDER.INPUT.DATE_END" }),
    size: 12
  },
]
