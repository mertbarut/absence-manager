import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from '../state'

type PaginationProps = {
  postsPerPage: number
}

export default function Pagination({
  postsPerPage,
}: PaginationProps) {
  const dispatch = useDispatch()
  const {
    goToNextPage,
    goToPrevPage,
  } = bindActionCreators(actionCreators, dispatch)
  const currentPage = useSelector((state: State) => state.page)
  const totalAbsences = useSelector((state: State) => state.totalAbsences)

  return (
    <div className='py-2'>
      <div>
        <p className='text-sm text-gray-700'>
          Showing
          <span className='font-medium'> {(currentPage - 1) * postsPerPage} </span>
          to
          <span className='font-medium'> {currentPage * postsPerPage} </span>
          of
          <span className='font-medium'> {totalAbsences} </span>
          results
        </p>
      </div>
      <nav className='block'></nav>
      <div>
        <nav
          className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
          aria-label='Pagination'
        >
          <a
            onClick={() => {
              goToPrevPage(1)
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Previous</span>
          </a>

          <a
            onClick={() => {
              (currentPage) * postsPerPage < totalAbsences ? goToNextPage(1) : goToNextPage(0)
            }}
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
          >
            <span>Next</span>
          </a>
        </nav>
      </div>
    </div>
  )
}