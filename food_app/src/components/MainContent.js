import React, { useEffect, useState } from 'react';
import RestCard from './RestCard.js';
import Shimmer_comp from './Shimmer.js';
import {Link} from 'react-router-dom'
import useonlineStatus from '../utils/useonlineStatus.js';
const MainContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestaurants, setFilterRestaurants] = useState([]);
  const [isloading,setisloading] = useState(true);
  const [searchtext,setSearchText] = useState("");

  const handleFilterTopRated = () => {
    const filteredRestaurants = restaurants.filter(
      (item) => item.info.avgRating > 4
    );
    setFilterRestaurants(filteredRestaurants);
    console.log(filterRestaurants);
  };

  useEffect(()=>{
      fetchdata();
    },[])
  const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    setisloading();
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setFilterRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  const onlineStatus = useonlineStatus();

  if(onlineStatus === false){
    return(
      <h1>Look like you're offline!! Please check your Internet conection</h1>
    )
  }

  return isloading ? <Shimmer_comp /> : (
    <div className="main-content">
      <div className="filter">
        <div className="search">
        <input type="text" className='search-box' value={searchtext} 
          onChange={(e)=>{setSearchText(e.target.value)}}
         />
        <button className="search-btn"
          onClick={()=>{
            const filterbysearch = restaurants.filter(
              (item) => item.info.name.toLowerCase().includes(searchtext.toLowerCase())
            );
            setFilterRestaurants(filterbysearch)
          }}
        >Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated 
        </button>
      </div>
      <div className="res-container">
        {filterRestaurants.map((restaurant, index) => (
          <Link to={"/restaurantinfo/" + restaurant.info.id} style={{ textDecoration: 'none', color: 'black' }}><RestCard key={index} resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default MainContent;