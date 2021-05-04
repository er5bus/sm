/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react"
import { FormattedMessage } from "react-intl"
import { isRLTLang } from "../../../../../../../i18n"

const ServiceTypeFormatter = (
  cellContent,
  row,
  intl,
  rowIndex,
  formatExtraData
) => (
  <>
    { row.serviceType ?
    (isRLTLang() ? row.serviceType.labelAr : row.serviceType.labelFr)
    :
    <FormattedMessage id="GENERAL.EMPTY" />
    }
  </>
);


export default ServiceTypeFormatter
