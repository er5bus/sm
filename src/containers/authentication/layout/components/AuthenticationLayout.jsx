/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import { Trans } from 'react-i18next'

import { Img } from "./../../../../components/controls"

import { toAbsoluteUrl } from "../../../../helpers";
import { APP_VERSION } from "../../../../constants";


const Layout = ({ children }) => (
  <>
    {/*<!--begin::Main-->*/}
    <div className="d-flex flex-column flex-root">
      {/*<!--begin::Authentication - Sign-in -->*/}
      <div className="d-flex flex-column flex-lg-row flex-column-fluid">
        {/*<!--begin::Aside-->*/}
        <div className="d-flex flex-column flex-lg-row-auto w-xl-600px aside-auth-bg">
          {/*<!--begin::Header-->*/}
          <div className="d-flex flex-column text-center p-10 pt-lg-20">
            {/*<!--begin::Logo-->*/}
            <a href="index.html" className="py-9">
              <Img
                alt="Logo"
                className="h-70px"
                path="/media/logos/logo.svg"
              />
            </a>
            {/*<!--end::Logo-->*/}
            {/*<!--begin::Title-->*/}
            <h1 className="fw-bolder fs-2qx pb-5 pb-md-10">Welcome to Kastima</h1>
            {/*<!--end::Title-->*/}
            {/*<!--begin::Description-->*/}
            <p className="fw-bold fs-2">Discover Amazing Kastima <br />with great build tools</p>
            {/*<!--end::Description-->*/}
          </div>
          {/*<!--end::Header-->*/}
          {/*<!--begin::Illustration-->*/}
          <div
            className="d-flex flex-row-fluid bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-size-lg-auto bgi-position-y-bottom min-h-100px min-h-lg-350px"
            style={{
              backgroundImage: `url(${toAbsoluteUrl("/media/svg/illustrations/checkout.svg")})`,
            }} />
          {/*<!--end::Illustration-->*/}
        </div>
        {/*<!--begin::Aside-->*/}
        {/*<!--begin::Body-->*/}
        <div className="d-flex flex-column flex-lg-row-fluid py-10">
          {/*<!--begin::Content-->*/}
          <div className="d-flex flex-center flex-column flex-column-fluid">
            {/*<!--begin::Wrapper-->*/}
            <div className="w-lg-500px p-10 p-lg-15 mx-auto">
              {children}
            </div>
            {/*<!--end::Wrapper-->*/}
          </div>
          {/*<!--end::Content-->*/}
          {/*<!--begin::Footer-->*/}
          <div className="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
            {/*<!--begin::Links-->*/}
            <div className="d-flex flex-center fw-bold fs-6">
              <div className="text-dark-50 font-weight-bold order-2 order-sm-1 my-2">
                {/*new Date().getFullYear()} © {APP_VERSION}*/}
            </div>
            </div>
            {/*<!--end::Links-->*/}
          </div>
          {/*<!--end::Footer-->*/}
        </div>
        {/*<!--end::Body-->*/}
      </div>
      {/*<!--end::Authentication - Sign-in-->*/}
    </div>
    {/*<!--end::Main-->*/}
  </>
)

export default Layout;
