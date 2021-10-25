import './App.css';
import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import Characters from './components/Characters/Characters';
// import { getChar, getEpisodes, getPlanet } from './actions';
import { Switch, Route } from 'react-router-dom';
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
        <>
            <Switch>
                <Route exact path='/episodes' component={Episodes}/>
                <Route exact path='/characters' component={Characters}/>
                <Route exact path='/locations' component={Locations}/>
                <Route path="/" component={Homepage}/>
            </Switch>
        </>
    );
}

export default App;