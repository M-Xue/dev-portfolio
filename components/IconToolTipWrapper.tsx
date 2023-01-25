import React, { useRef } from 'react'
import { CSSTransition, SwitchTransition } from 'react-transition-group';
import useHover from '../hooks/useHover'
import styles from '../styles/components/IconTooltipWrapper.module.css'

interface Props {
    children: JSX.Element,
    tooltip: string,
    position: "left" | "right",
}

export const IconTooltipWrapper = ({children, tooltip, position}:Props) => {
    const [iconRef, isHovered] = useHover<HTMLDivElement | null>();
    const tooltipRef = useRef<HTMLDivElement | null>(null);
    return (
        <div className={styles.iconContainer} ref={iconRef}>
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
                <div className={styles.tooltip} ref={tooltipRef} style={position === "left" ? {left: "40px"} : {right: "40px"}}>{tooltip}</div>
            </CSSTransition>
        </div>
    )
}
