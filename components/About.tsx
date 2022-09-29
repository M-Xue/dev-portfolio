import React from 'react'
import styles from '../styles/About.module.css'


export const About = () => {
  return (
    <div className={styles.container}>
      
      <h1 className={styles.h1}>
        <span className={styles.hello}>Hello, my name is&nbsp;</span><span className={styles.name}><span className={styles.blueFont}>Max Xue</span></span>
      </h1>
      <h1 className={styles.h1}>
        <span className={styles.fullstack}>I am a <span className={styles.yellowFont}>fullstack&nbsp;</span></span> <span className={styles.engineer}>engineer</span>
      </h1>
      


      

    </div>
  )
}

