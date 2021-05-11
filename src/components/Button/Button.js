import React from 'react'
import styles from './Button.module.css';

const Button = ({type = 'secondary'}) => {
    return (
        <button className={styles[type]}>
            Dit is een knop!
        </button>
    )
}

export default Button
