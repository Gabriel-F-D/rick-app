import './App.css';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Characters from './components/Characters';
import { getChar, getEpisodes, getPlanet } from './actions';
import { Route } from 'react-router';
import Episodes from './components/Episodes';


function App() {

  const dispatch = useDispatch()
  const characters = useSelector(store => store.characters)

  useEffect(() => {
    dispatch(getChar())
    dispatch(getPlanet())
  }, [])

  return (
    <div className="App">
      <Route path='/episodes'>
        <Episodes />
      </Route>
      <Route path='/characters'>
        <Characters characters={characters} />
      </Route>
    </div>
  );
}

export default App;
