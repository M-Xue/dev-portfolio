import { useState, MutableRefObject, useEffect, useRef, useCallback } from "react";


// Hook
// T - could be any type of HTML element like: HTMLDivElement, HTMLParagraphElement and etc.
// hook returns tuple(array) with type [any, boolean]
export default function useHover<T>(): [(instance: T | null) => void, boolean] {
    const [value, setValue] = useState<boolean>(false); 
  
    const ref: any = useRef<T | null>(null);
  
    const handleMouseOver = (): void => setValue(true);
    const handleMouseOut = (): void => setValue(false);
  
    const setRef = useCallback((node: any) => {
        if (ref.current) {
            // Make sure to cleanup any events/references added to the last instance
            // ref.current.removeEventListener("mouseover", handleMouseOver);
            // ref.current.removeEventListener("mouseout", handleMouseOut);
            // node.removeEventListener("mouseover", handleMouseOver);
            // node.removeEventListener("mouseout", handleMouseOut);
        }
        
        if (node) {
          // Check if a node is actually passed. Otherwise node would be null.
          // You can now do what you need to, addEventListeners, measure, etc.
          node.addEventListener("mouseover", handleMouseOver);
          node.addEventListener("mouseout", handleMouseOut);
        }
        
        // Save a reference to the node
        ref.current = node;
    }, [])
      
    return [setRef, value];
}

