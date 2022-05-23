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
      className="grid grid-cols-5 grid-rows-2 shrink-0 place-items-center"
    >
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-right"
      >
        Name
      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-center"
      >
        Type
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-center"
      >
        Start
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-center"
      >
        End
      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-center"
      >

      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-center"
      >

      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-medium text-gray-900 text-center"
      >
        <FilterBar query={queryType} onChangeQuery={onChangeQueryType} />
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        <DatePicker
          dateFormat='yyyy-MM-dd'
          selected={queryStartDate}
          onChange={ (date: Date) => onChangeQueryStartDate(date) }
          className='w-20 lg:w-32 text-center font-light border-2 border-gray-300 rounded-md'
        />
      </div>
      <div
        className="w-20 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >
        <DatePicker
          dateFormat='yyyy-MM-dd'
          selected={queryEndDate}
          onChange={ (date: Date) => onChangeQueryEndDate(date) }
          className='w-20 lg:w-32 text-center font-light border-2 border-gray-300 rounded-md'
        />
      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >

      </div>
      <div
        className="w-16 lg:w-32 whitespace-nowrap text-sm font-light text-gray-900 text-center"
      >

      </div>
      <div
        className="w-16 lg:w-32 text-xs lg:text-lg font-light text-gray-900 text-center"
      >

      </div>
    </div>
  )
}

export default StatTableHeader