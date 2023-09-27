import React, { useEffect, useState,  createContext } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = ({getdata}) => {
  const [api, setApi] = useState();
  const [value, setValue] = useState();
  const [page, setPage] = useState(0);
  const navigate = useNavigate();
  const senddata = createContext();
  // console.log("senddata",senddata);
  useEffect(() => {
    if (value) {
      fetch(`https://dummyjson.com/products/search?q=${value}`)
        .then((res) => res.json())
        .then((data) => setApi(data.products));
    } else {
      fetch(`https://dummyjson.com/products/`)
        .then((res) => res.json())
        .then((data) => setApi(data.products));
    }
  }, [value]);
  const alldata = () => {
    return api;
  };

  // console.log("gg",getdata);
  return (
    <>
        {/* <senddata.Provider value={"hello"}> */}

      <nav class="navbar navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand">MultiKart</a>
          <a
            class="navbar-brand"
            onClick={() => navigate("/dashboard/catagories")}
          >
            Category
          </a>
          <a class="navbar-brand" onClick={()=>navigate("/dashboard/cart")}>MyCart</a>
          <a class="navbar-brand">About</a>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={(e) => setValue(e.target.value)}
            />
            <button class="btn btn-danger" type="submit">
              LogOut
            </button>
          </form> 
        </div>
      </nav>
      <div className="abovemap">
        {alldata()?.map((ele,index) => {
          return (
            <>
              <div
                class="card"
                style={{
                  width: "20rem",
                  height: "27rem",
                  margin: "30px 20px 10px 30px",
                }}
                key={index}
              >
                <div
                  id={`carouselExampleControls_${index}`}
                  class="carousel slide"
                  data-bs-ride="carousel"
                  style={{width:"auto",height:"200px"}}
                >
                  <div class="carousel-inner">
                    <div class="carousel-item active">
                      <img src={ele.images[0]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={ele.images[1]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={ele.images[2]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={ele.images[3]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={ele.images[4]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    {/* {console.log("img",ele.images)} */}
                  </div>
                  <button
                    class="carousel-control-prev"
                    type="button"
                    data-bs-target={`#carouselExampleControls_${index}`}
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
                    data-bs-target={`#carouselExampleControls_${index}`}
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
                  <p class="card-text">Brand:{ele.brand}</p>
                <p class="card-text">Price:{ele.price}</p>
                <p class="card-text">Rating:{ele.rating}</p>
                  <a
                    href="#"
                    class="btn btn-outline-primary"
                    onClick={() => {  
                      getdata(ele,index)
                      navigate("/dashboard/viewitem", { state: { sta: ele,index } });
                    }}
                  >
                    ViewItem
                  </a>
                  <a
                    href="#"
                    class="btn btn-outline-primary"
                    onClick={()=>navigate("/dashboard/cart",{state:{cart:{ele}}})}
                    style={{ marginLeft: "40px" }}
                  >
                    AddToCart
                  </a>
                </div>
              </div>
            </>
          );
        })}
      </div>
      
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" href="#">
              Previous
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" href="#">
              Next
            </a>
          </li>
        </ul>
      </nav>
      {/* </senddata.Provider> */}

    </>
  );
};
export default Dashboard;
// export {senddata};
