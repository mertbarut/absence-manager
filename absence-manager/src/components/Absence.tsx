import React from 'react'
import StatTable from './StatTable'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'

export type AbsenceProps = {
  absence: IAbsenceData,
  member: IMemberData
}

const Absence = ({ absence, member }: AbsenceProps) => {
  const emptyProfilePicPlaceholder = 'https://scontent-ham3-1.xx.fbcdn.net/v/t1.18169-9/379242_329880507123499_801937608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=awuOImZ3essAX_By2av&_nc_ht=scontent-ham3-1.xx&oh=00_AT9RocycelM4IzLIR6N1drIM0gRktGmbcMsXe7TXlz2msg&oe=62ACFD97'

  return (
    <div
      className="flex justify-center h-8"
    >
      <a
        className="shrink-0 pr-2"
      >
        <img
          className="rounded-full h-8 w-8"
          src={member.image !== null ? member.image : emptyProfilePicPlaceholder}
          alt="img-member"
        />
      </a>
      <StatTable
        absence={absence}
        member={member}
      />
    </div>
  )
}

export default Absence