// Source: https://stackoverflow.com/questions/45514676/react-check-if-element-is-visible-in-dom

import { useEffect, useMemo, useState } from "react"

export default function useOnScreen(ref: any) {

    const [isIntersecting, setIntersecting] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIntersecting(entry.isIntersecting)
        )
        observer.observe(ref.current)
        // Remove the observer as soon as the component is unmounted
        return () => { observer.disconnect() }
    }, [ref])
  
    return isIntersecting
  }
  