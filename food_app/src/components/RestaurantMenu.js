import { useState,useEffect } from "react"
import Shimmer_comp from "./Shimmer";
import {useParams} from "react-router-dom"
import { MENU_API } from "../utils/constants";

const RestaurantMenu = ()=>{
    const [resinfo,setresinfo] = useState(null);
    const {resId} = useParams();
    console.log(resId)
    useEffect(()=>{
        fetchMenu();
    },[])

    const fetchMenu = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=18.61610&lng=73.72860&restaurantId=" + resId)
        const json = await data.json()
        // console.log( json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
        setresinfo(json.data)
    }
    if(resinfo === null) return <Shimmer_comp />
    
    const {name,cuisines,avgRating,city} = resinfo.cards[2].card.card.info
    const {itemCards} = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    const {cards} = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR
    console.log(cards)
    // console.log(itemCards)
    return(
        <div className="menu">
            <h2>{name}</h2>
            <h3>Cuisines : {cuisines.join(", ")}</h3>
            <h4>Avg Rating : {avgRating}</h4>
            <h4>Locality : {city}</h4>
            <h2>Menu of Restaurant</h2>
            <ul>
                {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100 + " Rs/-"}</li> )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;