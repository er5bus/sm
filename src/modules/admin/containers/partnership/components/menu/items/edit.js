import StorefrontIcon from '@material-ui/icons/Storefront'
import StoreIcon from '@material-ui/icons/Store'

import routes from './../../../routes/edit'

const items = ({ intl, param }) => [
  {
    rule: routes.partnershipForm,
    icon: StorefrontIcon,
    route: routes.partnershipForm.path.replace(':param', param),
    label: intl.formatMessage({ id: 'MENU.PARTNER' })
  },
  {
    rule: routes.serviceList,
    icon: StoreIcon,
    route: routes.serviceList.path.replace(':param', param),
    label: intl.formatMessage({ id: 'MENU.SERVICES' })
  }
]

export default items
