import { ChangeEventHandler } from 'react'
import StatTableHeader from './StatTableHeader'

export type AbsencesHeaderProps = {
  queryStartDate: Date,
  queryEndDate: Date,
  queryType: string,
  onChangeQueryType: ChangeEventHandler<HTMLInputElement>
  onChangeQueryStartDate: (date: Date) => void
  onChangeQueryEndDate: (date: Date) => void
}

const AbsencesHeader = ( {
  queryType,
  queryStartDate,
  queryEndDate,
  onChangeQueryType,
  onChangeQueryStartDate,
  onChangeQueryEndDate
} : AbsencesHeaderProps ) => {

  return (
    <div
      className="flex justify-center text-gray-700 font-semibold text-xl mb-2 border-t-2 py-2 h-16 min-w-[1500px]"
    >
      <div
        className="flex justify-center w-2"
      />
      <StatTableHeader
        queryType={queryType}
        queryStartDate={queryStartDate}
        queryEndDate={queryEndDate}
        onChangeQueryType={onChangeQueryType}
        onChangeQueryStartDate={onChangeQueryStartDate}
        onChangeQueryEndDate={onChangeQueryEndDate}
      />
    </div>
  )
}

export default AbsencesHeader