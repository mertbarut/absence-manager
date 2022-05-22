import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import Absence from './Absence'
import EmptyListNotification from './EmptyListNotification'
import ExtraAbsence from './ExtraAbsence'

export type AbsencesProps = {
  absences: Array<IAbsenceData>,
  members: Array<IMemberData>,
  queryType: string,
  queryStartDate: Date,
  queryEndDate: Date
}

const Absences = ({
  absences,
  members,
  queryType,
  queryStartDate,
  queryEndDate
}: AbsencesProps) => {
  const currentPage = useSelector((state: State) => state.page)
  const totalAbsences = useSelector((state: State) => state.totalAbsences)
  const displayedAbsence = useSelector((state: State) => state.displayedAbsence)
  const dispatch = useDispatch()
  const {
    setTotalAbsences
  } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    setTotalAbsences(absences
      .filter((absence) => (
        absence.type.toLowerCase().includes(queryType.toLowerCase()) &&
        new Date(absence.startDate) >= queryStartDate &&
        new Date(absence.endDate) <= queryEndDate
      ))
      .length)
  }, [queryType, queryStartDate, queryEndDate])

  return (

    <div
      className='flex justify-center min-h-[600px] min-w-[1500px]'
    >
      {
        totalAbsences === 0
          ?
          <EmptyListNotification />
          :
          <ul>
            {absences
              .sort((absence1, absence2) => (
                new Date(absence1.startDate).getTime() - new Date(absence2.startDate).getTime()
              ))
              .filter((absence) => (
                absence.type.toLowerCase().includes(queryType.toLowerCase()) &&
                new Date(absence.startDate) >= queryStartDate &&
                new Date(absence.endDate) <= queryEndDate
              ))
              .slice((currentPage - 1) * 10, currentPage * 10)
              .map((absence) => (
                <li
                  key={absence.id}
                  className='text-gray-700 font-semibold text-xl mb-2 border rounded-lg p-2'
                >
                  <Absence
                    absence={absence}
                    member={members.filter((member) => member.userId === absence.userId)[0]}
                  />
                  {
                    displayedAbsence !== -1 && absence.id === displayedAbsence &&
                    <div
                      className='flex justify-center py-2'
                    >
                      {
                        <ExtraAbsence
                          absence={absence}
                          member={members.filter((member) => member.userId === absence.userId)[0]}
                        />
                      }
                    </div>
                  }
                </li>
              ))}
          </ul>
      }
    </div>
  )
}

export default Absences