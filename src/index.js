import React from 'react'
import styles from './styles.module.css'
import Button from './components/Button'
import './components/Button/button.css'

export const ExampleComponent = ({ text }) => {
  return <div className={styles.test}>Example Component: {text}</div>
}

export { Button }
