import "../styles/productCard.css";
import API from "../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

function ProductCards({ search }) {
  const navigate = useNavigate();

  const { addToCart } = useCart();

  const [products, setProducts] = useState([]);

  useEffect(() => {
    API.get("/api/products/")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (id) => {
    navigate(`/viewproduct/${id}`);
    console.log(id);
  };

  const handleAddToCart = async (product) => {
    try {
      await API.post("api/cart/add/", {
        product_id: product.id,
        quantity: 1,
      });

      addToCart({ ...product, qty: 1 });
      navigate("/cart");
    } catch (err) {
      console.log(err);
    }
  };

  const filterProducts = search
    ? products.filter((product) =>
        product.name.toLowerCase().includes(search.toLowerCase()),
      )
    : products;

  return (
    <div className="row g-4">
      {filterProducts.map((product) => (
        <div className="col-12 col-sm-6  col-lg-4 col-xl-3" key={product.id}>
          <div className="card product-card h-100">
            <span className="badge bg-danger product-badge">New</span>
            <img
              src={`http://127.0.0.1:8000${product.image}`}
              className="card-img-top product-card-image"
              alt="product-name"
            />
            <div className="card-body card-body-div">
              <h4 className="card-text product-name product-title">
                {product.name}
              </h4>
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text product-description">
                {product.short_description}
              </p>
              <div className="rating mb-2">
                {"★".repeat(product.ratings)}
                {"☆".repeat(5 - product.ratings)}
                <span>({product.ratings})</span>
              </div>
              <h4 className="price">&#x20B9; {product.price}</h4>

              <div className="row">
                <div className="col-6">
                  <button
                    className="btn btn-outline-secondary w-100 mb-2 view-details-btn"
                    onClick={() => handleClick(product.id)}
                  >
                    View Details
                  </button>
                </div>
                <div className="col-6">
                  <button
                    className="btn btn-success w-100 mt-auto add-to-cart-btn"
                    onClick={() => handleAddToCart(product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCards;
