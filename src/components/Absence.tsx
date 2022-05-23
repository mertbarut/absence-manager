import React from 'react'
import StatTable from './StatTable'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'

export type AbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const Absence = ({ absence, member }: AbsenceProps) => {

  return (
    <div
      className="flex justify-center h-8"
    >
      <StatTable
        absence={absence}
        member={member}
      />
    </div>
  )
}

export default Absence