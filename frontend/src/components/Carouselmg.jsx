import API from "../api/axios";
import {useState,useEffect} from "react";
import "../styles/carouselitem.css"
function Carouselmg() {
  const [banners,setBanners] = useState([]);

  useEffect(()=>{
    API.get('api/banners/').then((res)=>
      setBanners((res.data))
    ).catch((err)=>{console.log(err)})
  },[]);

  return (
    <div
      id="carouselExampleAutoplaying"
      className="carousel slide mb-5"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        {banners.map((banner,index)=>(
          <div className={`carousel-item ${index===0?'active':''}`} key={index}>
            <img src={`http://127.0.0.1:8000${banner?.image}`} className="carousel-img" alt={banner?.title} />

            <div className="overlay"></div>
            <div className="banner-content">
              <p className="small-text">SEASON ARRIVAL</p>
              <h2 className="banner-heading">{banner?.title}</h2>
              <p className="banner-description">{banner?.description}</p>
              <div className="btn-div">
                <button className="shop-btn">
                    Shop Collection
                </button>
                <button className="explore-btn">
                    Explore Styles
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleAutoplaying"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carouselmg;