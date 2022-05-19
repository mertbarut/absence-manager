import React from "react";
import IAbsenceData from '../types/absence.type';

export type AbsencesProps = {
  absences: Array<IAbsenceData>,
}

const Absences = ({ absences }: AbsencesProps) => {
  return (
    <div>
      <ul>
        {absences.map((absence) => (
          <li
            key={absence.id}
            className='text-gray-700 font-semibold text-xl mb-2 border p-2'
          >
            {absence.memberNote}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Absences;