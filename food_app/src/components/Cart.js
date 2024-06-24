import { useDispatch, useSelector } from "react-redux";
import CategoryItemList from "./CategoryItemList";
import { clearCart } from "../utils/redux/cartSlice";

const Cart = ()=>{

    const cartItems = useSelector((store)=> store.cart.items)

    const dispatch = useDispatch();

    const handleClearCart = ()=>{
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-5 p-5">
            <h1 className="text-2xl font-bold">Cart</h1>
            <div className=" w-6/12 m-auto">
                <button className="m-5 p-2 bg-black text-white rounded-lg"
                 onClick={handleClearCart}>Clear Cart</button>
                {cartItems.length === 0 && 
                    <div>
                        <img src="https://cdn-icons-png.flaticon.com/512/11329/11329060.png" alt="empty cart" className="w-5/12 m-auto"/>
                        <h3>Your Cart is Empty!!!, Please go to home page to add some items</h3>
                    </div>
                }
                <CategoryItemList items={cartItems}/>
            </div>
        </div>
    )
}
export default Cart;