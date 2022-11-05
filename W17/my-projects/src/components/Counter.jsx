import { useEffect, useState } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            // setCount(count + 1); // 0 + 1
            // setCount(count + 1); // 0 + 1
            // setCount(count + 1); // 0 + 1
            // setCount(count + 1); // 0 + 1
            // setCount(count + 1); // 0 + 1

            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
            setCount((prevCount) => prevCount + 1);
        }, 1000);
    }, [count]);

    return (
        <div>Counting up: {count}</div>
    );
};

export default Counter;