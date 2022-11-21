import React, { useRef, useState } from 'react'
import styles from '../styles/Education.module.css'
import { EducationPage } from './EducationPage';
import { TabList } from './TabList';
import { CSSTransition } from 'react-transition-group'


export const Education = () => {

  const [isContentOpen, setIsContentOpen] = useState(false);

  const handleButtonClick = () => setIsContentOpen(!isContentOpen);
  const nodeRef = useRef(null);
  

  return (
    <div className={styles.container}>
      

      <h1 className={styles.title}>My Time At University</h1>

      <div className={styles.content}>
        <div className={styles.intro}>
          <p>
            I'm a final year student doing a Computer Science degree at UNSW. 
            I am also the Education Executive of CSESoc for 2023, where I lead multiple subcommittees to foster an inclusive and self-driven student developer community.
          </p> 
          <button className={styles.educationPageButton} onClick={handleButtonClick}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
              <span>Read more here</span> 
          </button>

          <CSSTransition
            in={isContentOpen}
            nodeRef={nodeRef}
            appear={true}
            timeout={1000} 
            unmountOnExit
            classNames={{
              enter: styles.MyClassEnter,
              enterActive: styles.MyClassEnterActive,
              enterDone: styles.MyClassEnterDone,
              exit: styles.MyClassExit,
              exitActive: styles.MyClassExitActive
            }}
          >
            <div className={styles.box} ref={nodeRef}>
              <div className={styles.text}>
                  Beginning my Computer Science degree in September 2020, I developed a passion for software development learning the fundementals of programming. As my first term progressed, I developed a sense of pride looking back at the work I had completed and how I had created programs I could never have even imagined a few months prior. However, I knew this was just the beginning and developed a curiosity for what more I could create, diving into online free tutorials and ending up in the world of web applications, learning fullstack development with the MERN stack, as well as experimenting with mobile development with Swift.
                  This curiosity has stayed with me to this day as I strive to develop as a developer, learning new technologies to create more powerful and enjoyable experiences for users, both in streamlining perfomance for both backend and frontend as well as attempting to learn best practices to write clean and elegant code that is flexible, maintainable and extensible. 
                  As I progressed on my self-learning journey, I decided to join the UNSW Education Subcomittee in 2022 to share all the knowledge I had learnt in order to help other students overcome the struggles I faced trying to teach myself as I did not have many people to talk to about web application development since it is not a topic well covered by the UNSW Computer Science degree curriculum and there is an information overload online when you don't know what you are looking for. Here, I found many people as passionate as I am about software development and not only achieved my goals of helping other students but also experienced so much personal growth both as an individual and as a software developer.  
                  Inspired by my team and my directors, I applied and assumed the position of Education/Development Executve of CSESoc 2023, where I oversee 5 subcomittees dedicated to the growth and support of the developer community at UNSW. I hope to cultivate a developer community that thrives on the curiosity of passionate students and support students to achieve their goals as software developers by making informating accessible as well as creating opporunities for students to bond with like-minded students so we can all developer and grow from each other, leveraging our unique experience and knowledge.  
              </div>
            </div>
          </CSSTransition>




          
        </div>

        <div className={styles.courses}>
          <TabList/>
        </div>


      </div>

    </div>
  )
}


