import React, { useEffect, useState } from 'react';
import styles from '../styles/components/TabList.module.css';


const tabInfo = [
    {
        id: 0,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
				<path d="m8 18-6-6 6-6 1.425 1.425-4.6 4.6L9.4 16.6Zm8 0-1.425-1.425 4.6-4.6L14.6 7.4 16 6l6 6Z"/>
			</svg>
		),
		courseId: 'COMP1511',
		courseTitle: 'Programming Fundamentals',
        content:(
			<ul>
				<li>Learnt the fundementals of coding (program structures, data types, data structures, programming principles and code style.</li>
				<li>Created interactive terminal applications with the C programming language.</li>
				<li>Utilised pointers and manipulated memory at a low level to better understand memory manipulation.</li>
			</ul>
		),
    },
    {
        id: 1,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
				<path d="M0 18v-1.575q0-1.1 1.113-1.763Q2.225 14 4 14q.325 0 .625.012.3.013.575.063-.35.5-.525 1.075-.175.575-.175 1.225V18Zm6 0v-1.625q0-1.625 1.663-2.625 1.662-1 4.337-1 2.7 0 4.35 1 1.65 1 1.65 2.625V18Zm13.5 0v-1.625q0-.65-.163-1.225-.162-.575-.487-1.075.275-.05.563-.063Q19.7 14 20 14q1.8 0 2.9.662 1.1.663 1.1 1.763V18ZM12 14.75q-1.425 0-2.55.375-1.125.375-1.325.875H15.9q-.225-.5-1.338-.875Q13.45 14.75 12 14.75ZM4 13q-.825 0-1.412-.588Q2 11.825 2 11q0-.85.588-1.425Q3.175 9 4 9q.85 0 1.425.575Q6 10.15 6 11q0 .825-.575 1.412Q4.85 13 4 13Zm16 0q-.825 0-1.413-.588Q18 11.825 18 11q0-.85.587-1.425Q19.175 9 20 9q.85 0 1.425.575Q22 10.15 22 11q0 .825-.575 1.412Q20.85 13 20 13Zm-8-1q-1.25 0-2.125-.875T9 9q0-1.275.875-2.138Q10.75 6 12 6q1.275 0 2.137.862Q15 7.725 15 9q0 1.25-.863 2.125Q13.275 12 12 12Zm0-4q-.425 0-.712.287Q11 8.575 11 9t.288.712Q11.575 10 12 10t.713-.288Q13 9.425 13 9t-.287-.713Q12.425 8 12 8Zm0 8Zm0-7Z"/>
			</svg>
		),
		courseId: 'COMP1531',
		courseTitle: 'Software Engineering Fundamentals',
        content: (
			<ul>
				<li>Created a term-long project in a team with Python using agile practices and scrum to simulate working in a industry professional software engineering team.</li>
				<li>Conducted frequent standups to communicate progress with team members and utilised an issue board to keep track of prject progress.</li>
				<li>Used Git to implement version control among team members and stored repositories in GitLab.</li>
				<li>Applied principles of test driven deleopment, creating blackbox tests before implementing functionalities.</li>
				<li>* Used Flask to create a REST API for a provided frontend, creating an authentication system with email recovery and a chat feature with lazy loading to implement infinite scrolling.</li>
			</ul>
		),
    },
    {
        id: 2,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
				<path d="M3 22v-7h3v-4h5V9H8V2h8v7h-3v2h5v4h3v7h-8v-7h3v-2H8v2h3v7Zm7-15h4V4h-4ZM5 20h4v-3H5Zm10 0h4v-3h-4ZM12 7ZM9 17Zm6 0Z"/>
			</svg>
		),
		courseId: 'COMP2521',
		courseTitle: 'Data Structures and Algorithms',
        content: (
			<ul>
				<li>Employed data structures and algorithms in the design of software systems.</li>
				<li>Analysed the efficiency of algorithms using Big-O notation and refactoring to create optimal solutions.</li>
			</ul>
		),
    },
    {
        id: 3,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
				<path d="M14 20v-2h3q.425 0 .712-.288Q18 17.425 18 17v-2q0-.95.55-1.725.55-.775 1.45-1.1v-.35q-.9-.325-1.45-1.1Q18 9.95 18 9V7q0-.425-.288-.713Q17.425 6 17 6h-3V4h3q1.25 0 2.125.875T20 7v2q0 .425.288.712.287.288.712.288h1v4h-1q-.425 0-.712.287Q20 14.575 20 15v2q0 1.25-.875 2.125T17 20Zm-7 0q-1.25 0-2.125-.875T4 17v-2q0-.425-.287-.713Q3.425 14 3 14H2v-4h1q.425 0 .713-.288Q4 9.425 4 9V7q0-1.25.875-2.125T7 4h3v2H7q-.425 0-.713.287Q6 6.575 6 7v2q0 .95-.55 1.725-.55.775-1.45 1.1v.35q.9.325 1.45 1.1Q6 14.05 6 15v2q0 .425.287.712Q6.575 18 7 18h3v2Z"/>
			</svg>
		),
		courseId: 'COMP2511',
		courseTitle: 'Object-Oriented Design & Programming',
        content: (
			<ul>
				<li>Learnt and applied the principles of object oriented software design to create flexible, maintainable and extensible code.</li>
				<li>Conducted requirements analysis before development to create domain models with UML, applying design patterns.</li>
				<li>Designed backend systems using test-driven development in a team using agile practices.</li>
				{/* <p>* Worked in a team to create the backend for a browser based game, designing the backend architecture first using</p> */}
			</ul>
		),
    },
    {
        id: 4,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
				<path d="M12 11q-3.75 0-6.375-1.175T3 7q0-1.65 2.625-2.825Q8.25 3 12 3t6.375 1.175Q21 5.35 21 7q0 1.65-2.625 2.825Q15.75 11 12 11Zm0 5q-3.75 0-6.375-1.175T3 12V9.5q0 1.1 1.025 1.863 1.025.762 2.45 1.237 1.425.475 2.963.687 1.537.213 2.562.213t2.562-.213q1.538-.212 2.963-.687 1.425-.475 2.45-1.237Q21 10.6 21 9.5V12q0 1.65-2.625 2.825Q15.75 16 12 16Zm0 5q-3.75 0-6.375-1.175T3 17v-2.5q0 1.1 1.025 1.863 1.025.762 2.45 1.237 1.425.475 2.963.688 1.537.212 2.562.212t2.562-.212q1.538-.213 2.963-.688t2.45-1.237Q21 15.6 21 14.5V17q0 1.65-2.625 2.825Q15.75 21 12 21Z"/>
			</svg>
		),
		courseId: 'COMP3311',
		courseTitle: 'Database Systems',
        content: (
			<ul>
				<li></li>
			</ul>
		),
    },
    {
        id: 5,
		icon: (
			<svg xmlns="http://www.w3.org/2000/svg" height="24" width="24">
				<path d="M5 21q-.825 0-1.413-.587Q3 19.825 3 19v-4q0-.825.587-1.413Q4.175 13 5 13h10V9h2v4h2q.825 0 1.413.587Q21 14.175 21 15v4q0 .825-.587 1.413Q19.825 21 19 21Zm14-2v-4H5v4ZM8 17q0-.425-.287-.712Q7.425 16 7 16t-.713.288Q6 16.575 6 17t.287.712Q6.575 18 7 18t.713-.288Q8 17.425 8 17Zm3.5 0q0-.425-.287-.712Q10.925 16 10.5 16t-.712.288Q9.5 16.575 9.5 17t.288.712q.287.288.712.288t.713-.288q.287-.287.287-.712Zm2.5 1q.425 0 .713-.288Q15 17.425 15 17t-.287-.712Q14.425 16 14 16t-.712.288Q13 16.575 13 17t.288.712Q13.575 18 14 18Zm.25-9.75L12.8 6.8q.65-.6 1.45-.95.8-.35 1.75-.35t1.75.35q.8.35 1.45.95l-1.45 1.45q-.35-.35-.787-.55-.438-.2-.963-.2-.525 0-.962.2-.438.2-.788.55Zm-2.5-2.5-1.4-1.4q1.1-1.1 2.55-1.725Q14.35 2 16 2q1.65 0 3.1.625 1.45.625 2.55 1.725l-1.4 1.4q-.825-.825-1.913-1.287Q17.25 4 16 4q-1.25 0-2.337.463-1.088.462-1.913 1.287ZM5 19v-4 4Z"/>
			</svg>

		),
		courseId: 'COMP3331',
		courseTitle: 'Computer Networks & Applications',
        content:  (
			<ul>
				<li></li>
			</ul>
		),
    }
]


export const TabList = () => {

	const [currTab, setCurrTab] = useState(0);
	const [initLoad, setInitLoad] = useState(false);
	useEffect(() => {
	  setInitLoad(true);
	}, [])
	
	


  return (
    <div className={styles.container}>
				<h1 className={styles.title}>Notable Courses</h1>
				<div className={styles.content}>
					<div className={styles.tabList}>
						{
							tabInfo.map(
								(tab: any, index: number) => {
									return <button key={index} onClick={()=>setCurrTab(index)} className={styles.tab}>{tabInfo[index].courseId}</button>;
								}
							)
						}
					</div>
					<div className={styles.currTabWindow}>
						{initLoad && (
							<>
								<div className={styles.currTabTitle}><h2>{tabInfo[currTab].courseTitle}</h2></div>
								<div className={styles.currTabContent}>{tabInfo[currTab].content}</div>
							</>
						)}
					</div>
				</div>
        {/* MAKE ALL THIS WINDOW WHITE DJGHSD;GHASDFLG; */}
		{/* Cool example https://www.youtube.com/watch?v=htGfnF1zN4g */}





    </div>
  )
}





