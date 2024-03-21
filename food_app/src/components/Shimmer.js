
const Shimmer = ()=>{
      return (
            <div className="rescard-skeloton">
            <div className="res-image-skeloton loading-img"></div>
            <div className="text-content-skeloton">
                <div className="skeleton-heading loading-img"></div>
                    <div className="logo-del-time-skeleton">
                    <span className="skeleton-logo loading-img"></span>
                    <span className="skeleton-del loading-img"></span>
                    </div>
                <div className="skeleton-cuisines loading-img"></div>
                <div className="skeleton-location loading-img"></div>
            </div>
          </div>
      )
  }

  const Shimmer_comp = ()=>{
    return (
        <div className="skeleton-container">
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        <Shimmer />
        </div>
    )
  }

  export default Shimmer_comp;