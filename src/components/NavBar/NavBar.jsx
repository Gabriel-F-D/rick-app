import React from 'react'
import styles from '../NavBar/NavBar.module.css'


const NavBar = () => {
    return (
        <div className={styles.navBar}>
            <a href='#'>Home</a>
            <a href='#'>Latest</a>
            <a href='#'>About Me</a>
        </div>
    )
}

export default NavBar