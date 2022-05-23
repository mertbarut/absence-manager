import React from 'react'

export default function NavBar() {
  return (
    <div>
      <nav
        className="flex items-center justify-between flex-wrap bg-gradient-to-r from-blue-500 to-cyan-500 px-6 py-2"
      >
        <div
          className="flex items-center flex-shrink-0 text-white"
        >
          <img
            width="54"
            height="54"
            src='https://scontent-ham3-1.xx.fbcdn.net/v/t1.18169-9/379242_329880507123499_801937608_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=awuOImZ3essAX_By2av&_nc_ht=scontent-ham3-1.xx&oh=00_AT9RocycelM4IzLIR6N1drIM0gRktGmbcMsXe7TXlz2msg&oe=62ACFD97'
            className='rounded-full'
          />
          <span
            className="font-semibold text-xl text-slate-100 tracking-tight pl-6"
          >
            Absence Manager
          </span>
        </div>
      </nav>
    </div>
  )
}