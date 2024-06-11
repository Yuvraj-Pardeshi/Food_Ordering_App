import React, { useEffect, useState } from 'react';
import RestCard from './RestCard.js';
import { SWIGGY_API } from '../utils/constants.js';
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
    // console.log(filterRestaurants);
  };

  useEffect(()=>{
      fetchdata();
    },[])
  const fetchdata = async ()=>{
    const data = await fetch(SWIGGY_API)
    const json = await data.json();
    setisloading(false);
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
          <Link to={"/restaurantinfo/" + restaurant.info.id} style={{ textDecoration: 'none', color: 'black' }} key={restaurant.info.id} ><RestCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default MainContent;