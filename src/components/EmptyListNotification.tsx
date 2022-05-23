import React from 'react'

const EmptyListNotification = () => {
  return (
    <div
      className="grid grid-rows-2 justify-center h-32 bg-sky-100 border border-blue-400 text-blue-700 py-3 rounded relative m-6"
      role="alert"
    >
      <strong className="font-bold">Wah Wah Wah...</strong>
      <pre> Absences list is empty! </pre>
      <pre> Try alternative filter parameters. </pre>
    </div>
  )
}

export default EmptyListNotification