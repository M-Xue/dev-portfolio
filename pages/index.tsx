import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { About } from '../components/sections/about/About'
import { Contact } from '../components/sections/contact/Contact'
import { Education } from '../components/sections/education/Education'
import { Intro } from '../components/sections/intro/Intro'
import { LeftSiderbar } from '../components/LeftSiderbar'
import { Projects } from '../components/sections/projects/Projects'
import { RightSidebar } from '../components/RightSidebar'
import { Skills } from '../components/Skills'
import { Topbar } from '../components/Topbar'
import useOnScreen from '../hooks/useOnScreen'
import styles from '../styles/Home.module.css'

import { motion, AnimatePresence } from "framer-motion"



const Home: NextPage = () => {

  const topbarRef = useRef<HTMLDivElement | null>(null);
  const isVisibleTopbar = useOnScreen(topbarRef);


  return (
    <>
      <Head>
        <title>MX Dev Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.background}></div>
      <div className={styles.container}>

        <Topbar ref={topbarRef}/>

        <AnimatePresence>
          {!isVisibleTopbar && 
            <LeftSiderbar/>
          }
        </AnimatePresence>
        <RightSidebar/>

        <main className={styles.main}>

          {/* https://www.youtube.com/watch?v=9eMp8l4WEpE
              ^^ WATCH THIS V IMPORTANT
          */}


          <Intro/>
          <About/>
          {/* <Skills/> */}
          {/* <Projects/> */}
          <Education/>
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