import React, { useState } from 'react'
import styles from '../styles/components/MobileSidebar.module.css';

export const MobileSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  return (
    <div className={isSidebarOpen ? `${styles.container} ${styles.open}` : `${styles.container} ${styles.closed}`}>
        <button className={styles.button} onClick={()=>setIsSidebarOpen(prev=>!prev)}>
            {
                isSidebarOpen
                ?
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.758 17.243L12.001 12m5.243-5.243L12 12m0 0L6.758 6.757M12.001 12l5.243 5.243" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>
                :
                <svg width="24px" height="24px" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5h18M3 12h18M3 19h18" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path></svg>

            }
        </button>

    </div>
  )
}
