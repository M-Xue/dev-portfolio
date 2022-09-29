import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Education } from '../components/Education'
import { Intro } from '../components/Intro'
import { LeftSiderbar } from '../components/LeftSiderbar'
import { Projects } from '../components/Projects'
import { RightSidebar } from '../components/RightSidebar'
import { Skills } from '../components/Skills'
import { Topbar } from '../components/Topbar'
import styles from '../styles/Home.module.css'


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Max's Dev Portfolio</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <div className={styles.container}>

        <Topbar/>
        <RightSidebar/>
        <LeftSiderbar/>
        <main className={styles.main}>
          <Intro/>
          <About/>
          {/* <Skills/>
          <Projects/>
          <Education/>
          <Contact/> */}
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