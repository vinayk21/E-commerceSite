import React, { useEffect, useState ,useContext } from "react";
// import { senddata } from "./Dashboard";
import { useNavigate } from "react-router-dom";
const Catagories = () => {
  const [Capi, setCapi] = useState();
  const [Cdataapi, setCdataapi] = useState();
  const [Btnname, setBtnname] = useState();
  // const getdata =  useContext(senddata)
  // console.log("getdadta",getdata);
//   const [Btntrue, setBtnture] = useState(true);
const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dummyjson.com/products/categories`)
      .then((res) => res.json())
      .then((cdata) => setCdataapi(cdata));
  }, []);
  useEffect(() => {
    fetch(`https://dummyjson.com/products/category/${Btnname}`)
      .then((res) => res.json())
      .then((data) => setCapi(data.products));
  },[Btnname]);
  
  return (
    <>
      <div className="catagorymain">
        <div className="btncatagoryes">
          {Cdataapi?.map((elem) => {
            return (
              <>
                <button
                  type="button"
                  class="btn btn-outline-primary"
                  onClick={() => {
                    setBtnname(elem);
                    
                  }}
                >
                  {elem}
                </button>
              </>
            );
          })}
        </div>
        <div className="cdata">
          <div className="abovemap">
            {Capi?.map((ele) => {
              return (
                <>
                  <div
                    class="card"
                    style={{
                      width: "20rem",
                      height: "25rem",
                      margin: "30px 20px 10px 30px",
                    }}
                  >
                    <img
                      src={ele.thumbnail}
                      class="card-img-top"
                      alt="..."
                      style={{ width: "auto", height: "200px" }}
                    />
                    <div class="card-body">
                      <h5 class="card-title">{ele.title}</h5>
                      <p class="card-text">{ele.price}</p>
                      <a href="#" class="btn btn-outline-primary" onClick={()=>{console.log("ele",ele);navigate("/dashboard/viewitem",{state:{sta:ele}})}}>
                        ViewItem  
                      </a>
                      <a
                        href="#"
                        class="btn btn-outline-primary"
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
        </div>
      </div>
    </>
  );
};

export default Catagories;
