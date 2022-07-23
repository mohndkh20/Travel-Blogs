
import React from "react";



export const Home = () => {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://www.travelinsurance.ca/en_CA/_jcr_content/root/parsys/stage/stageimage.img.82.3360.jpeg/1628613313304/image-of-a-group-of-travellers-cheering-after-having-reached--the-summit-of-a-mountain-s.jpeg" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }}/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/01/iata-travel-pass-passaporto-sanitario-per-volare-in-aereo.jpg?v=419953" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}


export default Home;











    // <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
    //              <div className="carousel-inner">
    //                  <div className="carousel-item active">
    //                          <img src="https://www.travelinsurance.ca/en_CA/_jcr_content/root/parsys/stage/stageimage.img.82.3360.jpeg/1628613313304/image-of-a-group-of-travellers-cheering-after-having-reached--the-summit-of-a-mountain-s.jpeg" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }}/>
    //                  </div>
    //                  <div className="carousel-item">
    //                         <img src="https://static2-viaggi.corriereobjects.it/wp-content/uploads/2021/01/iata-travel-pass-passaporto-sanitario-per-volare-in-aereo.jpg?v=419953" className="d-block w-100" alt="..." style={{ width: "1500px", height: "730px" }}/>
    //                  </div>
    //         </div>
    //          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    //              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    //              <span className="visually-hidden">Previous</span>
    //          </button>
    //         <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    //              <span className="carousel-control-next-icon" aria-hidden="true"></span>
    //              <span className="visually-hidden">Next</span>
    //         </button>
    //         </div>