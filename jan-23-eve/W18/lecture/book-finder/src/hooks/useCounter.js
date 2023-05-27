import { useEffect, useState } from "react";

const useCounter = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  }, [time]);

  return time;
}

export default useCounter;