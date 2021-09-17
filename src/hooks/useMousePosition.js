import { useState, useEffect } from 'react'


const useMousePosition = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    useEffect(() => {
        const handleMouseMove = (e) => {
            setPosition({
                x: e.pageX,
                y: e.pageY
            })
        }
        const cleanMouseEventListener = () => {
            document.removeEventListener('mousemove', handleMouseMove)
        }
        document.addEventListener('mousemove', handleMouseMove)
        return cleanMouseEventListener;

    }, [])
    return position;
}


export { useMousePosition as default }
