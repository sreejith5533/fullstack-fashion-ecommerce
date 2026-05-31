import {useCart} from '../context/CartContext';


function Counter({product}) {
  const {increaseQty,decreaseQty} = useCart();

  return (
    <div className="quantity-box">
      <button className="decrement-btn" onClick={()=>decreaseQty(product.id)}>-</button>
      <span>{product?.qty || 1}</span>
      <button className="increment-btn" onClick={()=>increaseQty(product.id)}>+</button>
    </div>
  );
}


export default Counter;
