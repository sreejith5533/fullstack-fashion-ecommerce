import "../styles/checkout.css";

import ShoppingForm from "../components/ShoppingForm";
import Payment from "../components/Payement";
import CheckOutSummary from "../components/CheckoutSummary";

function Checkout() {
  return (
    <div className="checkout-page">
      <div className="chekout-heading">
        <h3 className="heading">Checkout</h3>
        <p>Review your order and shipping details to complete the purchase.</p>
      </div>
      <div className="row">
        <div className="col-md-7">
          <div className="row g-4">
            <div className="col-md-12">
              <ShoppingForm />
            </div>
            <div className="col-md-12">
              <Payment />
            </div>
          </div>
        </div>
        <div className="col-md-5">
          <CheckOutSummary />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
