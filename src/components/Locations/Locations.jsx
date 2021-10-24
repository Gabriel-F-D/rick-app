import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPlanet } from '../../actions'

const Locations = () => {
    const dispatch = useDispatch()
    const locations = useSelector(store => store.locations)

    useEffect(() => {
        dispatch(getPlanet())
    }, [])

    return (
        <div>
            {locations.map((plnt =>
            (
                <div>
                    <h6>Name: {plnt.name}</h6>
                    <h6>Dimension: {plnt.dimension}</h6>
                    <img src={plnt.url} style={{minWidth: "200px"}}/>
                </div>
            )
            ))}
        </div>
    )
}

export default Locations
