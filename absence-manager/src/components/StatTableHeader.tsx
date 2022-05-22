import React, { ChangeEventHandler } from 'react'
import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import FilterBar from './FilterBar'

export type StatTableHeaderProps = {
  queryStartDate: Date,
  queryEndDate: Date,
  queryType: string,
  onChangeQueryType: ChangeEventHandler<HTMLInputElement>
  onChangeQueryStartDate: (date: Date) => void
  onChangeQueryEndDate: (date: Date) => void
}

const StatTableHeader = ({
  queryType,
  queryStartDate,
  queryEndDate,
  onChangeQueryType,
  onChangeQueryStartDate,
  onChangeQueryEndDate
} : StatTableHeaderProps) => {

  return (
    <div
      data-testid="stattable-header"
      className="border-l-2"
    >
      <table
        className="min-w-full"
      >
        <thead>
          <tr>
            <th
              scope="col"
              className="w-24 text-sm font-medium text-gray-900 text-center"
            >
              Name
            </th>
            <th
              scope="col"
              className="w-24 text-sm font-medium text-gray-900 text-center"
            >
              Type
            </th>
            <th
              scope="col"
              className="w-24 text-sm font-medium text-gray-900 text-center"
            >
              Start
            </th>
            <th
              scope="col"
              className="w-24 text-sm font-medium text-gray-900 text-center"
            >
              End
            </th>
            <th
              scope="col"
              className="w-24 text-sm font-medium text-gray-900 text-center"
            >
              Period
            </th>
            <th
              scope="col"
              className="w-6 text-sm font-medium text-gray-900 text-center"
            >

            </th>
            <th
              scope="col"
              className="w-24 text-sm font-medium text-gray-900 text-center px-4"
            >
              Status
            </th>
            <th
              scope="col"
              className="w-6 text-sm font-medium text-gray-900 text-center border-r-2"
            >

            </th>
            <th
              scope="col"
              className="w-32 text-sm font-medium text-gray-900 text-left px-4"
            >
              Options
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td
              className="shrink w-24 text-sm font-light text-gray-900 text-center"
            >

            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              <FilterBar query={queryType} onChangeQuery={onChangeQueryType} />
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              <DatePicker
                dateFormat='yyyy-MM-dd'
                selected={queryStartDate}
                onChange={ (date: Date) => onChangeQueryStartDate(date) }
                className='w-20 text-center font-light border-2 border-gray-300 rounded-md'
              />
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >
              <DatePicker
                dateFormat='yyyy-MM-dd'
                selected={queryEndDate}
                onChange={ (date: Date) => onChangeQueryEndDate(date) }
                className='w-20 text-center font-light border-2 border-gray-300 rounded-md'
              />
            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >

            </td>
            <td
              className="w-6 whitespace-nowrap text-sm font-light text-gray-900 text-center"
            >

            </td>
            <td
              className="w-24 text-sm font-light text-gray-900 text-center"
            >

            </td>
            <td
              className="w-6 whitespace-nowrap text-sm font-light text-gray-900 text-center border-r-2"
            >

            </td>
            <td
              className="w-32 text-sm font-light text-gray-900 text-left px-4"
            >

            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default StatTableHeader