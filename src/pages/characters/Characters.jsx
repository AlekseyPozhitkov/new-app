import React from 'react'
import MySelect from '../../components/Select/MySelect'
import MyInput from '../../components/Input/MyInput'
import styles from "./styles.module.css"

const Characters = () => {
    return (
        <div>
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