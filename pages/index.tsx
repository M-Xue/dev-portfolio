import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { About } from '../components/sections/about/About'
import { Contact } from '../components/sections/contact/Contact'
import { Education } from '../components/sections/education/Education'
import { Intro } from '../components/sections/intro/Intro'
import { LeftSidebar } from '../components/LeftSidebar'
import { Projects } from '../components/sections/projects/Projects'
import { RightSidebar } from '../components/RightSidebar'
import { Skills } from '../components/Skills'
import { TopBar } from '../components/TopBar'
import useOnScreen from '../hooks/useOnScreen'
import styles from '../styles/Home.module.css'

import { motion, AnimatePresence } from "framer-motion"
import { WorkExperience } from '../components/sections/workExperience/WorkExperience'

interface SectionRefs {
  [name: string]: HTMLDivElement | null;
}


const Home: NextPage = () => {

  const topBarRef = useRef<HTMLDivElement | null>(null);
  const isVisibleTopBar = useOnScreen(topBarRef);
  const sectionRefs = useRef<SectionRefs>({})

  return (
    <>
      <Head>
        <title>MX Dev Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.background}></div>
      <div className={styles.container}>

        <TopBar ref={topBarRef} sectionRefs={sectionRefs.current}/>

        <AnimatePresence>
          {!isVisibleTopBar && 
            <LeftSidebar sectionRefs={sectionRefs.current}/>
          }
        </AnimatePresence>
        <RightSidebar/>

        <main className={styles.main}>

          {/* https://www.youtube.com/watch?v=9eMp8l4WEpE
              ^^ WATCH THIS V IMPORTANT
          */}

          <div ref={(el) => {sectionRefs.current.intro = el;}} className={styles.sectionContainer}><Intro/></div>
          <div ref={(el) => {sectionRefs.current.about = el;}} className={styles.sectionContainer}><About/></div>
          <div ref={(el) => {sectionRefs.current.workExperience = el;}} className={styles.sectionContainer}><WorkExperience/></div>
          <div ref={(el) => {sectionRefs.current.education = el;}} className={styles.sectionContainer}><Education/></div>
          
          {/* <Skills/> */}
          {/* <Projects/> */}
          {/* <Contact/> */}
        </main>

        <footer className={styles.footer}>
          
        </footer>
      </div>
    </>
  )
}

export default Home

// light: rgb(249,250,251) from TanStack and https://leerob.io/
// - font: black (or rgb(17,24,39))
// dark: rgb(27,31,36) from GitHub CoPilot
// - font: white

// Content width: 1200px

// Should embed prosemirror editor, google doc and messenger project in the page


// https://brittanychiang.com/
// https://tamalsen.dev/
// https://github.com/features/copilot
// https://iuri.is/
// https://www.codewonders.dev/about