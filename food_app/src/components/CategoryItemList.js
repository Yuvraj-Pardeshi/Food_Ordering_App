import { useDispatch } from "react-redux";
import { RES_IMG_URL } from "../utils/constants";
import { addItems } from "../utils/redux/cartSlice";
const CategoryItemList = ({items})=>{
    // console.log(items)
    const dispatch = useDispatch()
    const handleAddItem = (item)=>{
        // dispatch action
        dispatch(addItems(item))
    }
    return(
        <div>
            {items.map((item) => (
                <div key={item?.card?.info?.id} className="p-2 m-2 border-b-2 border-gray-400 flex justify-between">
                    <div className="Categoryitemsdetails w-9/12 p-2">
                        <div className="py-2 font-bold">
                            <span>{item?.card?.info?.name}</span>
                            <span> - ₹ {item?.card?.info?.price / 100 ? item?.card?.info?.price / 100 : item?.card?.info?.defaultPrice / 100}/-</span>
                        </div>
                        <div className="text-sm text-wrap">
                            {item?.card?.info?.description}
                        </div>
                    </div>
                    <div className="w-3/12 p-2 relative">
                        <div className="absolute bottom-0 left-12">
                            <button className="px-6 py-1 bg-black text-white rounded-2xl shadow-lg" onClick={() => handleAddItem(item)}>
                            Add +</button>
                        </div>
                        <img src={RES_IMG_URL + item?.card?.info?.imageId} 
                        className="rounded-2xl w-full shadow-lg"/>
                    </div>
                </div>
            ))}
        </div>
    )
}
export default CategoryItemList;