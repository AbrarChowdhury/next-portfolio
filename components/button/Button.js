import React from "react"
import styles from "./Button.module.css"

const Button = ({ text,handleClick }) => {
  return (
    <button class={styles.button} role='button' onClick={handleClick}>
      {text}
    </button>
  )
}

export default Button
