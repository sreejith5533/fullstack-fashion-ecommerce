import API from "../api/axios";
import { useParams,useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import "../styles/productDetails.css";
import { useCart } from "../context/CartContext";

function ProductDetail() {
  const { addToCart } = useCart();
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);




  useEffect(() => {
    API.get(`/api/products/${id}/`)
      .then((res) => {
        setProduct(res.data);
      })  
      .catch((err) => {
        console.error(err);
      });
  }, [id]);


  const handleClick = async ()=>{
    try{
      await API.post('/api/cart/add/',{
        product_id : product.id,
        quantity : 1
      });

      addToCart({...product,qty : qty});
      navigate("/cart");
    }catch(err){
      console.log(err);
    }
  }

  return (
    <>
      {product ? (
        <div className="row g-3 mt-5">
          <div className="col-md-6">
            <div className="prouct-img-div">
              <img
              src={`http://127.0.0.1:8000${product?.image}`}
              alt="product-img"
              className="product-image"
            />
            </div>
          </div>
          <div className="col-md-6">
            <div className="product-details">
              <div className="d-flex justify-content-start">
                <span className="arival-title">New Arrivals</span>
              </div>
              <h1 className="product-title">{product?.name}</h1>
              <h2 className="product-amount">&#8377; {product?.price}</h2>
              <h4 className="description-heading">Description</h4>
              <p className="product-description product-detail-description">{product?.description}</p>
              <div className="d-flex btn-div align-items-center">
                <div className="quantity-div">
                  <button className="icon" onClick={()=>{
                    if (qty > 1){
                      setQty(qty - 1)
                    }
                  }}>
                    <i className="fa-solid fa-minus"></i>
                  </button>
                  <span className="nbr-quantity">{qty}</span>
                  <button className="icon" onClick={()=>{
                    setQty(qty+1)
                  }}>
                    <i className="fa-solid fa-plus"></i>
                  </button>
                </div>
                <button className="add-to-cart-btn btn w-100" onClick={handleClick}>
                  <i className="fa-solid fa-bag-shopping"></i>
                  Add to Cart
                </button>
              </div>
              <div className="row mt-3">
                <div className="col-md-6">
                  <div className="delivery-div">
                    <i className="fa-solid fa-truck"></i>
                    <div className="text-div">
                      <p>Free Delivery</p>
                      <small>Orders over $100</small>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="protection-div">
                    <i className="fa-solid fa-shield-halved"></i>
                    <div className="text-div">
                      <p>2 Years Warranty</p>
                      <small>Extended protection</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="noproduct-found">
          <h4>Product Not Available</h4>
          <p>The product you are trying to view is currently unavailable or may have been removed.</p>
        </div>
      )}
      {product?.specifications && (
        <div className="row g-3 mt-3">
          <h4 className="description-heading mb-3">Technical Specifications</h4>
          {product.specifications.map((spec,index)=>(
            <div className="col-md-4" key={index}>
              <div className="spec-card p-3 border rounded h-100">
                <h5 className="spec-name">{spec.heading}</h5>
                <p className="spec-description">{spec.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default ProductDetail;
