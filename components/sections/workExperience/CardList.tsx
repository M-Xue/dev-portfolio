import React from 'react'
import styles from '../../../styles/sections/workExperience/CardList.module.css'

interface team {
    name: string;
    activities: string[]
}

interface Props {
    teams: team[]
}

export const CardList = ({teams}: Props) => {
    return (
        <div className={styles.container}>
            {
                teams.map((team, idx) => 
                    <div key={team.name} className={styles.cardContainer}>
                        <h3 className={styles.name}>{team.name}</h3>
                        <ul className={styles.description}>
                            {team.activities.map((work,idx) =>
                                <li key={idx}>{work}</li>
                            )}
                        </ul>
                    </div>
                )
            }

        </div>
    )
}
