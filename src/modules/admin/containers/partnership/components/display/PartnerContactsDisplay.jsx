import React, { useEffect, useState } from "react"
import { FormattedMessage, injectIntl } from "react-intl"

import { sendDownloadRequest } from "./../../../../../../helpers"
import { ENDPOINTS } from "./../../store/constants"

import { shallowEqual, useSelector, useDispatch } from "react-redux"
import { fetchPartnershipFamilyInformation } from "./../../store/actions"

import {
  DisplayItem,
  ItemNotFound,
  Card,
  CardBody,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar,
} from "./../../../../../../components/partials/controls"

import {
  RELATIONSHIP,
  HAS_ONE_PARENT_INDICATIONS,
  DISJOINTED_INDICATIONS,
  ONE_PARENT_ABSENCE_INDICATIONS,
  WITHOUT_SUPPORT_INDICATIONS,
  REGENERATIVE_FORMULA_INDICATIONS,
  EXTENDED_FAMILY_INDICATIONS,
  FAMILY_RECEPTION_INDICATIONS
} from "./../../../../UIHelpers";


import AssignmentIcon from "@material-ui/icons/Assignment"
import PrintIcon from '@material-ui/icons/Print';

import { Row, Col } from "react-bootstrap"
import { isRLTLang } from "../../../../../../i18n"

import { getLang } from "./../../../../../../i18n"
import { AR, FR } from "./../../../../../../constants"

import routesForm from "./../../routes/edit"

const LANGUAGES = {
  [FR]: "french-version",
  [AR]: "arabic-version"
}

const FamilyInformation = ({ params, history, goBackToList, editRef, intl }) => {

  // Tabs
  const [tab, setTab] = useState(LANGUAGES[getLang()])

  const dispatch = useDispatch()

  const { isFetching, item } = useSelector(
    (state) => ({
      isFetching: state.admin.partnership.isFetching,
      item: state.admin.partnership.partnershipExtraData,
    }),
    shallowEqual
  )

  const goToEditFamilyInformation = () => {
    history.push(routesForm.familyInformationForm.path.replace(":param", params.param))
  }

  const downloadPartnership = () => {
    sendDownloadRequest(ENDPOINTS.EXPORT_PARTNERSHIP.replace(":param", params.param), {}, `file.docx`)
  }

  useEffect(() => {
    dispatch(fetchPartnershipFamilyInformation(params))
    // eslint-disable-next-line
  }, [])

  return (
    <Card>
      {isFetching && <ModalProgressBar />}
      <CardHeader title={intl.formatMessage({ id: "FAMILY_INFORMATION.SHOW.TITLE" })}>
        <CardHeaderToolbar>
          <button
            type="button"
            onClick={goBackToList}
            className="btn btn-sm btn-light mx-2"
          >
            {isRLTLang() ?
              <>
                <FormattedMessage id="GENERAL.BACK" />
                <i className="fa fa-arrow-left" />
              </>
              : <>
                <i className="fa fa-arrow-left" />
                <FormattedMessage id="GENERAL.BACK" />
              </>
            }
          </button>
          <button
            type="button"
            className="btn btn-sm btn-warning btn-hover-warning"
            onClick={goToEditFamilyInformation}
          >
            <FormattedMessage id="GENERAL.EDIT" />
          </button>
          {/* Print Button Start */}
          <button
            type="button"
            className="btn btn-sm btn-icon btn-light btn-hover-success mx-3 my-1 "
            onClick={downloadPartnership}
          >
            <PrintIcon />
          </button>
          {/* Print Button End */}
        </CardHeaderToolbar>
      </CardHeader>
      <CardBody>
        {(!isFetching && !item) && <ItemNotFound />}
        {(!isFetching && item) && <>
          <button ref={editRef} onClick={goToEditFamilyInformation} className="d-none" type="button"></button>
          <ul className="nav nav-tabs nav-tabs-line " role="tablist">
            <li className="nav-item" onClick={() => setTab(LANGUAGES[FR])}>
              <span
                className={`nav-link ${tab === "french-version" && "active"}`}
                dataToggle="tab"
                role="button"
                ariaSelected={(tab === "french-version").toString()}
              >
                {intl.formatMessage({ id: "GENERAL.FRENCH_VERSION" })}
              </span>
            </li>
            <li className="nav-item" onClick={() => setTab(LANGUAGES[AR])}>
              <span
                className={`nav-link ${tab === "arabic-version" && "active"}`}
                dataToggle="tab"
                role="button"
                ariaSelected={(tab === "arabic-version").toString()}
              >
                {intl.formatMessage({ id: "GENERAL.ARABIC_VERSION" })}
              </span>
            </li>
          </ul>
          <Row>
            <Col >
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.IS_NORMAL_COMBINATION" })}
                secondary={item.isNormalCombination
                  ? intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_NORMAL_COMBINATION" })
                  : intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_NO_NORMAL_COMBINATION" })
                }
              />
            </Col>
          </Row>
          {item.isNormalCombination && <>
            <Row>
              <Col lg="3">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_ONE_PARENT_TYPE" })}
                  secondary={intl.formatMessage({ id: HAS_ONE_PARENT_INDICATIONS[item.hasOneParentType] || "GENERAL.EMPTY" })}
                />
              </Col>
              <Col lg="3">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.DISJOINTED_TYPE" })}
                  secondary={intl.formatMessage({ id: DISJOINTED_INDICATIONS[item.disjointedType] || "GENERAL.EMPTY" })}
                />
              </Col>
              <Col lg="3">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.ONE_PARENT_ABSENCE_TYPE" })}
                  secondary={intl.formatMessage({ id: ONE_PARENT_ABSENCE_INDICATIONS[item.oneParentAbsenceType] || "GENERAL.EMPTY" })}
                />
              </Col>
              <Col lg="3">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.WITHOUT_SUPPORT_TYPE" })}
                  secondary={intl.formatMessage({ id: WITHOUT_SUPPORT_INDICATIONS[item.withoutSupportType] || "GENERAL.EMPTY" })}
                />
              </Col>
            </Row>
          </>}
          <Row>
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.IS_REGENERATIVE_FORMULA" })}
                secondary={item.isRegenerativeFormula
                  ? intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_REGENERATIVE_FORMULA" })
                  : intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_NO_REGENERATIVE_FORMULA" })
                }
              />
            </Col>
            {item.isRegenerativeFormula && <>
              <Col lg="4">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.REGENERATIVE_FORMULA_TYPE" })}
                  secondary={
                    intl.formatMessage({ id: REGENERATIVE_FORMULA_INDICATIONS[item.regenerativeFormulaType] || "GENERAL.EMPTY" })
                  }
                />
              </Col>
            </>}
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.IS_FAMILY_RECEPTION" })}
                secondary={item.isFamilyReception
                  ? intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_FAMILY_RECEPTION" })
                  : intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_NO_FAMILY_RECEPTION" })
                }
              />
            </Col>
            {item.isFamilyReception && <>
              <Col lg="4">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.FAMILY_RECEPTION_TYPE" })}
                  secondary={
                    intl.formatMessage({ id: FAMILY_RECEPTION_INDICATIONS[item.familyReceptionType] || "GENERAL.EMPTY" })
                  }
                />
              </Col>
            </>}
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.IS_EXTENDED_FAMILY" })}
                secondary={item.isExtendedFamily
                  ? intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_EXTENDED_FAMILY" })
                  : intl.formatMessage({ id: "PARTNERSHIP.INPUT.HAS_NO_EXTENDED_FAMILY" })
                }
              />
            </Col>
            {item.isExtendedFamily && <>
              <Col lg="4">
                <DisplayItem
                  icon={AssignmentIcon}
                  primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.EXTENDED_FAMILY_TYPE" })}
                  secondary={
                    intl.formatMessage({ id: EXTENDED_FAMILY_INDICATIONS[item.extendedFamilyType] || "GENERAL.EMPTY" })
                  }
                />
              </Col>
            </>}
          </Row>
          <Row>
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.CHILDREN_MOTHER_RELATIONSHIP" })}
                secondary={intl.formatMessage({ id: RELATIONSHIP[item.childrenMotherRelationship] || "GENERAL.EMPTY" })}
              />
            </Col>
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.CHILDREN_FATHER_RELATIONSHIP" })}
                secondary={intl.formatMessage({ id: RELATIONSHIP[item.childrenFatherRelationship] || "GENERAL.EMPTY" })}
              />
            </Col>
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.BROTHERS_RELATIONSHIP" })}
                secondary={intl.formatMessage({ id: RELATIONSHIP[item.brothersRelationship] || "GENERAL.EMPTY" })}
              />
            </Col>
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.BENEFICIARY_RELATIONSHIP_FAMILY" })}
                secondary={intl.formatMessage({ id: RELATIONSHIP[item.beneficiaryRelationshipFamily] || "GENERAL.EMPTY" })}
              />
            </Col>
            <Col lg="4">
              <DisplayItem
                icon={AssignmentIcon}
                primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.PARENTAL_RELATIONSHIP" })}
                secondary={intl.formatMessage({ id: RELATIONSHIP[item.parentalRelationship] || "GENERAL.EMPTY" })}
              />
            </Col>
          </Row>
          <div className="mt-5 mb-5">
            {tab === LANGUAGES[AR] && <>
              <Row>
                <Col lg="12">
                  <DisplayItem
                    icon={AssignmentIcon}
                    primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.CONCLUSIONS_AR", })}
                    secondary={item.conclusionsAr}
                  />
                </Col>
              </Row>
            </>}
            {tab === LANGUAGES[FR] && <>
              <Row>
                <Col lg="12">
                  <DisplayItem
                    icon={AssignmentIcon}
                    primary={intl.formatMessage({ id: "PARTNERSHIP.INPUT.CONCLUSIONS_FR", })}
                    secondary={item.conclusionsFr}
                  />
                </Col>
              </Row>
            </>}
          </div>
        </>
        }
      </CardBody>
    </Card>

  )
}

export default injectIntl(FamilyInformation)
