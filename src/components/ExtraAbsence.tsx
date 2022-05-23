import React from 'react'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import NoteTable from './NoteTable'

export type ExtraAbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const ExtraAbsence = ({ absence, member }: ExtraAbsenceProps ) => {
  return (
    <div
      className="w-[320px] rounded overflow-hidden shadow-lg"
    >
      <div
        className="px-6 py-4 bg-sky-100"
      >
        <NoteTable
          absence={absence}
          member={member}
        />
      </div>
    </div>
  )
}

export default ExtraAbsence