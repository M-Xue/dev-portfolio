import React, { useState } from 'react'
import styles from '../../../styles/sections/workExperience/TabList.module.css'

interface team {
    name: string;
    activities: string[]
}

interface Props {
    teams: team[]
}

export const TabList = ({teams}: Props) => {
    const [currTab, setCurrTab] = useState<number>(0);

    return (
        <div className={styles.container}>
            <div className={styles.tabs}>
                {
                    teams.map((team, idx) => 
                        <div key={team.name} className={currTab === idx ? styles.tabName + " " + styles.tabNameActive : styles.tabName + " " + styles.tabNameInactive} onClick={() => setCurrTab(idx)}><span>{team.name}</span></div>
                    )
                }
            </div>
            <div className={styles.work}>
                <ul>
                    {teams[currTab].activities.map((work,idx) =>
                        <li key={idx}>{work}</li>
                    )}
                </ul>
            </div>
        </div>
    )
}
