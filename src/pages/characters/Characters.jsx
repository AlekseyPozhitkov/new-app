import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import MySelect from '../../components/Select/MySelect'
import MyInput from '../../components/Input/MyInput'
import styles from "./styles.module.css"
import logo from "./RICK&MORTY.svg"

const Characters = () => {
    return (
        <div>
            <Navbar />
            <img className={styles.title} src={logo} alt="RICK&MORTY" />
            <div className={styles.sort}>
                <MyInput />
                <MySelect />
                <MySelect />
                <MySelect />
            </div>
        </div>
    )
}

export default Characters