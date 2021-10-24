import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChar, getPageChar } from "../../actions";
import styles from '../Characters/Characters.module.css'
import NavBar from "../NavBar/NavBar";

const Characters = () => {

    const [page, setPage] = useState(1);
    const dispatch = useDispatch()
    let characters = useSelector(store => store.characters)

    useEffect(() => {
        dispatch(getChar())
    }, [])

    let next = () => {
        setPage(page + 1);
        dispatch(getPageChar(page))
    }

    let prev = () => {
        if (page <= 0) {
            setPage(1)
        } else {
            setPage(page - 1)
            dispatch(getPageChar(page))
        }
    }
    console.log(characters)
    console.log(page)
    return (
        <div>
            <NavBar />
            <div className={styles.containerFlex}>
                {characters.map((perChar) => (
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img className={styles.charImg} src={perChar.image} style={{ minWidth: "200px" }} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <h4>{perChar.name}</h4>
                                <p style={{ padding: "-5px" }}>Type : {perChar.species}</p>
                                <p style={{ padding: "-5px" }}>Currently : {perChar.status}</p>
                                <p style={{ padding: "-5px" }}>Last known location : {perChar.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <button onClick={next}>Next</button>
            <button onClick={prev}>prev</button>
        </div>
    )
}

export default Characters;