import { useEffect, useState } from "react";
import { MENU_API } from "../utils/constants";

const useRestaurantMenu = (resId)=>{
    const [resinfo,setresinfo] = useState(null)
    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async()=>{
        const data = await fetch(MENU_API+resId);
        const json = await data.json()
        setresinfo(json.data);
    }

    return resinfo;
}

export default useRestaurantMenu;