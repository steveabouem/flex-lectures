import { useState } from "react";
import useCounter from "../hooks/useCounter";
import useInput from "../hooks/useInput";
import useKeypress from "../hooks/useKeypress";
import useMousePosition from "../hooks/useMousePosition";
import useDocumentTitle from "./useDocumentTitle";

const Orders = () => {
    const [ordersList, setOrdersList] = useState([]);

    useDocumentTitle();
    const ordersCount = useCounter(ordersList);
    const { x, y } = useMousePosition();
    const customer = useInput('');
    const order = useInput('');
    const invalidMessage = useKeypress();

    const addOrder = () => {
        const newOrder = {customer: customer.value, order: order.value};
        setOrdersList([...ordersList, newOrder]);
    };

    return (
        <div className="orders-form">
            <div id="cursor" style={{top: `${y}px`, left: `${x}px` }}/>
            Total orders: {ordersCount}
            <h3>{invalidMessage}</h3>
            <div className="order-fields">
                <div>
                    <label>Customer</label>
                    <input name="customer" value={customer.value} onChange={customer.onChange} />
                </div>

                <div>
                    <label>Order</label>
                    <input name="order" value={order.value} onChange={order.onChange} />
                </div>

            </div>
            <button onClick={addOrder}>Add Order</button>

            <div className="orders-container">
                {ordersList.map(({ customer, order }, index) => (
                    <div className="order-card" key={index}>
                        <h3>Order for: {customer}</h3>
                        <p>{order}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Orders;