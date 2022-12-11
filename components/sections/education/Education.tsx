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

          <button className={styles.educationPageButton} onClick={()=>{}}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
              <span>Read more here</span> 
          </button>
          
          
        </div>
        
        <CourseGrid/>
                     

      </div>

    </div>
  )
}


