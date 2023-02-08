import React from "react";
function Banner(){
    return(
        <>
        <div className="">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">Name
    <div className="carousel-item active">
      <img src="https://i.ytimg.com/vi/D5cCrVEoW6o/maxresdefault.jpg" className="d-block w-100" height="500px" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="https://image.freepik.com/free-vector/colourful-shopping-flat-banner-your-business-web-sites-etc-quality-design-illustrations-elements-concept-online-shopping-buy-online-delivery_207954-482.jpg" height="500px" className="d-block w-100" alt="... "/>
    </div>
    
    <div className="carousel-item">
      <img src="https://pbs.twimg.com/media/Dgk97P5U8AA9zmJ.jpg" className="d-block w-100" height="500px" alt="... "/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
        </>
    )
}
export default Banner;