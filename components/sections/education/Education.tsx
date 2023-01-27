import React, { useRef, useState } from 'react'
import styles from '../../../styles/sections/education/Education.module.css'
import { EducationPage } from './EducationPage';
import { TabList } from '../../TabList';
import { CSSTransition } from 'react-transition-group'
import { motion } from 'framer-motion'
import { CourseGrid } from './CourseGrid';



export const Education = () => {

  return (
    <div className={styles.container}>
      

      <h1 className={styles.title}>My Time At University</h1>

      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            I'm a final year student doing a Computer Science degree at UNSW. 
            I am also the Education Executive of CSESoc for 2023, where I lead multiple subcommittees to foster an inclusive and self-driven student developer community.
          </p> 
        </div>
        <CourseGrid/>
      </div>

    </div>
  )
}


