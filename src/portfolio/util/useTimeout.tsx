import { useEffect, useRef, type RefObject } from "react";


type TimeoutReference = ReturnType<typeof setTimeout> | null

function useTimeout(callback: () => void, delay: number) {

    const timeoutRef: RefObject<TimeoutReference> = useRef<TimeoutReference>(null);
    const savedCallback = useRef<() => void>(callback);

    useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    useEffect(() => {
        const onComplete = () => savedCallback.current();

        timeoutRef.current = window.setTimeout(onComplete, delay);

        return () => { 
            if(timeoutRef.current !== null)
                window.clearTimeout(timeoutRef.current); 
        }
    }, [delay]);

    return timeoutRef;
}

export default useTimeout;