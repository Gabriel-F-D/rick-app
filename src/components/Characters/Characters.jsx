import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getChar, getPageChar } from "../../actions";
import styles from '../Characters/Characters.module.css';
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
            <div className={styles.containerMainChar}>
                <NavBar />
                <p className={styles.pInfo}>Now streaming in all platforms</p>
            </div>
            <div className={styles.containerFlex}>
                {characters.map((perChar) => (
                    <div className={styles.flipCard}>
                        <div className={styles.flipCardInner}>
                            <div className={styles.flipCardFront}>
                                <img className={styles.charImg} src={perChar.image} style={{ minWidth: "200px" }} />
                            </div>
                            <div className={styles.flipCardBack}>
                                <h4 className={styles.h4}>{perChar.name}</h4>
                                <p className={styles.p} style={{ padding: "-5px" }}>Type : {perChar.species}</p>
                                <p className={styles.p} style={{ padding: "-5px" }}>Currently : {perChar.status}</p>
                                <p className={styles.p} style={{ padding: "-5px" }}>Last known location : {perChar.location.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className={styles.botonesCont}>
                <button className={styles.boton} onClick={prev}>Prev</button>
                <button className={styles.boton} onClick={next}>Next</button>
            </div>
        </div>
    )
}

export default Characters;