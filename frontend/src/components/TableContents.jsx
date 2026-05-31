import { useState } from "react";

function TableContents(){
  const [activeLink , setActiveLink] = useState("informartion");
  return(
    <div className="table-contents card">
      <p className="card-title">Table of Contents</p>
      <ul className="table-contents-list">
        <li>
          <a href="#information" className={activeLink === "informartion" ? "active" : ""} onClick={() => setActiveLink("informartion")}>Information Collection</a>
        </li>
        <li>
          <a href="#cookies" className={activeLink === "cookies" ? "active" : ""} onClick={() => setActiveLink("cookies")}>Cookies</a>
        </li>
        <li>
          <a href="#payment" className={activeLink === "payment" ? "active" : ""} onClick={() => setActiveLink("payment")}>Payment</a>
        </li>
        <li >
          <a href="#data" className={activeLink === "data" ? "active" : ""} onClick={() => setActiveLink("data")}>User Data Protection</a>
        </li>
        <li>
          <a href="#thrid-party" className={activeLink === "thrid-party" ? "active" : ""} onClick={() => setActiveLink("thrid-party")}>Third Party Services</a>
        </li>
      </ul>
    </div> 
  )
}


export default TableContents;