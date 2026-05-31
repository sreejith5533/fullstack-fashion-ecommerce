import "../styles/checkout.css";
import { useCart } from "../context/CartContext";

function AmountDetail() {
  const {cartItems} = useCart();


  const subTotal = cartItems.reduce((total,item)=> total + item.price *  item.qty,0);


  const esitimatedTax = (subTotal * 0.04).toFixed(2);

  return (
    <div>
      <div>
        <div className="amount-row">
          <p className="amount-heading">Subtotal</p>
          <p>&#8377; {subTotal}.00</p>
        </div>
        <div className="amount-row">
          <p className="amount-heading">Shipping</p>
          <p>&#8377; 0</p>
        </div>
        <div className="amount-row">
          <p className="amount-heading">Estimated Tax</p>
          <p>&#8377; {esitimatedTax ?? 0 }</p>
        </div>
      </div>
      <hr />
      <div>
        <div className="amount-row">
          <h4 className="amount-heading">Total</h4>
          <h4 className="t-amount">&#8377; 809</h4>
        </div>
      </div>
    </div>
  );
}

export default AmountDetail;
