import { bindActionCreators } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators, State } from '../state'
import IAbsenceData from '../types/absence.type'
import IMemberData from '../types/member.type'
import Absence from './Absence'
import ExtraAbsence from './ExtraAbsence'

export type AbsencesProps = {
  absences: Array<IAbsenceData>,
  members: Array<IMemberData>,
  query: string
}

const Absences = ({ absences, members, query }: AbsencesProps) => {
  const currentPage = useSelector((state: State) => state.page)
  const displayedAbsence = useSelector((state: State) => state.displayedAbsence)
  const dispatch = useDispatch()
  const {
    setTotalAbsences
  } = bindActionCreators(actionCreators, dispatch)

  useEffect(() => {
    return () => {
      setTotalAbsences(absences
        .filter((absence) => (
          absence.type.toLowerCase().includes(query.toLowerCase())
        ))
        .length)
    }
  }, [query])

  return (
    <div
      className='flex justify-center min-h-[600px] min-w-[1500px]'
    >
      <ul>
        {absences
          .filter((absence) => (
            absence.type.toLowerCase().includes(query.toLowerCase())
          )
          )
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
                    />
                  }
                </div>
              }
            </li>
          ))}
      </ul>
    </div>
  )
}

export default Absences