import { useState } from 'react';


const Cart2 = () => {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: 'product1', quantity: 1 },
      { id: 2, title: 'product2', quantity: 1 },
    ],
  });

  const handleClick = () => {
    setCart({...cart, items: cart.items.map(item => item.id === 1 ? {...item, quantity: item.quantity + 1} : item)})
  }
  return <div>
    <ul>
      {cart.items.map(item => <li key={item.id}>ID:{item.id} Name:{item.title} Quantity:{item.quantity}</li>)}
    </ul>
    <button onClick={handleClick}>add 1 more of item 1</button>
  </div>;
};

export default Cart2;
