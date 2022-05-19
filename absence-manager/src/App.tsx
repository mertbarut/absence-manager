import React from 'react';
import './App.css';
import './index.css'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { useSelector } from 'react-redux';
import NavBar from './components/NavBar';
import AbsenceList from './components/AbsencesList.component'
import Pagination from './components/Pagination';

function App() {

  const dispatch = useDispatch();

  const { goToNextPage, goToPrevPage, goToFirstPage } = bindActionCreators(actionCreators, dispatch)
  const currentPage = useSelector((state: State) => state.page)

  return (
    <div className="App">
      <NavBar />
      <AbsenceList />
      <Pagination postsPerPage={10} paginateBack={goToPrevPage} paginateFront={goToNextPage} currentPage={currentPage} totalPosts={42} />
    </div>
  );
}

export default App;
