import './App.css'
import './index.css'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators, State } from './state'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import AbsenceList from './components/AbsencesList'
import Pagination from './components/Pagination'

function App() {
  const dispatch = useDispatch()
  const {
    goToNextPage,
    goToPrevPage,
  } = bindActionCreators(actionCreators, dispatch)
  const currentPage = useSelector((state: State) => state.page)
  const totalAbsences = useSelector((state: State) => state.totalAbsences)

  return (
    <div className="App">
      <NavBar />
      <AbsenceList />
      {
        totalAbsences !== 0 &&
        <Pagination
          postsPerPage={10}
          paginateBack={goToPrevPage}
          paginateFront={goToNextPage}
          currentPage={currentPage}
          totalPosts={totalAbsences}
        />
      }
    </div>
  )
}

export default App
