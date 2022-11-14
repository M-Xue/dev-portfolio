import React from 'react'
import styles from '../styles/EducationPage.module.css'
import { motion, AnimatePresence } from "framer-motion"
import { EducationExperience } from './EducationExperience'


interface Props {
    isContentOpen: boolean,
    handleButtonClick: () => void
}

export const EducationPage = ({isContentOpen, handleButtonClick}:Props) => {
  return (

    <div
        className={styles.educationPageContainer}
    >
        <div 
            className={styles.educationPageButton}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
            <span>Read more here</span> 
        </div>
    </div>




    // <motion.div 
    //     className={styles.educationPageContainer}
    //     onClick={handleButtonClick}
    //     animate={{
    //         height: !isContentOpen ? "36px" : "initial",
    //         width: !isContentOpen ? "167px" : "100%",
    //     }}
    //     transition={{ 
    //         damping: 75,
    //         stiffness: 500,
    //         type: "spring"
    //     }}
    // >
    //     {
    //         isContentOpen ? 
    //             <motion.div
    //                 className={styles.experienceBox}

    //                 initial={{ opacity: 0, scale: 1 }}
    //                 animate={{ opacity: 1, scale: 1 }}
    //                 transition={{
    //                 duration: 1,
    //                 delay: 1,
    //                 ease: "linear"
    //                 }}
    //             >
    //                 <EducationExperience/> 
    //             </motion.div>

    //             : 
    //             <div 
    //                 className={styles.educationPageButton}
    //             >
    //                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-align-justify"><line x1="21" y1="10" x2="3" y2="10"/><line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="14" x2="3" y2="14"/><line x1="21" y1="18" x2="3" y2="18"/></svg>
    //                 <span>Read more here</span> 
    //             </div>
    //     }

    // </motion.div>
  )
}

            {/* check UI examples playlist of firefox youtube account at the bottom for exansion of div ideas */}

// * need to make this thing stop word wrapping. also need to be able to introduce it to the dom slowly rather than cramming it in because its causing the div to teleport to accomadate for its existence

// **** TURN THIS WHOLE THING INTO A COLLPSIBLE
