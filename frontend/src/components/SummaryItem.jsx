import "../styles/summaryItem.css";
import { useCart } from "../context/CartContext";
function SummaryItem() {
  const { cartItems } = useCart();
  return (
    <>
      <div className="row g-3">
        {cartItems.map((product) => (
          <div className="col-12" key={product.id}>
            <div className="summary-item-checkout">
              <img
                className="product-img"
                src={`http://127.0.0.1:8000${product?.image}`}
                alt="item-img"
              />
              <div className="product-detail">
                <div className="name-detail">
                  <p className="product-name">{product.name}</p>
                  <p className="qty-text">
                    Qty: <span className="quantity">{product.qty}</span>
                  </p>
                </div>
                <p className="product-price">&#8377;{product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SummaryItem;
