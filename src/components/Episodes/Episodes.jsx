import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getEpisodes } from '../../actions'
import styles from '../Episodes/Episodes.module.css'
import NavBar from '../NavBar/NavBar'

const Episodes = () => {
    const dispatch = useDispatch()
    const episodes = useSelector(store => store.episodes)

    useEffect(() => {
        dispatch(getEpisodes())
    }, [])

    return (
        <div>
            <NavBar />
            <div className={styles.containerChapters}>
                {episodes.map((ep) =>
                (
                    <div className={styles.chapterFlex}>
                        <h6>{ep.name}</h6>
                    </div>
                )
                )}
            </div>
        </div>
    )
}

export default Episodes
