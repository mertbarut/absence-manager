import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import React from 'react'
import Event from './Event'

export type AbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const NoteTable = ({ absence, member }: AbsenceProps ) => {
  const startDate = new Date(absence.startDate + 'T00:00:00')
  const endDate = new Date(absence.endDate + 'T00:00:00')
  const dayDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div
      data-testid="notetable"
      className="grid grid-cols-2 grid-rows-5 place-items-center gap-2"
    >
      <div
        className="text-sm font-medium text-gray-900 text-center"
      >
        Status
      </div>
      <div
        className="w-24 text-sm font-light text-gray-900 text-center items-center"
      >
        <pre
          style={ absence.rejectedAt ? { color: 'white', backgroundColor: '#dc2626' } : ( absence.confirmedAt ? { color: 'white', backgroundColor: '#16a34a' } : { color: 'white', backgroundColor: '#2563eb' }) }
          className="text-sm p-1 text-center font-bold rounded-full"
        >
          {absence.rejectedAt ? ' Rejected ' : ( absence.confirmedAt ? 'Confirmed' : 'Requested')}
        </pre>
      </div>
      <div
        className="text-sm font-medium text-gray-900 text-center"
      >
        Period
      </div>
      <div
        className="w-24 text-sm font-light text-gray-900 text-center"
      >
        {dayDifference < 1 ? 'Less than a day' : (dayDifference === 1 ? '1 day' : `${dayDifference} days`)}
      </div>
      <div
        className="text-sm font-medium text-gray-900 text-center"
      >
        Member Note
      </div>
      <div
        className="text-sm font-light text-gray-900 text-center"
      >
        {absence.memberNote ? <q>{absence.memberNote}</q> : <em>N/A</em>}
      </div>
      <div
        className="text-sm font-medium text-gray-900 text-center"
      >
        Admitter Note
      </div>
      <div
        className="text-sm font-light text-gray-900 text-center"
      >
        {absence.admitterNote ? <q>{absence.admitterNote}</q> : <em>N/A</em>}
      </div>
      <div
        className="col-span-2 text-sm underline font-bold text-blue-600 text-center"
      >
        <Event
          absence={absence}
          member={member}
        />
      </div>
    </div>
  )
}

export default NoteTable