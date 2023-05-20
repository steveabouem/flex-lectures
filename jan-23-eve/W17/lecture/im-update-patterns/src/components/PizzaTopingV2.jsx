import { useState } from "react";

function PizzaTOppingsV2({ location, updateItem }) {
    const [pizza, setPizza] = useState({
        currentToping: '',
        topingsList: ['Cheese'],
    });

    function updateTopingsList(event) {
        event.preventDefault();
        setPizza({...pizza, topingsList: [...pizza.topingsList, pizza.currentToping ]});
    };

    return (
        <>
            <h3>Location: {location}</h3>
            <form onSubmit={updateTopingsList}>
                <label>Add a Toping</label>
                <input type="text" value={pizza.currentToping} onChange={(e) => updateItem(e, pizza, setPizza)} />
                <button type="submit">Add toping</button>
                <ul>
                    {pizza.topingsList.map((topping, index) => (
                        <li key={index}>{topping}</li>
                    ))}
                </ul>
            </form>
        </>
    );
}

export default  PizzaTOppingsV2;