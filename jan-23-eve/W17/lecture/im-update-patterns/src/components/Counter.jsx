import { useState } from "react"

function Counter() {
    const [countValue, setCountValue] = useState(0);

    function updateCount(val) {
        setCountValue(val + 1);
    }

    return (
        <div>
            {countValue}<br />
            <button onClick={() => updateCount(countValue)}>Increment</button>
        </div>
    );
}

export default Counter