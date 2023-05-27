import useMousePosition from "../hooks/useMousePosition"

const CustomMouse = () => {
  const coordinates = useMousePosition();
  return <div id="custom-mouse" style={{ left: coordinates.x, top: coordinates.y }}/>;
}

export default CustomMouse