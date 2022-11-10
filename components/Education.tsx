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
          <EducationPage isContentOpen={isContentOpen} handleButtonClick={handleButtonClick}/>
        </div>

        <div className={styles.courses}>
          <TabList/>
        </div>


      </div>


      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
      <br /><br /><br />
    </div>
  )
}


// Beginning my Computer Science degree in September 2020, I developed a passion for software development learning the fundementals of programming. As my first term progressed, I developed a sense of pride looking back at the work I had completed and how I had created programs I could never have even imagined a few months prior. However, I knew this was just the beginning and developed a curiosity for what more I could create, diving into online free tutorials and ending up in the world of web applications, learning fullstack development with the MERN stack, as well as experimenting with mobile development with Swift. 
          
//           <br />
//           <br />

//           This curiosity has stayed with me till this day as I strive to develop as a developer, learning new technologies to create more powerful and enjoyable experiences for users, both in streamlining perfomance for both backend and frontend as well as attempting to learn best practices to write clean and elegant code that is flexible, maintainable and extensible.

//           <br />
//           <br />

//           As I progressed on my self-learning journey, I decided to join the UNSW Education Subcomittee in 2022 to share all the knowledge I had learnt in order to help other students overcome the struggles I faced trying to teach myself as I did not have many people to talk to about web application development since it is not a topic well covered by the UNSW Computer Science degree curriculum and there is an information overload online when you don't know what you are looking for. Here, I found so many people as passionate as I am about software development and not only achieved my goals of helping other students but also experienced so much personal growth both as an individual and as a software developer. 
      
//           <br />
//           <br />

//           Inspired by my team and my directors, I applied and assumed the position of Education/Development Executve of CSESoc 2023, where I oversee 5 subcomittees dedicated to the growth and support of the developer community at UNSW. I hope to cultivate a developer community that thrives on the curiosity of passionate students and support students to achieve their goals as software developers by making informating accessible as well as creating opporunities for students to bond with like-minded students so we can all developer and grow from each other, leveraging our unique experience and knowledge.

//           <br /><br />

//           {/* Turn these into accordion 
//           https://www.radix-ui.com/docs/primitives/components/accordion */}

//           See more below.

//           <br /><br />

//           {/* <b><h1>gotta edit this dude</h1></b> */}

//           <br /><br />