import './App.css';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Characters from './components/Characters/Characters';
// import { getChar, getEpisodes, getPlanet } from './actions';
import { Route } from 'react-router';
import Episodes from './components/Episodes/Episodes';
import Locations from './components/Locations/Locations';
import Homepage from './components/HomePage/Homepage';


function App() {

    // const dispatch = useDispatch()
    // const characters = useSelector(store => store.characters)
    // const locations = useSelector(store => store.locations)

    // useEffect(() => {
    //   dispatch(getChar())
    //   dispatch(getPlanet())
    // }, [])

    return (

        <div className="App">

            <Route path='/episodes' >
                <Episodes />
            </Route>
            <Route path='/characters' >
                <Characters />
            </Route>
            <Route path='/locations' >
                <Locations />
            </Route>
            <Route path="/">
                <Homepage />
            </Route>

        </div>
    );
}

export default App;