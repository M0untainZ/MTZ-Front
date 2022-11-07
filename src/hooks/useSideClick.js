import {useEffect} from "react"

const useSideClick = (ref, callback) => {
    useEffect(() => {
        const onOutClick = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callback?.();
            }
        };
        window.addEventListener("mousedown", onOutClick);
        return () => window.removeEventListener("mousedown", onOutClick);
    }, [ref, callback])
}

export default useSideClick;