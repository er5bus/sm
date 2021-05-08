/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { useLocation } from "react-router"
import { NavLink } from "react-router-dom"
import SVG from "react-inlinesvg"
import { toAbsoluteUrl, checkIsActive } from "./../../../../../../helpers"
import routes from "../../../../routes"
import { ProtectedContent, ProtectedContents } from "../../../../../../components/wrappers"


const AsideMenuList = ({ layoutProps }) => {
  const location = useLocation()
  const getMenuItemActive = (url, hasSubmenu = false) => {
    return checkIsActive(location, url)
      ? ` ${!hasSubmenu && "menu-item-active"} menu-item-open `
      : ""
  }

  return (
    <>
      {/* begin::Menu Nav */}
      <ul className={`menu-nav ${layoutProps.ulClasses}`}>

        {/*<li
          className={`menu-item ${getMenuItemActive(routes.dashboard.path, false)}`}
          aria-haspopup="true"
        >
          <NavLink className="menu-link" to={ routes.dashboard.path }>
            <span className="svg-icon menu-icon">
              <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Library.svg")}/>
            </span>
            <span className="menu-text">
              <FormattedMessage id="MENU.DASHBOARD" />
            </span>
          </NavLink>
        </li>*/}
        <ProtectedContent rule={routes.home}>
          <li
            className={`menu-item ${getMenuItemActive(routes.home.path, false)}`}
            aria-haspopup="true"
          >
            <NavLink className="menu-link" to={routes.home.path}>
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Home.svg")} />
              </span>
              <span className="menu-text">
                <FormattedMessage id="MENU.HOME" />
              </span>
            </NavLink>
          </li>
        </ProtectedContent>
        <ProtectedContents rules={[routes.schoolDropoutList]}>
          <ProtectedContent rule={routes.schoolDropoutList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.schoolDropoutList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.schoolDropoutList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Map/Position.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.SPOTTING_REPORT" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>
        <ProtectedContents rules={[routes.folderList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.FOLDER_MANAGEMENT" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          <ProtectedContent rule={routes.folderList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.folderList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.folderList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Folder.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.FOLDER" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.folderGroupList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.folderGroupList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.folderGroupList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Files/Group-folders.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.FOLDER_GROUP" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.folderList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.consultantCalendar.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.consultantCalendar.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Clipboard-list.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.CALENDAR" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>

        <ProtectedContents rules={[routes.serviceList, routes.partnershipList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.PARTNERSHIP_SERVICES" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          <ProtectedContent rule={routes.partnershipList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.partnershipList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.partnershipList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Adress-book2.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.PARTNER" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.serviceList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.serviceList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.serviceList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Shopping/Wallet.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.SERVICES" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>

        {/* Error Pages */}
        <ProtectedContents rules={[routes.evaluationRubricList, routes.assessmentToolList, routes.assessmentLevelList, routes.knowledgeSkillList, routes.aptitudeSkillList, routes.skillList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.EDUCATIONAL_REPOSITORY" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          {/*begin::1 Level*/}
          <li
            className={`menu-item menu-item-submenu ${[routes.evaluationRubricList, routes.assessmentToolList, routes.assessmentLevelList, routes.knowledgeSkillList, routes.aptitudeSkillList, routes.skillList].map((route) => getMenuItemActive(route.path, true)).join(" ")}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/education">
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Book-open.svg")} />
              </span>
              <span className="menu-text"><FormattedMessage id="MENU.EDUCATIONAL_REPOSITORY" /></span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text"><FormattedMessage id="MENU.EDUCATIONAL_REPOSITORY" /></span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <ProtectedContent rule={routes.skillList}>
                  <li
                    className={`menu-item ${getMenuItemActive(routes.skillList.path, false)}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to={routes.skillList.path}>
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Home/Commode2.svg")} />
                      </span>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.SKILL" />
                      </span>
                    </NavLink>
                  </li>
                </ProtectedContent>

                <ProtectedContent rule={routes.evaluationRubricList}>
                  <li
                    className={`menu-item ${getMenuItemActive(routes.evaluationRubricList.path, false)}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to={routes.evaluationRubricList.path}>
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Weather/Storm.svg")} />
                      </span>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.EVALUATION_RUBRIC" />
                      </span>
                    </NavLink>
                  </li>
                </ProtectedContent>

                <ProtectedContent rule={routes.assessmentLevelList}>
                  <li
                    className={`menu-item ${getMenuItemActive(routes.assessmentLevelList.path, false)}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to={routes.assessmentLevelList.path}>
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Media/Airplay.svg")} />
                      </span>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ASSESSMENT_LEVEL" />
                      </span>
                    </NavLink>
                  </li>
                </ProtectedContent>

                <ProtectedContent rule={routes.assessmentToolList}>
                  <li
                    className={`menu-item ${getMenuItemActive(routes.assessmentToolList.path, false)}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to={routes.assessmentToolList.path}>
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Road-Cone.svg")} />
                      </span>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.ASSESSMENT_TOOL" />
                      </span>
                    </NavLink>
                  </li>
                </ProtectedContent>
                {/*end::2 Level*/}
              </ul>
            </div>
          </li>
          {/*end::1 Level*/}
        </ProtectedContents>

        <ProtectedContents rules={[routes.userList, routes.userGroupList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.USER_MANAGEMENT" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          <ProtectedContent rule={routes.userList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.userList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.userList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/General/User.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.USER" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
          <ProtectedContent rule={routes.userGroupList}>
            <li
              className={`menu-item ${getMenuItemActive(routes.userGroupList.path, false)}`}
              aria-haspopup="true"
            >
              <NavLink className="menu-link" to={routes.userGroupList.path}>
                <span className="svg-icon menu-icon">
                  <SVG src={toAbsoluteUrl("/media/svg/icons/Communication/Group.svg")} />
                </span>
                <span className="menu-text">
                  <FormattedMessage id="MENU.GROUP" />
                </span>
              </NavLink>
            </li>
          </ProtectedContent>
        </ProtectedContents>

        {/* Error Pages */}
        <ProtectedContents rules={[routes.availabilitySettingStructureList, routes.availabilitySettingUserList]}>
          {/* begin::section */}
          <li className="menu-section ">
            <h4 className="menu-text"><FormattedMessage id="MENU.SETTINGS" /></h4>
            <i className="menu-icon flaticon-more-v2"></i>
          </li>
          {/* end:: section */}
          {/*begin::1 Level*/}
          <li
            className={`menu-item menu-item-submenu ${[routes.availabilitySettingUserList, routes.availabilitySettingStructureList].map((route) => getMenuItemActive(route.path, true)).join(" ")}`}
            aria-haspopup="true"
            data-menu-toggle="hover"
          >
            <NavLink className="menu-link menu-toggle" to="/settings">
              <span className="svg-icon menu-icon">
                <SVG src={toAbsoluteUrl("/media/svg/icons/Tools/Tools.svg")} />
              </span>
              <span className="menu-text"><FormattedMessage id="MENU.SETTINGS" /></span>
              <i className="menu-arrow"/>
            </NavLink>
            <div className="menu-submenu ">
              <i className="menu-arrow"/>
              <ul className="menu-subnav">
                <li className="menu-item  menu-item-parent" aria-haspopup="true">
                  <span className="menu-link">
                    <span className="menu-text"><FormattedMessage id="MENU.SETTINGS" /></span>
                  </span>
                </li>

                {/*begin::2 Level*/}
                <ProtectedContent rule={routes.availabilitySettingUserList}>
                  <li
                    className={`menu-item ${getMenuItemActive(routes.availabilitySettingUserList.path, false)}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to={routes.availabilitySettingUserList.path}>
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Time-schedule.svg")} />
                      </span>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.AVAILABILITY_SETTINGS_USER" />
                      </span>
                    </NavLink>
                  </li>
                </ProtectedContent>
                <ProtectedContent rule={routes.availabilitySettingStructureList}>
                  <li
                    className={`menu-item ${getMenuItemActive(routes.availabilitySettingStructureList.path, false)}`}
                    aria-haspopup="true"
                  >
                    <NavLink className="menu-link" to={routes.availabilitySettingStructureList.path}>
                      <span className="svg-icon menu-icon">
                        <SVG src={toAbsoluteUrl("/media/svg/icons/Code/Time-schedule.svg")} />
                      </span>
                      <span className="menu-text">
                        <FormattedMessage id="MENU.AVAILABILITY_SETTINGS_STRCUTURE" />
                      </span>
                    </NavLink>
                  </li>
                </ProtectedContent>
              </ul>
            </div>
          </li>
        </ProtectedContents>
      </ul>
      {/* end::Menu Nav */}

    </>
  )
}


export default AsideMenuList
