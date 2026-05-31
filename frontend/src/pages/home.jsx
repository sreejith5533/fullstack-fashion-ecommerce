import { main } from "@popperjs/core";
import ProductCards from "../components/ProductCards";
import Footer from "../components/Footer";
import { useOutletContext } from "react-router-dom";
import Carouselmg from "../components/Carouselmg";

function Home() {
  const {search , addToCart} = useOutletContext();

  return (
    <div>
      <Carouselmg />
      <ProductCards search={search} addToCart={addToCart} />
    </div>
  );
}

export default Home;
