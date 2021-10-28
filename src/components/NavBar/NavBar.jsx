import React from 'react'
import styles from '../NavBar/NavBar.module.css'
import { Link } from 'react-router-dom'


const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <Link to='/'>
                <a href='#'>Home</a>
            </Link>
            <Link to='/episodes'>
                <a href='#'>Episodes</a>
            </Link>
            <Link to='/locations'>
                <a href='#'>Planets</a>
            </Link>

            <h3>[Adult Swim]</h3>
        </div>
    )
}

export default NavBar