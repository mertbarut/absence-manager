import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import React from 'react'
import Event from './Event'

export type AbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const NoteTable = ({ absence, member }: AbsenceProps ) => {
  return (
    <div
      data-testid="notetable"
      className="shrink-0 py-2"
    >
      <table>
        <thead>
          <tr>
            <th
              scope="col"
              className="w-96 text-sm font-medium text-gray-900 text-center border-r-2 border-gray-300"
            >
              Member Note
            </th>

            <th
              scope="col"
              className="w-96 text-sm font-medium text-gray-900 text-center border-r-2 border-gray-300"
            >
              Admitter Note
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="w-64 text-sm font-light text-gray-900 text-center border-r-2 border-gray-300"
            >
              {absence.memberNote ? <q>{absence.memberNote}</q> : <em>N/A</em>}
            </td>
            <td
              className="w-64 text-sm font-light text-gray-900 text-center border-r-2 border-gray-300"
            >
              {absence.admitterNote ? <q>{absence.admitterNote}</q> : <em>N/A</em>}
            </td>
            <td
              className="w-16 px-2 text-sm underline font-bold text-blue-600 text-center"
            >
              <Event
                absence={absence}
                member={member}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NoteTable