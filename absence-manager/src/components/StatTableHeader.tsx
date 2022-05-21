import React from 'react'

const StatTableHeader = () => {

  return (
    <div
      data-testid="stattable-header"
      className="shrink-0 border-l-2"
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
      </table>
    </div>
  )
}

export default StatTableHeader