import React from 'react'
import IAbsenceData from '../types/absence.type'
import NoteTable from './NoteTable'

export type ExtraAbsenceProps = {
  absence: IAbsenceData,
}

const ExtraAbsence = ({ absence }: ExtraAbsenceProps ) => {
  return (
    <div
      className="max-w-sm lg:max-w-3xl rounded overflow-hidden shadow-lg"
    >
      <div
        className="px-6 py-4 bg-amber-100"
      >
        <NoteTable absence={absence} />
      </div>
    </div>
  )
}

export default ExtraAbsence