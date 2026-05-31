import { createContext ,useContext ,useEffect,useState } from "react";

const CartContext = createContext();


export  function CartProvider({children}){
  const [cartItems, setCartItems] = useState(()=>{
    const storedCartItem = localStorage.getItem("cartItem");
    return storedCartItem ? JSON.parse(storedCartItem) : [];
  });


  useEffect(()=>{
    localStorage.setItem("cartItem",JSON.stringify(cartItems));
  },[cartItems]);


  function addToCart(product){
    setCartItems((prev)=>{
      const exitingItem = prev.find((item)=>item.id === product.id);

      if (exitingItem){
        return prev.map((item)=> item.id === product.id ? {...item,qty : item.qty + product.qty} : item);
      }else{
        return [...prev,{...product,qty : product.qty || 1}];
      }
    })
  }




  const increaseQty = (id)=>{
    setCartItems((prev)=> prev.map((item)=> item.id === id ? {...item,qty : item.qty + 1} : item));
  }

  const decreaseQty = (id)=>{
    setCartItems((prev)=>prev.map((item)=>item.id === id && item.qty > 1 ? {...item,qty : item.qty - 1} : item));
  };

  const deleteItem = (id)=>{
    setCartItems((prev)=>prev.filter((item)=>item.id !== id));    
  }

  return(
    <CartContext.Provider value={{cartItems,increaseQty,decreaseQty,addToCart,deleteItem}}
    >
      {children}
    </CartContext.Provider>
  )
}



export function useCart() {
  return useContext(CartContext);
}