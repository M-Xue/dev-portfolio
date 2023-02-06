import React from 'react'
import styles from '../../../styles/sections/workExperience/WorkExperience.module.css'
import { CardList } from './CardList'
import { TabList } from './TabList'


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
          "Created new features for users to interact and configure items on the screen",
          "Implemented both the backend and frontend components of these features",
          "Extended existing features",
          "Wrote integration and unit tests for use cases of features I implemented or extended",
          "Contributed to code reviews",
      ]
  }
];

export const WorkExperience = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>My Time At Displayr</h1>
        <p className={styles.description}>I worked as an intern for Displayr for 3 months, getting experience with the AGILE development cycle and contributing to products. Here are some of the teams I worked in.</p>
        <div className={styles.tabListContainer}>
          <TabList teams={teams}/>
        </div>
        <div className={styles.cardListContainer}>
          <CardList teams={teams}/>  
        </div>
    </div>
  )
}
