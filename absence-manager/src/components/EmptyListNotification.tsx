import React from 'react'

const EmptyListNotification = () => {
  return (
    <div>
      <div className="flex justify-center bg-sky-100 border border-blue-400 text-blue-700 py-3 rounded relative sm:mx-2 lg:mx-64 m-6" role="alert">
        <strong className="font-bold px-2">Wah Wah Wah...</strong>
        <pre className="block sm:inline ">Absences list is empty, perhaps the filter parameters are too strict. </pre>
      </div>
    </div>
  )
}

export default EmptyListNotification