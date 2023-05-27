import { useEffect, useState } from "react";

const useMousePosition = () => {
  const [coordinates, setCoordinates] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCoordinates({ x: e.clientX, y: e.clientY });
    }
    // assign the current mouse's position to my state propertry
    document.addEventListener('mousemove', (e) => {
      handleMouseMove(e);
    });

    return () => {
      document.removeEventListener('mousemove');
    }
  }, []);
  return { x: coordinates.x, y: coordinates.y };
}

export default useMousePosition;