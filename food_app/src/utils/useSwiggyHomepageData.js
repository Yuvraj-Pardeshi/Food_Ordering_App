
const useSwiggyHomepageData = ()=>{
    useEffect(()=>{
        fetchdata();
      },[])
    const fetchdata = async ()=>{
      const data = await fetch(SWIGGY_API)
      const json = await data.json();
      setisloading();
      setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
      setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }
}