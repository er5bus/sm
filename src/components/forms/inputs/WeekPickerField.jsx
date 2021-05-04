import React, { useEffect, useState } from 'react'
import moment from 'moment'
import DayPicker from 'react-day-picker'

import { getLang } from './../../../../../i18n'
import { FR, AR } from './../../../../../constants'

import MomentLocaleUtils from 'react-day-picker/moment'

import 'react-day-picker/lib/style.css'

import 'moment/locale/ar-tn'
import 'moment/locale/fr'
import { FieldError } from './FieldError'

const locale = {
  [FR]: 'fr',
  [AR]: 'ar-tn'
}

const getWeekDays = (weekStart) => {
  const days = [weekStart]
  for (let i = 1; i < 7; i += 1) {
    days.push(
      moment(weekStart)
        .add(i, 'days')
        .toDate()
    )
  }
  return days
}

const getWeekRange = (date) => ({
  from: moment(date)
    .startOf('week')
    .toDate(),
  to: moment(date)
    .endOf('week')
    .toDate()
})

const WeekPickerField = ({ field, form, label, format = 'DD/MM/YYYY', required }) => {
  const [state, setState] = useState({
    hoverRange: undefined,
    selectedDays: []
  })

  const handleDayChange = date => {
    setState({
      ...state,
      selectedDays: getWeekDays(getWeekRange(date).from)
    })
  }

  const handleDayEnter = date => {
    setState({
      ...state,
      hoverRange: getWeekRange(date)
    })
  }

  const handleDayLeave = () => {
    setState({
      ...state,
      hoverRange: undefined
    })
  }

  const handleWeekClick = (weekNumber, days, e) => {
    setState({
      ...state,
      selectedDays: days
    })
  }

  useEffect(() => {
    if (state.selectedDays.length === 7) {
      form.setFieldValue(field.name, {
        from: moment(state.selectedDays[0]).format(format),
        to: moment(state.selectedDays[6]).format(format)
      })
    }

    // eslint-disable-next-line
  }, [state.selectedDays])

  const modifiers = {
    hoverRange: state.hoverRange,
    selectedRange: state.selectedDays.length > 0 && {
      from: state.selectedDays[0],
      to: state.selectedDays[6]
    },
    hoverRangeStart: state.hoverRange && state.hoverRange.from,
    hoverRangeEnd: state.hoverRange && state.hoverRange.to,
    selectedRangeStart: state.daysAreSelected && state.selectedDays[0],
    selectedRangeEnd: state.daysAreSelected && state.selectedDays[6]
  }

  return (
    <div className='SelectedWeekExample'>
      {label && <label> {label} {(required && ' *')}</label>}
      <DayPicker
        selectedDays={state.selectedDays}
        showWeekNumbers
        showOutsideDays
        modifiers={modifiers}
        onDayClick={handleDayChange}
        onDayMouseEnter={handleDayEnter}
        onDayMouseLeave={handleDayLeave}
        onWeekClick={handleWeekClick}
        locale={locale[getLang()]}
        localeUtils={MomentLocaleUtils}
      />
      {state.selectedDays.length === 7 && (
        <div className='text-center text-capitalize'>
          {moment(state.selectedDays[0]).locale(locale[getLang()]).format('LL')} –{' '}
          {moment(state.selectedDays[6]).locale(locale[getLang()]).format('LL')}
        </div>
      )}
      <FieldError fieldName={field.name} />
    </div>
  )
}

export default WeekPickerField
