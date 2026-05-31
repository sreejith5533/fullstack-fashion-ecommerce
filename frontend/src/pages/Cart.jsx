import CartItems from "../components/CartItems";
import OrderSummary from "../components/OrderSummary";
import { Outlet , useOutletContext} from "react-router-dom";
import { useParams } from "react-router-dom";
import '../styles/card.css'
function Cart(){
  const { id } = useParams();
  const {cartItems} = useOutletContext();
  return(
    <div className="card card-container">
      <div className="card-heading">
        <h3>Shopping Cart</h3>
        <p>Manage your selection and proceed to checkout.</p>
      </div>
      <div className="row">
        <CartItems cartItems={cartItems} />
        <OrderSummary />
      </div>
    </div>
  )
}


export default Cart;