import { use } from "react";
import { useEffect, useState } from "react";
import API from "../api/axios";
import "../styles/cardItems.css";
import Counter from "./counter";
import { useCart } from "../context/CartContext";

function CartItems() {
  const [products, setProduct] = useState([]);

  const { cartItems, deleteItem } = useCart();

  return (
    <div className="col-md-8">
      <div className="row g-3">
        {cartItems.map((product) => (
          <div className="col-12" key={product.id}>
            <div className="cart-card">
              <img
                src={`http://127.0.0.1:8000${product?.image}`}
                className="cart-img"
              />

              <div className="cart-detail">
                <div className="cart-info">
                  <h5>{product?.name}</h5>
                  <p>Silver / White Strap</p>
                </div>

                <Counter product={product} />

                <h4 className="product-detail-price">&#8377;{product?.price}</h4>

                <button
                  className="delete-btn"
                  onClick={() => deleteItem(product.id)}
                >
                  <i className="fa-solid fa-trash-can"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartItems;
