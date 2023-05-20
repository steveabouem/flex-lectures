import React from 'react';
import ReactDOM from 'react-dom/client';
import HelloWorld from './components/HelloWorld';
import Counter from './components/Counter';
import PizzaToppings from './components/PizzaTopings';
import PizzaTOppingsV2 from './components/PizzaTopingV2';

function updateItem(event, state, callback) {
  callback({ ...state, currentToping: event.target.value });

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <h1>Update Patterns: primitive vs object/array</h1>
    <h2>Basic string</h2>
    <HelloWorld />
    <h2>State handling of primitive (number)</h2>
    <Counter />
    <h2>State handling of array</h2>
    <PizzaToppings />
    <h2>State handling of object (and props passing)</h2>
    <PizzaTOppingsV2 location="Vancouver" updateItem={updateItem} />
    </div>
  </React.StrictMode>
);
