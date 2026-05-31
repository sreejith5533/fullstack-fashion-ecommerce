import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ordersuccess');
  }

  const btnstyle = {
    backgroundColor : "#6063EE",
    textAlign : "center",
    border: "none",
    color: "#ffff",
  }

  return (
    <button className="btn place-order-btn w-100" style={btnstyle} onClick={handleClick}>
      <span>Place Order</span>
      <i className="fa-solid fa-lock"></i>
    </button>
  );
}

export default PlaceOrder;