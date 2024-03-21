import React, { useEffect, useState } from 'react';
import RestCard from './RestCard.js';
import Shimmer_comp from './Shimmer.js';

const MainContent = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isloading,setisloading] = useState(true);

  const handleFilterTopRated = () => {
    const filteredRestaurants = restaurants.filter(
      (item) => item.info.avgRating > 4
    );
    setRestaurants(filteredRestaurants);
  };

  useEffect(()=>{
      fetchdata();
    },[])
  const fetchdata = async ()=>{
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")

    const json = await data.json();
    setisloading(false);
    setRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  // useEffect(()=>{
  //     fetchdata2();
  //   },[])
  // const fetchdata2 = async ()=>{
  //   const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6126255&lng=77.04108959999999&offset=$31&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING")

  //   const json = await data.json();
  //   console.log(json)
  // }

  // Example POST method implementation:
// async function postData(url = "", data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: "POST", // *GET, POST, PUT, DELETE, etc.
//     mode: "cors", // no-cors, *cors, same-origin
//     cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: "same-origin", // include, *same-origin, omit
//     headers: {
//       "Content-Type": "application/json",
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     body: JSON.stringify(data), // body data type must match "Content-Type" header
//   });
//   return response.json(); // parses JSON response into native JavaScript objects
// }

// postData("https://example.com/answer", { answer: 42 }).then((data) => {
//   console.log(data); // JSON data parsed by `data.json()` call
// });
 

  return isloading ? <Shimmer_comp /> : (
    <div className="main-content">
      <div className="filter">
        <div className="search">
        <input type="text" className='search-box'/>
        <button className="search-btn">Search</button>
        </div>
        <button className="filter-btn" onClick={handleFilterTopRated}>
          Top Rated 
        </button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant, index) => (
          <RestCard key={index} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default MainContent;
