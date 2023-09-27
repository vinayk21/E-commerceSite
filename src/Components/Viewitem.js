import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { UserContext } from "../App";

const Viewitem = () => {
  const [Viewitemdata, setViewitemdata] = useState();
  const [Onumber, setOnumber] = useState(1);
  const user = useContext(UserContext);
  
console.log("user",user);
  let locations = useLocation();
  useEffect(() => {
    let viewdata = locations.state.sta;
    // console.log("vv",v);
    setViewitemdata([viewdata]);
  }, []);
  console.log("vv",Viewitemdata);
  const incrementHandler =()=>{
    setOnumber((Onumber+1));
  }
  const decrimentHandler =()=>{
    setOnumber((Onumber-1));
  }

  return (
    <>
      {Viewitemdata?.map((ele) => {
        return (
          <>
            <div
              class="card "
              style={{
                width: "800px",
                margin: "100px 100px 100px 400px",
                height: "auto",
              }}
            >
              <div
                id="carouselExampleControls"
                class="carousel slide"
                data-bs-ride="carousel"
              >
                <div
                  class="carousel-inner"
                  style={{ width: "auto", height: "300px" }}
                >
                  <div class="carousel-item active">
                    <img
                      src={ele.images[0]}
                      class="d-block w-100"
                      alt="..."
                      style={{ width: "auto", height: "300px" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={ele.images[1]}
                      class="d-block w-100"
                      alt="..."
                      style={{ width: "auto", height: "300px" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={ele.images[3]}
                      class="d-block w-100"
                      alt="..."
                      style={{ width: "auto", height: "300px" }}
                    />
                  </div>
                  <div class="carousel-item">
                    <img
                      src={ele.images[4]}
                      class="d-block w-100"
                      alt="..."
                      style={{ width: "auto", height: "300px" }}
                    />
                  </div>
                </div>
                <button
                  class="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button
                  class="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>
              <div class="card-body">
                <h5 class="card-title">{ele.title}</h5>
                <p class="card-text">{ele.description}</p>
                <p class="card-text">Brand:{ele.brand}</p>
                <p class="card-text">Price:{ele.price}</p>
                <p class="card-text">Rating:{ele.rating}</p>
                <div class="d-grid gap-2 d-md-block">
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={()=>decrimentHandler()}
                    style={{ marginRight: "5px" }}>
                    --
                  </button>
                  {Onumber}
                  <button
                    type="button"
                    class="btn btn-outline-success"
                    onClick={()=>incrementHandler()}
                    style={{ marginLeft: "5px" }}>
                    +
                  </button>
                </div>
                <input
                  class="btn btn-primary"
                  type="submit"
                  value="Buynow"
                  style={{ marginTop: "5px" }}
                ></input>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default Viewitem;
