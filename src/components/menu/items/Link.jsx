import React, {useEffect} from "react"
import { NavLink, useLocation } from "react-router-dom"
import {useControlUISelector} from "../.."
import { ProtectedContent } from "../../../../wrappers"
import { checkIsActive } from "./../../../../../helpers"

const Link = ({ rule, route, spacing="", hideOn=false, condition=false, label, icon }) => {

  const controleUiProps = useControlUISelector()
  const location = useLocation()
  const getMenuItemActive = (url) => checkIsActive(location, url)

  useEffect(() => {
    if (controleUiProps && getMenuItemActive(route)){
      controleUiProps.setDisplayContent(!(hideOn && condition))
    }

    // eslint-disable-next-line
  }, [hideOn, condition])

  const Icon = icon

  return ( (hideOn && condition) ? <></> :
    <ProtectedContent rule={rule}>
      <div className="navi-item mb-2">
        <NavLink to={route} className="navi-link py-4">
          <span className={spacing}>
            <span className="navi-icon mr-2">
              <span className="svg-icon">
                <Icon />
              </span>
            </span>
            <span className="navi-text font-size-lg">{label}</span>
          </span>
        </NavLink>
      </div>
    </ProtectedContent>
  )
}

export default Link
