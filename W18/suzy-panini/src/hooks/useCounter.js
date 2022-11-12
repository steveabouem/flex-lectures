import { useEffect, useState } from "react";

const useCounter = (ordersList) => {
    const [ordersCount, setOrdersCount] = useState(0);

    useEffect(() => {
        setOrdersCount(ordersList.length);
    }, [ordersList]);

    return ordersCount;
};

export default useCounter;