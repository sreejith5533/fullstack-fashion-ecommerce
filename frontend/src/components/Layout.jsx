import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import "../styles/layout.css"

function Layout(){
  const [search,setSearch] = useState('');

  return(
    <div className="app">
      <Navbar setSearch={setSearch} />
      <main className="container-fluid">
        <Outlet context={{search}} />
      </main>
      <Footer />
    </div>
  )
}


export default Layout;
