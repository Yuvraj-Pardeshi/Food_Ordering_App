import Shimmer_comp from "./Shimmer";
import {useParams} from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"
const RestaurantMenu = ()=>{

    const {resId} = useParams();
    const resinfo = useRestaurantMenu(resId);
    if(resinfo === null) return <Shimmer_comp />
    
    const {name,cuisines,avgRating,city} = resinfo.cards[2].card.card.info
    const {itemCards} = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    const {cards} = resinfo.cards[4].groupedCard.cardGroupMap.REGULAR
    console.log(cards)
    return(
        <div className="menu">
            <h2>{name}</h2>
            <h3>Cuisines : {cuisines.join(", ")}</h3>
            <h4>Avg Rating : {avgRating}</h4>
            <h4>Locality : {city}</h4>
            <h2>Menu of Restaurant</h2>
            <ul>
                {itemCards.map((item)=> <li key={item.card.info.id}>{item.card.info.name} - {item.card.info.price / 100 + " Rs/-" || item.card.info.defaultPrice / 100 + " Rs/-"}</li> )}
            </ul>
        </div>
    )
}
export default RestaurantMenu;