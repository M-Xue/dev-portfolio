import React from 'react'
import styles from '../../../styles/sections/about/About.module.css'


export const About = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About</h1>

      <div className={styles.content}>
        <p className={styles.description}>I'm a computer science student in my final year studying at UNSW Sydney. I enjoy ideating, designing and iterating enjoyable web experiences while maintaining aesthetic user interfaces. I strive to develop as a software engineer, sharing my discoveries with those around me and hoping to learn from those more knowledgable than myself. </p>
        <div className={styles.technologies}>
          tech. put some cool ui examples here to play around with or smth
          <h1>talk about the tech skills you have. highlight the important ones but maybe dont spam them</h1>

        </div>
      </div>



    </div>
  )
}

