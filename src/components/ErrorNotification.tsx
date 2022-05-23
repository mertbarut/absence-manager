import React from 'react'

const ErrorNotification = () => {
  return (
    <div
      className="grid grid-rows-2 h-32 justify-center bg-sky-100 border border-blue-400 text-blue-700 py-3 rounded relative m-6"
      role="alert"
    >
      <strong className="font-bold px-2">Error!</strong>
      <pre> Cannot communicate with API. </pre>
      <pre> Please try again in a minute. </pre>
    </div>
  )
}

export default ErrorNotification
