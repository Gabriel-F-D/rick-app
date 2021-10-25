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
                        <p className={styles.namePl}>{plnt.name}</p>
                        <p className={styles.dimensionPL}>{plnt.dimension}</p>
                    </div>
                )
                ))}
            </div>
        </div>
    )
}

export default Locations
