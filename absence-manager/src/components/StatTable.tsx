import React from 'react'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import { useSelector, useDispatch } from 'react-redux'
import { actionCreators, State } from './../state'
import { bindActionCreators } from '@reduxjs/toolkit'

export type AbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const StatTable = ({ absence, member }: AbsenceProps ) => {
  const dispatch = useDispatch()
  const displayedAbsence = useSelector((state: State) => state.displayedAbsence)

  const { setDisplayedAbsence } = bindActionCreators(actionCreators, dispatch)

  const startDate = new Date(absence.startDate + 'T00:00:00')
  const endDate = new Date(absence.endDate + 'T00:00:00')
  const dayDifference = Math.ceil((endDate.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24))

  return (
    <div
      data-testid="stattable"
      className="shrink-0 border-l-2"
    >
      <table
        className="min-w-full"
      >
        <tbody>
          <tr>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              {member.name}
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              {absence.type}
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              {absence.startDate}
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              {absence.endDate}
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              {dayDifference < 1 ? 'Less than a day' : (dayDifference === 1 ? '1 day' : `${dayDifference} days`)}
            </td>
            <td
              className="w-6 whitespace-nowrap text-sm font-light text-gray-900 text-center"
            >

            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              <pre
                style={ absence.rejectedAt ? { color: 'white', backgroundColor: '#dc2626' } : ( absence.confirmedAt ? { color: 'white', backgroundColor: '#16a34a' } : { color: 'white', backgroundColor: '#2563eb' }) }
                className="text-sm px-1 py-1 text-center font-bold rounded-full"
              >
                {absence.rejectedAt ? ' Rejected ' : ( absence.confirmedAt ? 'Confirmed' : 'Requested')}
              </pre>
            </td>
            <td
              className="w-6 whitespace-nowrap text-sm font-light text-gray-900 text-center border-r-2"
            >

            </td>
            <td
              className="w-32 text-sm font-light text-gray-900 text-left px-4"
            >
              <button
                id={`display-button-${absence.id}`}
                style={ displayedAbsence !== -1 && absence.id === displayedAbsence ? { backgroundColor: 'rgb(251 113 133)', color: 'rgb(255 255 255)' } : { backgroundColor: 'rgb(129 140 248)', color: 'rgb(255 255 255)' } }
                type="button"
                onClick={ displayedAbsence === -1 && absence.id !== displayedAbsence ? (() => setDisplayedAbsence(absence.id)) : (() => setDisplayedAbsence(-1)) }
                className="inline-block px-6 py-2 w-32 font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none active:shadow-lg"
              >
                { displayedAbsence !== -1 && absence.id === displayedAbsence ? 'Hide Notes' : 'Show Notes' }
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StatTable
