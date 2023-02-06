import React, { useRef, useState } from 'react'
import styles from '../styles/components/MobileSidebar.module.css';
import { CSSTransition } from 'react-transition-group';

interface SectionRefs {
  [name: string]: HTMLDivElement | null;
}

interface Props {
  sectionRefs: SectionRefs,
  downloadResume(): void,
}

export const MobileSidebar = ({sectionRefs, downloadResume}:Props) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
    const menuRef = useRef(null)
    const [hasFirstClick, setHasFirstClick] = useState<boolean>(false);


    const [recentlyCopied, setRecentlyCopied] = useState<boolean>(false);
    const copyIconTimeout = useRef<any>(null);

    const handleClipboardCopyClick = async (e) => {
        setRecentlyCopied(true);

        if (copyIconTimeout.current === null) {
        copyIconTimeout.current = setTimeout(() => {
            setRecentlyCopied(false);
            copyIconTimeout.current = null;
        }, 2500);
        } else {
        clearTimeout(copyIconTimeout.current);
        copyIconTimeout.current = setTimeout(() => {
            setRecentlyCopied(false);
            copyIconTimeout.current = null;
        }, 2500);
        }

        try {
        await navigator.clipboard.writeText("maxxue2018@hotmail.com");
        } catch (error) {
        console.warn('Copy failed', error)
        }
    }


  return (
    <>
        <CSSTransition
            timeout={750}
            in={isSidebarOpen}
            nodeRef={menuRef}
            classNames={{
                enter: styles.menuEnter,
                enterActive: styles.menuEnterActive,
                enterDone: styles.menuEnterDone,
                exit: styles.menuExit,
                exitActive: styles.menuExitActive
            }}
            appear
        >
            <div className={styles.container} ref={menuRef}>
                <button className={styles.button} onClick={()=>{setIsSidebarOpen(prev=>!prev); setHasFirstClick(true);}}>
                    {
                        isSidebarOpen
                        ?
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                        :
                        <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>

                    }
                </button>

                <nav className={styles.nav}>
                    <div className={styles.sections}>
                        <div className={styles.about + ' ' + styles.iconTitle} >
                            <a href="" onClick={(e)=>{e.preventDefault(); sectionRefs.about?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                                <span>About</span>
                            </a>
                        </div>        
                        
                        <div className={styles.work + ' ' + styles.iconTitle}>
                            <a href="" onClick={(e)=>{e.preventDefault(); sectionRefs.workExperience?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-merge"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
                                <span>Work Experience</span>
                            </a>
                        </div>
                        <div className={styles.education + ' ' + styles.iconTitle}>
                            <a href="" onClick={(e)=>{e.preventDefault(); sectionRefs.education?.scrollIntoView({ behavior: 'smooth', block: 'start' });}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                <span>Education</span>
                            </a>
                        </div>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.linkContainer}>
                            <a href={"https://github.com/M-Xue"} target={"_blank"} rel={"noreferrer"}>
                                <div className={styles.github + ' ' + styles.iconTitle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                    <span>GitHub</span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.linkContainer}>
                            <a href={"https://www.linkedin.com/in/max-xue-9b5087212/"} target={"_blank"} rel={"noreferrer"}>
                                <div className={styles.linkedin + ' ' + styles.iconTitle}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                    <span>LinkedIn</span>
                                </div>
                            </a>
                        </div>
                        <div className={styles.resume + ' ' + styles.linkContainer}>
                            <div className={styles.iconTitle}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
                                <span>Resume</span>
                            </div>

                            <button className={styles.download} onClick={downloadResume}>
                                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                            </button>
                        </div>
                        <div className={styles.email + ' ' + styles.linkContainer}>
                            <div className={styles.iconTitle}>
                                <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                <span>Email</span>
                            </div>


                            <button className={styles.clipboardIcon} onClick={handleClipboardCopyClick}> {/* https://iconoir.com/ */}
                                {
                                !recentlyCopied 
                                ?
                                <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path></svg>
                                :
                                <svg width="24px" height="24px" viewBox="0 0 24 24" strokeWidth="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h6M15.5 4H18a2 2 0 012 2v9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.5 20.5l2 2 5-5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                                }
                            </button>
                            
                        </div>
                    </div>
                </nav>
            </div>
        </CSSTransition>
    </> 
  )
}
