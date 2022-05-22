import React, { ChangeEventHandler } from 'react'

interface FilterBarPropTypes {
  query: string,
  onChangeQuery: ChangeEventHandler<HTMLInputElement>
}

function FilterBar({ query, onChangeQuery }: FilterBarPropTypes) {
  return (
    <div>
      <div
        className="input-group relative flex justify-center my-1"
      >
        <input
          type="search"
          placeholder="filter"
          value={query}
          onChange={onChangeQuery}
          className='w-16 text-sm font-light pl-2 border-2 border-gray-300 rounded-md'
        />
      </div>
    </div>
  )
}

export default FilterBar