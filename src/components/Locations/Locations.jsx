import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPlanet } from '../../actions';
import styles from '../Locations/Locations.module.css';
import NavBar from '../NavBar/NavBar';

const Locations = () => {
    const dispatch = useDispatch()
    const locations = useSelector(store => store.locations)

    useEffect(() => {
        dispatch(getPlanet())
    }, [])

    return (
        <div>
            <NavBar />
            <div className={styles.containerLoc}>
                {locations.map((plnt =>
                (
                    <div className={styles.planetFlex}>
                        <h6 className={styles.namePl}>{plnt.name}</h6>
                        <h6 className={styles.dimensionPL}>{plnt.dimension}</h6>
                    </div>
                )
                ))}
            </div>
        </div>
    )
}

export default Locations
