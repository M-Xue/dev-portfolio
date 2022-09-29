import React from 'react'
import styles from '../styles/About.module.css'


export const About = () => {
  return (
    <div className={styles.container}>
      {/* <div className={styles.flex}><h1 className={styles.hello}>Hello, my name is <span className={styles.name}>Max Xue</span>.</h1></div>
      <div className={styles.flex}>
        <h1 className={styles.secondaryH1}>I am a fullstack engineer. </h1>
        <span className={styles.cursor}></span>
      </div> */}
      
      <h1 className={styles.hello}>
        <span className={styles.nowrap}>Hello, my name is</span> <span className={styles.name}>Max Xue</span>.
      </h1>
      <h1 className={styles.secondaryH1}>
        <span className={styles.nowrap}>I am a <span className={styles.fullstack}>fullstack</span></span> engineer.
      </h1>
      


      <p></p>

      

    </div>
  )
}

// <span className={styles.test}></span>

        /* <div className={styles.cursor}></div> */
        /* <span className={styles.nowrap}></span> */