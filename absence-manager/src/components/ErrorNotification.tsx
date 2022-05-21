import React from 'react'

const ErrorNotification = () => {
  return (
    <div>
      <div className="flex justify-center bg-red-100 border border-red-400 text-red-700 py-3 rounded relative sm:mx-2 lg:mx-64" role="alert">
        <strong className="font-bold px-2">Error!</strong>
        <pre className="block sm:inline ">Cannot communicate with API. </pre>
      </div>
    </div>
  )
}

export default ErrorNotification