import React, { useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import useHover from '../hooks/useHover'
import styles from '../styles/components/IconToolTipWrapper.module.css'

// interface Props {
//     Child
// }

export const IconToolTipWrapper = ({children, tooltip}) => {
    const [iconRef, isHovered] = useHover<HTMLDivElement | null>();
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={styles.container} ref={iconRef}>
            {children}
            <CSSTransition
                in={isHovered}
                nodeRef={tooltipRef}
                timeout={600} 
                unmountOnExit
                classNames={{
                    enter: styles.tooltipEnter,
                    enterActive: styles.tooltipEnterActive,
                    enterDone: styles.tooltipEnterDone,
                    exit: styles.tooltipExit,
                    exitActive: styles.tooltipExitActive
                }}
            >
                <div className={styles.tooltip} ref={tooltipRef}>{tooltip}</div>
            </CSSTransition>
        </div>
    )
}
