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

  return (
    <div
      data-testid="stattable"
      className="grid grid-cols-5 shrink-0 place-items-center"
    >
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-right"
      >
        {member.name}
      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        {absence.type}
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        {absence.startDate}
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        {absence.endDate}
      </div>
      <div
        className="w-16 lg:w-32 text-sm font-light text-gray-900 text-left lg:text-center"
      >
        <button
          id={`display-button-${absence.id}`}
          style={ displayedAbsence !== -1 && absence.id === displayedAbsence ? { backgroundColor: 'rgb(251 113 133)', color: 'rgb(255 255 255)' } : { backgroundColor: 'rgb(129 140 248)', color: 'rgb(255 255 255)' } }
          type="button"
          onClick={ displayedAbsence === -1 && absence.id !== displayedAbsence ? (() => setDisplayedAbsence(absence.id)) : (() => setDisplayedAbsence(-1)) }
          className="inline-block p-1 font-medium text-xs lg:text-lg leading-tight uppercase rounded-full shadow-md hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none active:shadow-lg"
        >
          {
            displayedAbsence !== -1 && absence.id === displayedAbsence
              ?
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
          }
        </button>
      </div>
    </div>
  )
}

export default StatTable
