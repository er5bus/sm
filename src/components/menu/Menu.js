import React from "react"
import RenderItems from "./RenderItems"
// import {/*ItemNotFound,*/ useControlUISelector} from ".."

const Menu = ({ children, items }) => {
  // const displayUiProps = useControlUISelector()

  return (
    <>
      {/* <!--begin::Aside--> */}
      <div className="flex-row-auto offcanvas-mobile" id="kt_profile_aside">
        {/* <!--begin::Profile Card--> */}
        <div className="card card-custom card-stretch">
          {/* <!--begin::Body--> */}
          <div className="card-body">
            {/* <!--begin::Contact--> */}
            {/* displayUiProps.isNotAvailableResource && <ItemNotFound message="Oops!" /> */}
            {/*! displayUiProps.isNotAvailableResource && */ children}
            <div className="navi navi-bold navi-hover navi-active navi-link-rounded">
              {items.map((item, idx) => <RenderItems key={idx} {...item} />)}
            </div>
          </div>
          {/* <!--end::Body--> */}
        </div>
        {/* <!--end::Profile Card--> */}
      </div>
      {/* <!--end::Aside--> */}
    </>
  )
}

export default React.memo(Menu)
