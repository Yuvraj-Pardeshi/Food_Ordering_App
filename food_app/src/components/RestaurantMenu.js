import Shimmer_comp from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
import ResCategories from "./RestaurantCategories";
import { useState } from "react";
const RestaurantMenu = ()=>{

    const {resId} = useParams();
    const resinfo = useRestaurantMenu(resId);
    const [showIndex,setshowIndex] = useState(null);
    if(resinfo === null) return <Shimmer_comp />
    
    const {name,cuisines,avgRating,city,costForTwoMessage} = resinfo.cards[2].card.card.info
    const {itemCards} = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    // console.log(resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards)

    const categories = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=> c?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories)

    return(
        <div className="text-center">
            <h2 className="font-bold text-2xl mb-2">{name}</h2>
            <h3 className="font-bold">Cuisines : {cuisines.join(", ")} - {costForTwoMessage}</h3>
            <div className="flex justify-between w-2/12 mx-auto font-bold">
                <span><h4>Avg Rating : {avgRating}</h4></span>
                <span><h4>Locality : {city}</h4></span>
            </div>  
            {/* Categories accordion */}
            {categories.map((category,index)=>(
                <ResCategories 
                key={index} 
                cdata={category?.card?.card} 
                showItems={index === showIndex ? true : false}
                setshowIndex = {()=>{setshowIndex(index)}}
                />
            ))}
        </div>
    )
}
export default RestaurantMenu;