import React from 'react'
import styles from '../styles/components/DownloadResumeTooltip.module.css'

interface Props {
  downloadResume(): void
}

export const DownloadResumeTooltip = ({downloadResume}:Props) => {
  return (
    <div className={styles.tooltipBox}>
        <span>Download Resume</span>
        <div className={styles.downloadIcon} onClick={()=>downloadResume()}> 
            {/* https://iconoir.com/ */}
            <svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6 20h12M12 4v12m0 0l3.5-3.5M12 16l-3.5-3.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
        </div>
    </div>
  )
}
