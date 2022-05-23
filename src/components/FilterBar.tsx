import React, { ChangeEventHandler } from 'react'

interface FilterBarPropTypes {
  query: string,
  onChangeQuery: ChangeEventHandler<HTMLInputElement>
}

function FilterBar({ query, onChangeQuery }: FilterBarPropTypes) {
  return (
    <div>
      <div
        className="input-group relative flex justify-center"
      >
        <input
          type="search"
          placeholder=""
          value={query}
          onChange={onChangeQuery}
          className='w-16 lg:w-32 text-xs lg:text-lg font-light pl-2 border-2 border-gray-300 rounded-md'
        />
      </div>
    </div>
  )
}

export default FilterBar