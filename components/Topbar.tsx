import React from 'react'
import styles from '../styles/Topbar.module.css'

export const Topbar = () => {
  return (
    <div className={styles.container}>
        <div>MX</div>
        <nav className={styles.navigation}>
            <ul>
                <li><a href="">About</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Projects</a></li>

                <li><a href="">Education</a></li>
                <li><a href="">Contact</a></li>
                <li className={styles.resume}>Resume</li>

            </ul>
        </nav>

    </div>
  )
}
