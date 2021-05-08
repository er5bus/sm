import React, { useEffect/*, useRef*/, useState } from "react"
import _ from "lodash"
import { FormattedMessage, injectIntl } from "react-intl"
import { useDispatch, useSelector } from "react-redux"
import { Button, Col, Row, Badge } from "react-bootstrap"
import { toAbsoluteUrl } from "../../../../helpers"
import {
  Card,
  CardBody,
  CardHeaderTitle,
  CardHeader,
  CardHeaderToolbar,
  ModalProgressBar,
  SnackbarError,
  DropdownList,
} from "../../../../components/partials/controls"

import { useSubheader } from "../../../../components/layout"
import routes from "./../../routes"
import { getLang, isRLTLang } from "./../../../../i18n"
import userAvailabilityDialogs from "./routes/dialogs/availability"
import {ProtectedDialogRoute} from "../../../../components/routes"
import { clearStore, fetchUserAvailabilities, loadNextAvailabilities, updateAvailabilitySettings, loadPrevAvailabilities } from "./store/actions"
import { DEFAULT_NATURE_VALUE, eventNatureUIHelper, GENDER_FEMALE, GENDER_MALE } from "./../../UIHelpers"
import FoldersLoadingDialog from "./components/loading/FoldersLoadingDialog"
import useDaysIntervalIteration from "../../../../hooks/useDateTimeIteration"
//import AvailabilityForm from "./components/form/AvailabilityForm"


const Appointment = ({ history, match: { params }, intl}) => {

  const dispatch  = useDispatch()

  const { isLoading, availabilities = [], availabilitySettings, isFetching, error, } = useSelector((state) => ({
    isLoading: state.admin.folder.isLoading, 
    availabilities: state.admin.folder.availabilities, 
    availabilitySettings: state.admin.folder.availabilitySettings, 
    isFetching: state.admin.folder.isFetching, 
    error: state.admin.folder.error
  }), _.isEqual)

  const suhbeader = useSubheader()
  const [initialValues, setInitialValues] = useState({})
  const week = useDaysIntervalIteration(availabilitySettings.startDate, availabilitySettings.endDate)

  useEffect(() => {
    suhbeader.setTitle(<FormattedMessage id="FOLDER.AVAILABILITY.TITLE" />)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const { startDate, endDate, ...props } = availabilitySettings
    dispatch(fetchUserAvailabilities({
      start: startDate.format("DD/MM/YYYY"),
      end: endDate.format("DD/MM/YYYY"),
      ...props 
    }))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [availabilitySettings])

  const clear = () => {
    dispatch(clearStore())
  }

  const openAppointmentDialog = (values) => {
    setInitialValues(values)
    history.push(userAvailabilityDialogs.userConfirmAvailability.path.replace(":param", params.param))
  }

  /*const goBackToFoldersList = () => {
    history.push(routes.folderShow.path.replace(":param", params.param))
  }*/

  const onEventNatureChange = (eventNature) => {
    dispatch(updateAvailabilitySettings({ eventNature }))
  }

  const onClickPrev = () => {
    dispatch(loadPrevAvailabilities())
  }

  const onClickNext = () => {
    dispatch(loadNextAvailabilities())
  }

  const onHide = () => {
    history.push(routes.userAvailability.path.replace(":param", params.param))
  }

  const renderRoute = ({ component, history, match })  => {
    const Component = component
    const params = (match && match.params) ? {...match.params} : {}

    return <Component
      params={params}
      show={match !== null}
      initialValues={initialValues}
      history={history}
      onHide={onHide}
    />
  }

  const renderUser = (currentUser) => {
    return (
      <>
        <div className="symbol symbol-40">
          <span className="symbol-label">
            { currentUser.gender === GENDER_MALE && <img src={toAbsoluteUrl("/media/svg/avatars/009-boy-4.svg")} className="h-100 align-self-end" alt="" /> }
            { currentUser.gender === GENDER_FEMALE && <img src={toAbsoluteUrl("/media/svg/avatars/010-girl-4.svg")} className="h-100 align-self-end" alt="" /> }
          </span>
        </div>
        <div className="d-block pt-3">
          <span className="text-dark-75 font-weight-bolder text-hover-primary mb-1 font-size-lg">
            { currentUser.firstName }
          </span>
        </div>
      </>
    )
  }

  return (
    <Row>
      { !_.isEmpty(error) && <SnackbarError open={!_.isEmpty(error)} error={error || {}} onClose={ clear } /> }
      <Col>
        <Card className="mb-5">
          <CardHeader>
            {(isLoading || isFetching) && <ModalProgressBar />}
            <div className="card-title">
              <CardHeaderTitle>
                { availabilitySettings.startDate.weeks() } <FormattedMessage id="GENERAL.WEEK_NUMBER" /> { " " }
                <span className="fas fa-grip-lines-vertical" />
                { " " }{ availabilitySettings.startDate.locale(getLang()).format('DD MMMM YYYY') }
                { " " }<span className="fas fa-long-arrow-alt-right" /> { " " }
                { availabilitySettings.endDate.locale(getLang()).format('DD MMMM YYYY') }
              </CardHeaderTitle>
            </div>
            <CardHeaderToolbar>
              {/*<Button
                type="button"
                onClick={goBackToFoldersList}
                className="btn btn-sm btn-primary mx-2"
              >
                <FormattedMessage id="GENERAL.BACK" />
              </Button>*/}
              <DropdownList
                text={intl.formatMessage({ id: "FOLDER.INPUT.SUBJECT" })}
                options={eventNatureUIHelper(intl)}
                defaultOption={DEFAULT_NATURE_VALUE}
                onChange={onEventNatureChange}
              />
              <Button
                type="button"
                onClick={onClickPrev}
                className="btn btn-sm btn-light mx-2"
              >
                { isRLTLang() ?
                  <>
                    <FormattedMessage id="GENERAL.PREV_WEEK" />
                    <i className="fa fa-arrow-left" />
                  </>
                  : <>
                    <i className="fa fa-arrow-left" />
                    <FormattedMessage id="GENERAL.PREV_WEEK" />
                  </>
                }
              </Button>
              <Button
                type="button"
                onClick={onClickNext}
                className="btn btn-sm btn-light mx-2"
              >
                { isRLTLang() ?
                  <>
                    <FormattedMessage id="GENERAL.NEXT_WEEK" />
                    <i className="fa fa-arrow-right" />
                  </>
                  : <>
                    <i className="fa fa-arrow-right" />
                    <FormattedMessage id="GENERAL.NEXT_WEEK" />
                  </>
                }
              </Button>
              {/*<Button className="btn-sm" onClick={onUpdateAvailabilityParams}>
                <FormattedMessage id="GENERAL.APPLY" />
              </Button>*/}
            </CardHeaderToolbar>
          </CardHeader>
          <CardBody className="p-0">
            { Object.keys(userAvailabilityDialogs).map(key => (
              <ProtectedDialogRoute key={key} path={userAvailabilityDialogs[key].path}>
                {({ history, match }) => renderRoute({ component: userAvailabilityDialogs[key].component, history, match })}
              </ProtectedDialogRoute>
            )) }
            { /*<AvailabilityForm saveRef={saveRef} initialValues={availabilitySettings} changeAvailability={changeAvailability} /> */ }

            <FoldersLoadingDialog />
            <div className="table-responsive">
              <table className="table table-head-custom table-vertical-center table-head-bg ">
                <thead>
                  <tr>
                    <th className="pl-7">
                      <span className="text-left text-dark-75"><FormattedMessage id="FOLDER.INPUT.RESPOSIBLE" /></span>
                    </th>
                    {
                      week.map((day) => (
                        <th key={day.value} scope="col" className="text-center mx-1"> { day.format } </th>
                      ))
                    }
                  </tr>
                </thead>
                <tbody>
                  {
                    availabilities.map((availability, idx) => (
                      <tr key={idx}>
                        <td className="title col-width-10 text-center">
                          { renderUser(availability.user) }
                        </td>
                        <>
                          {
                            week.map((day) => (
                              <td key={day.value + idx} className="col-time text-center">
                                { availability.availabilityPerDay[day.value] && availability.availabilityPerDay[day.value].beforeMidday.map((time) => (
                                  <Badge key={time.startTime + day.value} onClick={() => openAppointmentDialog({
                                    date: day.date,
                                    startHour: time.startTime,
                                    endHour: time.endTime,
                                    participants: [availability.user.id]
                                  })} className="font-weight-bold badge-primary cursor-pointer mx-1 my-1">
                                    {time.startTime} <span className="fas fa-long-arrow-alt-right" /> {time.endTime}
                                  </Badge>
                                )) }
                                { availability.availabilityPerDay[day.value] && availability.availabilityPerDay[day.value].afterMidday.map((time) => (
                                  <Badge key={time.startTime + day.value} onClick={() => openAppointmentDialog({
                                    date: day.date,
                                    startHour: time.startTime,
                                    endHour: time.endTime,
                                    participants: [availability.user.id]
                                  })} className="font-weight-bold badge-info cursor-pointer mx-1 my-1">
                                    {time.startTime} <span className="fas fa-long-arrow-alt-right" /> {time.endTime}
                                  </Badge>
                                )) }
                                { !_.isEmpty(availability.availabilityPerDay[day.value])
                                    &&_.isEmpty(availability.availabilityPerDay[day.value].beforeMidday)
                                    && _.isEmpty(availability.availabilityPerDay[day.value].afterMidday)
                                    && <React.Fragment key={idx + day.value}>
                                      <img  src={toAbsoluteUrl("/media/img/meeting.svg")} className="h-100 align-self-end" alt="" />
                                      <div><FormattedMessage id="GENERAL.DAY_OFF" /></div>
                                    </React.Fragment> }
                                { _.isEmpty(availability.availabilityPerDay[day.value])  &&
                                  <React.Fragment key={idx + day.value}>
                                    <img  src={toAbsoluteUrl("/media/img/day-off.svg")} className="h-100 align-self-end" alt="" />
                                    <div><FormattedMessage id="GENERAL.DAY_OFF" /></div>
                                  </React.Fragment>
                                }
                              </td>
                            ))
                          }
                        </>
                      </tr>
                    )) }
                  { !isFetching && _.isEmpty(availabilities) && <tr><td colSpan="8" className="text-center">
                    <img  src={toAbsoluteUrl("/media/img/not-found.svg")} className="h-100 align-self-end" alt="" />
                    <div><FormattedMessage id="ERROR.NOT_FOUND.DESC" /></div>
                  </td></tr> }
                </tbody>
              </table>
            </div>
            { /*<!--end::Table-->*/}
          </CardBody>
        </Card>
      </Col>
    </Row>
  )

}

export default injectIntl(Appointment)
