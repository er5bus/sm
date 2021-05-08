/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid,jsx-a11y/role-supports-aria-props */
import React, {useEffect} from "react"
import { injectIntl } from "react-intl"
import PartnershipForm from "./components/form/PartnershipForm"
import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"


const Partnership = ({ history, intl, match: { params } }) => {

  const suhbeader = useSubheader()
  useEffect(() => {
    suhbeader.setTitle(intl.formatMessage({ id: "PARTNERSHIP.NEW.TITLE" }))

    // eslint-disable-next-line
  }, [])

  const goBackToPartnershipsList = () => {
    history.push(routes.partnershipList.path)
  }

  return (
    <>
      <PartnershipForm
        goBackToList={goBackToPartnershipsList}
        params={params}
      />
    </>
  )
}


export default injectIntl(Partnership)
