import React, { useState } from 'react'
import styles from '../styles/Education.module.css'
import { EducationPage } from './EducationPage';
import { TabList } from './TabList';

export const Education = () => {

  const [isContentOpen, setIsContentOpen] = useState(false);


  const handleButtonClick = () => setIsContentOpen(!isContentOpen);

  return (
    <div className={styles.container}>
      

      <h1 className={styles.title}>My Time At University</h1>

      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            I'm a final year student doing a Computer Science degree at UNSW. 
            I am also the Education Executive for 2023, where I lead multiple subcommittees to foster an inclusive and self-driven student developer community.
          </p> 

          <details>
              <summary>Details</summary>
              Something small enough to escape casual notice.
          </details>

          {/* <EducationPage isContentOpen={isContentOpen} handleButtonClick={handleButtonClick}/> */}
        </div>

        <div className={styles.courses}>
          <TabList/>
        </div>


      </div>

    </div>
  )
}


