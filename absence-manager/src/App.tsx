import './App.css'
import './index.css'
import { useSelector } from 'react-redux'
import NavBar from './components/NavBar'
import AbsenceList from './components/AbsencesList'
import Pagination from './components/Pagination'
import { State } from './state'

function App() {
  const totalAbsences = useSelector((state: State) => state.totalAbsences)

  return (
    <div className="App">
      <NavBar />
      <AbsenceList />
      {
        totalAbsences !== 0 &&
        <Pagination
          postsPerPage={10}
        />
      }
    </div>
  )
}

export default App
