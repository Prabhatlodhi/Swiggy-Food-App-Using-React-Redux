import { useDispatch, useSelector } from "react-redux";
import ItemsInCarts from "./ItemsInCarts";
import { clearCart } from "../Redux/CartSlice";
// import Shimmer from "./Shimmer";
//card.info.name

const CartPage = () => {
  const cartItems = useSelector((store) => store.cart.items);
  
const dispatch = useDispatch();

//   const gg = cartItems[1]?.card?.info;[0].card.info.name
   console.log(cartItems)

   const handleClearCart = ()=>{
    dispatch(clearCart())
   }

  return (
    <div className="checkoutitem">
      <h1>CartItems - {cartItems.length} </h1>
       <button className="clearAll" onClick={()=>handleClearCart()}>Clear Cart</button>
        {
            cartItems.map((itemInsideCart)=>{
               return <ItemsInCarts  {...itemInsideCart.card.info} />
            })
        }
      
       
    </div>
  );
};

export default CartPage;

//[0].card.info.name