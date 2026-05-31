import "../styles/ordersuccess.css";
import { generateOrderNumber, getDeliveryDate } from "../utils/orderUtils";
import { useState } from "react";

function OrderSuccess() {
  const [orderNumber] = useState(generateOrderNumber());
  const [deliveryDate] = useState(getDeliveryDate());

  return (
    <div className="main">
      <div className="success-div">
        <div className="outer-circle">
          <div className="cricle">
            <i className="fa-solid fa-check"></i>
          </div>
        </div>
        <h3>Order Placed Successfully🎉</h3>
        <p className="order-text">
          Thank you for your purchase.We've received your order and will notify
          you as your luxuryitems are on the way.
        </p>
        <div className="row">
          <div className="col-md-6">
            <div className="order-number">
              <p>Order Number</p>
              <h4>{orderNumber}</h4>
            </div>
          </div>
          <div className="col-md-6">
            <div className="delivery-date">
              <p>Estimated Delivery</p>
              <h5 className="date">{deliveryDate}</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccess;
