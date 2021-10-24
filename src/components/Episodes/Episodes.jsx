import React, { useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../actions'


const Episodes = () => {
    const dispatch = useDispatch()
    const episodes = useSelector(store => store.episodes)

    useEffect(() =>{
        dispatch(getEpisodes())
    },[])

    return (
        <div>
            {episodes.map((ep)=> 
                (
                    <h6>{ep.name}</h6>
                )
            )}
        </div>
    )
}

export default Episodes
