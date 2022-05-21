import IAbsenceData from '../types/absence.type'

export type AbsenceProps = {
  absence: IAbsenceData,
}

const NoteTable = ({ absence }: AbsenceProps ) => {
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
              className="w-96 text-sm font-medium text-gray-900 text-center"
            >
              Admitter Note
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="w-96 text-sm font-light text-gray-900 text-center border-r-2 border-gray-300"
            >
              {absence.memberNote ? <q>{absence.memberNote}</q> : <em>N/A</em>}
            </td>
            <td
              className="w-96 text-sm font-light text-gray-900 text-center"
            >
              {absence.admitterNote ? <q>{absence.admitterNote}</q> : <em>N/A</em>}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default NoteTable

//<td
//className="w-64 text-sm font-light text-gray-900 text-left px-4"
//>
//{absence.admitterNote ? <q>{absence.admitterNote}</q> : <em>None</em>}
//</td>