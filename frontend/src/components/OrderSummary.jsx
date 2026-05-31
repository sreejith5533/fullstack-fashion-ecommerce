import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function OrderSummary() {
  const { cartItems } = useCart();
  const navigate = useNavigate();

  function handleClick() {
    navigate('/checkout');
  }

  const Subtotal = cartItems.reduce((total,item)=> total + item.price *  item.qty,0);

  const esitimatedTax = Subtotal * 0.04;

  return (
    <div className="col-md-4">
      <div className="summary-card">
        <h4>Order Summary</h4>
        <hr />
        <div className="summary-item">
          <p className="heading">Subtotal</p>
          <p>&#8377; {Subtotal}.00</p>
        </div>
        <div className="summary-item">
          <p className="heading">Shipping</p>
          <p>&#8377; 0.00</p>
        </div>
        <div className="summary-item">
          <p className="heading">Estimated Tax</p>
          <p>&#8377; {esitimatedTax ?? 0 }</p>
        </div>
        <hr />
        <div className="summary-item">
          <p>Total</p>
          <h4>&#8377; {Subtotal + esitimatedTax}.00</h4>
        </div>
        <button className="checkout-btn btn" onClick={handleClick}>
          Proceed to Checkout
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
}

export default OrderSummary;
