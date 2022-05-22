import React, { Component } from 'react'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'

type Props = {
  absence: IAbsenceData,
  member: IMemberData
}

type CalendarEvent = {
  title: string,
  startDate: string,
  endDate: string,
}

type State = {
  event: CalendarEvent
}

class Event extends Component<Props, State>{
  constructor(props: Props) {
    super(props)
    this.state = {
      event: {
        title: this.props.member.name + '\'s ' + this.props.absence.type,
        startDate: this.props.absence.startDate,
        endDate: this.props.absence.endDate,
      },
    }
    this.saveCalInvite = this.saveCalInvite.bind(this)
  }

  render() {
    return (
      <a onClick={this.saveCalInvite}>Add to Calendar</a>
    )
  }

  saveCalInvite() {
    // Create the .ics URL
    const url = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'BEGIN:VEVENT',
      'DTSTART:' + this.formatDate(this.state.event.startDate),
      'DTEND:' + this.formatDate(this.state.event.endDate),
      'SUMMARY:' + this.state.event.title,
      'DESCRIPTION',
      'LOCATION',
      'BEGIN:VALARM',
      'TRIGGER:-PT15M',
      'REPEAT:1',
      'DURATION:PT15M',
      'ACTION:DISPLAY',
      'DESCRIPTION:Reminder',
      'END:VALARM',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n')

    window.open(encodeURI('data:text/calendar;charset=utf8,' + url))

  }

  formatDate(date: string) {
    const time = new Date(date)
    return [
      time.getUTCFullYear(),
      this.pad(time.getUTCMonth() + 1),
      this.pad(time.getUTCDate()),
      'T',
      this.pad(time.getUTCHours()),
      this.pad(time.getUTCMinutes()) + '00Z'
    ].join('')
  }

  pad(num: number) {
    // Ensure date values are double digits
    return num < 10 ? '0' + num : num
  }

}

export default Event
