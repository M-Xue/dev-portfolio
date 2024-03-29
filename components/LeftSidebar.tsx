import React, { useEffect, useRef, useState } from 'react';
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import useHover from '../hooks/useHover';
import styles from '../styles/components/LeftSidebar.module.css';
import { motion, AnimatePresence } from "framer-motion";
import { IconTooltipWrapper } from './IconToolTipWrapper';
import { DownloadResumeTooltip } from './DownloadResumeTooltip';

interface SectionRefs {
  [name: string]: HTMLDivElement | null;
}
interface Props {
  sectionRefs: SectionRefs,
  downloadResume(): void,
}

export const LeftSidebar = ({sectionRefs, downloadResume}:Props) => {
  const [resumeIconRef, isResumeIconHovered] = useHover<HTMLDivElement | null>();
  const [resumeTooltipPopupRef, isResumeTooltipHovered] = useHover<HTMLDivElement | null>();
  const resumeTooltipRef = useRef<null | HTMLDivElement>(null);


  return (
    <motion.div 
      className={styles.container}
      initial={{ opacity: 0, y: '10px' }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: '10px' }}
      transition={{ duration: 1, ease: [0.645, 0.045, 0.355, 1]}}
    >
      <IconTooltipWrapper tooltip={"About"} position={"left"} section={sectionRefs.about}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      </IconTooltipWrapper>

      <IconTooltipWrapper tooltip={"Work Experience"} position={"left"} section={sectionRefs.workExperience}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-git-merge"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9a9 9 0 0 0 9 9"/></svg>
      </IconTooltipWrapper>

      <IconTooltipWrapper tooltip={"Education"} position={"left"} section={sectionRefs.education}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
      </IconTooltipWrapper>

      <div className={styles.fileTextIcon} ref={resumeIconRef}>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
        <CSSTransition
          in={isResumeIconHovered || isResumeTooltipHovered}
          nodeRef={resumeTooltipRef}
          timeout={150} 
          unmountOnExit
          classNames={{
            enter: styles.tooltipEnter,
            enterActive: styles.tooltipEnterActive,
            enterDone: styles.tooltipEnterDone,
            exit: styles.tooltipExit,
            exitActive: styles.tooltipExitActive
          }}
        >
          <div className={styles.tooltipContainer} ref={(e) => {resumeTooltipRef.current = e; resumeTooltipPopupRef(e);}}>
            <DownloadResumeTooltip downloadResume={downloadResume}/>
          </div>
        </CSSTransition>

        
      </div>

      <div className={styles.vertLine}></div>
    </motion.div>
  )
}


//<div className={styles.iconContainer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-terminal"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg></div>
//<div className={styles.iconContainer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg></div> 
//<div className={styles.iconContainer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-send"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></div>
