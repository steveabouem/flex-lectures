import { useState } from "react";

function PizzaToppings() {
    const [topingList, setToppingList] = useState(['Cheese']);
    const [toping, setTopping] = useState('');

    function updateToping(event) {
        setTopping(event.target.value);
    }

    function updateTopingList() {
        setToppingList([...topingList, toping]);
        // setToppings(newTOpingsValues); //DOES NOT UPDATE
    }

    return (
        <div>
            <label>Add a Toping</label>
            <input type="text" value={toping} onChange={updateToping} />
            <button onClick={updateTopingList} >Add toping</button>
            <ul>
                {topingList.map((topping, index) => (
                    <li key={index}>{topping}</li>
                ))}
            </ul>
        </div>
    );
}

export default PizzaToppings;