import SummaryItem from "./SummaryItem";
import "../styles/chekoutsummary.css";
import AmountDetail from "./AmountDetail";
import PlaceOrder from "./PlaceOderBtn";

function CheckOutSummary() {

  


  return (
    <div className="checkout-summary">
      <h4>Order Summary</h4>
      <SummaryItem />
      <hr />
      <AmountDetail />
      <PlaceOrder />
      <p className="text-center agree-text mt-2">
        By clicking "Place Order", you agree to StoreFront's Terms of Service
        and Privacy Policy.
      </p>
    </div>
  );
}

export default CheckOutSummary;
