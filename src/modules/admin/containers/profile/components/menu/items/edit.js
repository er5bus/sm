import PersonIcon from "@material-ui/icons/Person"
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd"
import VpnKeyIcon from "@material-ui/icons/VpnKey"

import routes from "../../../routes"

const items = ({ intl }) => [
  {
    rule: routes.personalInformation,
    icon: PersonIcon,
    route: routes.personalInformation.path,
    label: intl.formatMessage({ id: "MENU.PERSONAL_INFORMATION" })
  },
  {
    rule: routes.accountInformation,
    icon: AssignmentIndIcon,
    route: routes.accountInformation.path,
    label: intl.formatMessage({ id: "MENU.ACCOUNT_INFORMATION" })
  },
  {
    rule: routes.changePassword,
    icon: VpnKeyIcon,
    route: routes.changePassword.path,
    label: intl.formatMessage({ id: "MENU.CHANGE_PASSWORD" })
  },
]

export default items
