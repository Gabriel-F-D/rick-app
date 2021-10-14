import axios from "axios"

export const getChar = () => async(dispatch) => {
    const char = await axios.get('https://rickandmortyapi.com/api/character')
    dispatch({type:'Get characters', payload: char.data.results})
}

export const getEpisodes = () => async(dispatch) => {
    const episode = await axios.get('https://rickandmortyapi.com/api/episode')
    console.log(episode.data)
    dispatch({type:'Get episodes', payload: episode.data.results})
}

export const getPlanet = () => async(dispatch) => {
    const planets = await axios.get('https://rickandmortyapi.com/api/location')
    console.log(planets.data)
    dispatch({type:'Get location', payload: planets.data.results})
}