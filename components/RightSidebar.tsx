import React, { useEffect, useRef, useState } from 'react'
import { CSSTransition } from 'react-transition-group';
import useHover from '../hooks/useHover'
import styles from '../styles/components/RightSidebar.module.css'


export const RightSidebar = () => {
  const [emailIconRef, isHovered] = useHover<HTMLDivElement | null>();
  const [tooltipPopupRef, isTooltipHovered] = useHover<HTMLDivElement | null>();
  const tooltipRef = useRef<null | HTMLDivElement>(null);
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

  useEffect(() => {
    return () => {
      if (copyIconTimeout.current) 
        clearTimeout(copyIconTimeout.current);
    }
  }, [])
  

  return (
    <div className={styles.container}>
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg> */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-moon"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg> */}
        <a href={"https://github.com/M-Xue"} target={"_blank"} rel={"noreferrer"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a>
        <a href={"https://www.linkedin.com/in/max-xue-9b5087212/"} target={"_blank"} rel={"noreferrer"}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>

        <div className={styles.emailIcon} ref={emailIconRef}>
          <svg  xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" ><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          
          <CSSTransition
            in={isHovered || isTooltipHovered}
            nodeRef={tooltipRef}
            timeout={150} 
            unmountOnExit
            classNames={{
              enter: styles.tooltipEnter,
              enterActive: styles.tooltipEnterActive,
              enterDone: styles.tooltipEnterDone,
              exit: styles.tooltipExit,
              exitActive: styles.tooltipExitActive
            }}
          >{}
            <div className={styles.tooltipContainer} ref={(e) => {tooltipRef.current = e; tooltipPopupRef(e);}}>
              <div className={styles.tooltipBox}>
                maxxue2018@hotmail.com
                <div className={styles.clipboardIcon} onClick={handleClipboardCopyClick}> {/* https://iconoir.com/ */}
                  {
                    !recentlyCopied 
                    ?
                    <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path></svg>
                    :
                    <svg width="24px" height="24px" viewBox="0 0 24 24" stroke-width="1.5" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M8.5 4H6a2 2 0 00-2 2v14a2 2 0 002 2h6M15.5 4H18a2 2 0 012 2v9" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M8 6.4V4.5a.5.5 0 01.5-.5c.276 0 .504-.224.552-.496C9.2 2.652 9.774 1 12 1s2.8 1.652 2.948 2.504c.048.272.276.496.552.496a.5.5 0 01.5.5v1.9a.6.6 0 01-.6.6H8.6a.6.6 0 01-.6-.6z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"></path><path d="M15.5 20.5l2 2 5-5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  }
                </div>
              </div>
            </div>
          </CSSTransition>
        
        </div>

        <div className={styles.vertLine}></div>
    </div>
  )
}
