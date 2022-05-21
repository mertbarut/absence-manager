import StatTableHeader from './StatTableHeader'

const AbsencesHeader = () => {

  return (
    <div
      className="flex justify-center shrink-0 text-gray-700 font-semibold text-xl mb-2 border-t-2 py-2 h-10 min-w-[1500px]"
    >
      <div
        className="flex justify-center shrink-0 h-8 w-2"
      />
      <StatTableHeader />
    </div>
  )
}

export default AbsencesHeader