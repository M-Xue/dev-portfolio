import React from 'react'
import styles from '../../../styles/sections/education/CourseGrid.module.css'
import { Course } from './Course'

const courses = [
  {
    title: "Programming & Computer Systems Fundamentals",
    description: "Learnt the fundamentals of coding and code style. Utilized pointers and manipulated memory at a low level to better understand memory manipulation. Used assembly language (MIPS) to create interactive applications.",
    technologies: ["C","Code Style","MIPS","Memory Manipulation"],
    assignments: "https://github.com/M-Xue/University-Work/tree/main/COMP1511%20Programming%20Fundamentals",
  },
  {
    title: "Data Structures & Algorithms",
    description: "Employed data structures and algorithms in the design of software systems. Analyzed the efficiency of algorithms using Big-O notation and refactoring to create optimal solutions.",
    technologies: ["Time Complexity","Trees","Graphs","Greedy","Dynamic Programming"],
    assignments: "https://github.com/M-Xue/University-Work/tree/main/COMP2521%20Data%20Structures%20and%20Algorithms"
  },
  {
    title: "Object Oriented Design & Programming",
    description: "Applied the principles of object oriented software design to create flexible, maintainable and extensible code. Conducted requirements analysis before development to create domain models with UML, applying design patterns.",
    technologies: ["Java","Software Design", "Design Patterns", "UML", "SOLID"],
    assignments: "https://github.com/M-Xue/University-Work/tree/main/COMP2511%20Object%20Oriented%20Programming",
  },
  {
    title: "Software Engineering Fundamentals",
    description: "Created a term-long project using Agile and Scrum practices. Used Git to implement version control among team members and applied principles of test driven development, creating blackbox tests before implementing functionalities.",
    technologies: ["Python","Agile & Scrum","HTTP","Test Driven Development", "Git"],
    assignments: "https://github.com/M-Xue/University-Work/tree/main/COMP1531%20Software%20Engineering%20Fundementals",
  },
  {
    title: "Databases",
    description: "Learnt the SQL query language and stored procedures with PostgreSQL. Implemented query sanitization to prevent SQL injections. Used normalization to reduce redundancy in ER and relational models.",
    technologies: ["SQL","PostgreSQL","PLpgSQL","psycopg2","Triggers","Aggregates","Views"],
    assignments: "https://github.com/M-Xue/University-Work/tree/main/COMP3311%20Database%20Systems",
  },
  {
    title: "Computer Networks & Applications",
    description: "Explored the layers of the Internet Layered Architecture and the corresponding protocols for each layer. Created a client-server architecture application by creating a custom application protocol and using transport layer protocols (TCP and UDP) to facilitate data communication.",
    technologies: ["Internet Protocol Stack","Internet Layered Architecture"],
    assignments: "https://github.com/M-Xue/University-Work/tree/main/COMP3331%20Computer%20Networks%20and%20Applications",
  },
]



export const CourseGrid = () => {
  return (
    <div className={styles.container}>
        {/* <Course/> */}
      {courses.map(
        (c, idx) => {
          return <Course
            key={idx}
            course={c}
          />
        }
      )}
    </div>
  )
}
