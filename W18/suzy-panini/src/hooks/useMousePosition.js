import { useEffect, useState } from "react";

const useMousePosition = () => {
    const [current, setCurrent] = useState({x: 0 , y: 0 });

    useEffect(() => {
        const onMouseMove = ({clientX, clientY}) => {
            setCurrent({x: clientX, y: clientY});
        };

        document.addEventListener('mousemove', onMouseMove);

        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return current;
};

export default useMousePosition;