import { useState } from 'react';

const Pizza = () => {
  const [pizza, setPizza] = useState({
    name: 'spicy pepperoni',
    toppings: ['mushrooms']
  });

  const handleClick = () => {
    setPizza({...pizza, toppings: [...pizza.toppings, 'pineapple']})
  }

  return (
    <div>
      <p>show pizza: {pizza.name}</p>
    <ul>
      {pizza.toppings.map(toppings => <li key={toppings}>{toppings}</li>)}
    </ul>
    <button onClick={handleClick}>add pineapple</button>
    </div>
  )
}

export default Pizza