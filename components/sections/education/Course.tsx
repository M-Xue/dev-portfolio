import React from 'react'
import styles from '../../../styles/sections/education/Course.module.css'

interface assignment {
  name: string,
  repo: string
}

interface course {
  title: string,
  description: string,
  technologies: string[],
  assignments?: assignment[]
}

const t = {
  title: "Databases",
  description: "Learning the fundamentals of SQL queries with PostgreSQL, using normalization to reduce redundancy in ER and relational models",
  technologies: ["SQL","PostgreSQL","PLpgSQL","psycopg2"]
}

export const Course = ({course}: {course: course}) => {
  return (
    <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h3 className={styles.title}>{course.title}</h3>
            <div className={styles.repoContainer}><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-external-link"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg></div>
          </div>
          <p className={styles.description}>{course.description}</p>
        </div>
        <ul className={styles.technologiesList}>
          {course.technologies.map((t:string, idx:number)=><li key={idx}>{t}</li>)}
        </ul>
        {
          course.assignments 
          && 
          <ul className={styles.assignments}>
            {course.assignments.map((a:assignment, idx:number)=><li key={idx}><a href={a.repo} target="_blank" rel="noreferrer">{a.name}</a></li>)}
          </ul>
        }
    </div>
  )
}
