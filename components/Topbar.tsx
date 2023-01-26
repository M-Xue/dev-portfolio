import React, { forwardRef, useRef, useState } from 'react'
import useOnScreen from '../hooks/useOnScreen'
import styles from '../styles/components/TopBar.module.css'
import { DownloadResumeTooltip } from './DownloadResumeTooltip';

interface SectionRefs {
  [name: string]: HTMLDivElement | null;
}

interface Props {
  sectionRefs: SectionRefs
}


const TopBar = forwardRef<HTMLDivElement, Props>(
  ({sectionRefs}, ref) => {

    return (
      <div className={styles.container} ref={ref}>
          <div className={styles.logo}>MX</div>
          <nav className={styles.navigation}>
              <ul>
                  <li className={styles.about}>
                    <a href="" onClick={(e)=>{e.preventDefault(); sectionRefs.about?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                      About
                    </a>
                  </li>

                  <li className={styles.work}>
                    <a href="" onClick={(e)=>{e.preventDefault(); sectionRefs.workExperience?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-git-merge"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
                      Work Experience 
                    </a>
                  </li>
                  <li className={styles.education} onClick={(e)=>{e.preventDefault(); sectionRefs.education?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                      Education
                    </a>
                  </li>
                  {/* <li className={styles.contact}>
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
                      Contact
                    </a>
                  </li> */}
                  <li className={styles.resume}>
                    <button>
                      Resume
                      {/* https://iconoir.com/ */}
                      <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                    </button>
                  </li>
  
              </ul>
          </nav>
      </div>
    )
  }
  
)

TopBar.displayName='TopBar';
export {TopBar};



                  {/* <li className={styles.skills}>
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                      Skills
                    </a>
                  </li> */}
                  {/* <li className={styles.projects}>
                    <a href="">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                      Projects
                    </a>
                  </li> */}