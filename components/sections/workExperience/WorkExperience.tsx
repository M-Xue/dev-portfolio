import React from 'react'
import styles from '../../../styles/sections/workExperience/WorkExperience.module.css'
import { TabList } from './TabList'

export const WorkExperience = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>My Time At Displayr</h1>
        <p className={styles.description}>I worked as an intern for Displayr for 3 months, getting experience with the AGILE development cycle and contributing to products. Here are some of the teams I worked in.</p>
        <div className={styles.tabListContainer}>
            <TabList/>
        </div>
    </div>
  )
}
