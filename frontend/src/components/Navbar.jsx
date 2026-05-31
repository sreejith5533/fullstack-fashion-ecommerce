import "../styles/navbar.css";
import { NavLink, useLocation ,useNavigate } from "react-router-dom";

function Navbar({setSearch}) {
  const lcoation = useLocation();
  const navigate = useNavigate();
  


  function handleClick(e) {
    e.preventDefault();
    navigate('/cart');
  }


  function handleInput(e){
    const value = e.target.value;
    setSearch(value);
  }

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
        <div className="container">
          <NavLink className="navbar-brand logo-text" to="/">
            StoreFront
          </NavLink>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Home
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/viewproduct/1"
                  className={({ isActive }) =>{
                    const isShopActive = isActive || location.pathname.startsWith("/viewproduct/");
                    return isShopActive ? "nav-link active" : "nav-link";
                  }
                  }
                >
                  Shop
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink
                  to="/cart"
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  Cart
                </NavLink>
              </li>
            </ul>

            <div className="d-flex form-div">
              <form
                className={`d-flex ${lcoation.pathname !== "/" ? "invisible" : ""}`}
                role="search"
              >
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  onChange={handleInput}
                />
                <button className="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>

              <div className="icon-div">
                <button className="btn" onClick={handleClick}>
                  <i className="fa-solid fa-cart-shopping"></i>
                </button>
                <button className="user-btn">
                  <i className="fa-regular fa-user"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
