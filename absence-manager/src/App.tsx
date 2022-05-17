import React from 'react';
import './App.css';
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators, State } from './state';
import { useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  const { goToNextPage, goToPrevPage, goToFirstPage } = bindActionCreators(actionCreators, dispatch)
  const page = useSelector((state: State) => state.page)

  return (
    <div className="App">
      <h1>{page}</h1>
      <button onClick={() => goToNextPage(1)}>Next</button>
      <button onClick={() => goToPrevPage(1)}>Prev</button>
      <button onClick={() => goToFirstPage()}>First</button>
    </div>
  );
}

export default App;
