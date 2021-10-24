import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from '../HomePage/Homepage.module.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <>
            <div className={styles.container}>
                <NavBar />
                <Link to='/characters' className={styles.button}>I don't know rick</Link>
            </div>

        </>

    )
}

export default Homepage
