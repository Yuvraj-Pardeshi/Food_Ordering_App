import RestCard from "./RestCard.js"
import resobj from "../utils/data.js"
const MainContent = ()=>{
    return(
        <div className="main-content">
            <div className="search">Search</div>
            <div className="res-container">
                {/* <RestCard resData={resobj.restaurants[0]}/>
                <RestCard resData={resobj.restaurants[1]}/>
                <RestCard resData={resobj.restaurants[2]}/>
                <RestCard resData={resobj.restaurants[3]}/>
                <RestCard resData={resobj.restaurants[4]}/>
                <RestCard resData={resobj.restaurants[5]}/>
                <RestCard resData={resobj.restaurants[6]}/>
                <RestCard resData={resobj.restaurants[7]}/>
                <RestCard resData={resobj.restaurants[8]}/> */}
                {
                  resobj.restaurants.map((restaurant,index) => <RestCard key={index} resData={restaurant}/>)
                }
            </div>
        </div>
    )
}

export default MainContent;