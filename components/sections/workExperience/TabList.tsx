import React, { useState } from 'react'
import styles from '../../../styles/sections/workExperience/TabList.module.css'

const teams = [
    {
        name: "Performance Team",
        activities: [
            "Added distributed tracing to the application to monitor performance and diagnose bottlenecks in the system processes",
            "Utilized the OpenTelemetry standard via the Elastic APM third party service",
            "Assisted in creating an abstraction over Elastic APM using the native C# Activity package for software flexibility and extensibility",
            "Investigated the backend codebase to determine where tracing would be most effective for engineers to diagnose performance issues"
        ]
    },
    {
        name: "Engineering Health Team",
        activities: [
            "Refactored the applications uncaught Promise error processing system",
            "Migrated the codebase from React version 17 to version 18",
            "Converted vanilla TypeScript components using JQuery to React components"
        ]
    },
    {
        name: "Features Team",
        activities: [
            "Created features"
        ]
    }
];

export const TabList = () => {
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
