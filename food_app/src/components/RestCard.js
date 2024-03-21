import { FcRating } from "react-icons/fc";
import { RES_IMG_URL } from "../utils/constants";
const RestCard = (props)=>{
    const {resData} = props
    const {cloudinaryImageId,name,avgRatingString,sla,locality,cuisines} = resData?.info
      return (
          <div className="res-card">
             <div className="res-image">
                  <img src={RES_IMG_URL + cloudinaryImageId}></img>
             </div>
             <div className="text-content">
                  <div className="res-name"><h3 className="text-wrap">{name}</h3></div>
                  <div className="res-avability-time">
                      <span className="rating-icon"><FcRating size='20px' /></span>
                      <span>{avgRatingString}</span>
                      <span>{sla.slaString}</span>
                  </div>
                  <div className="cuisines text-wrap">
                      {cuisines.join(', ')}
                  </div>
                  <div className="location">
                      {locality}
                  </div>
             </div>
          </div>
      )
  }

  export default RestCard;