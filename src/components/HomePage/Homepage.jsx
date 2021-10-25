import React from 'react'
import NavBar from '../NavBar/NavBar'
import styles from '../HomePage/Homepage.module.css'
import { Link } from 'react-router-dom'

const Homepage = () => {
    return (
        <div className={styles.container}>
            <div>
                <NavBar />
                <h3 className={styles.appTitle}>Rick and Morty</h3>
                <Link to='/characters'>
                    <button className={styles.buttonHp}>
                        Get schwifty
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Homepage
