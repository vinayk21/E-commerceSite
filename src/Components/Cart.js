import React, { useContext, useEffect, useState } from 'react'
import { useLocation ,useNavigate} from 'react-router-dom'
import { UserContext } from '../App';
const Cart = () => {
  const [Cartdata,setCartdata] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  let cartdata = useContext(UserContext);
  // console.log("cartda",cartdata);
 useEffect(()=>{
  let cartdata = location.state?.cart;
  let c = [cartdata?.ele];
  // console.log("c",c);
  setCartdata(c)
},[])
     // console.log("cart",Cartdata);
  return (
    <>
    <h2 style={{textAlign:"center",marginTop:"10px",color:"blue"}}>MY-CART</h2>
    <div className='abovemap'>
     {Cartdata?.map((cart,index)=>{
        return(
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
                      <img src={cart?.images[0]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={cart?.images[1]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={cart?.images[2]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={cart?.images[3]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
                    <div class="carousel-item">
                      <img src={cart?.images[4]} class="d-block w-100" alt="..." style={{width:"auto",height:"200px"}}/>
                    </div>
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
                  <h5 class="card-title">{cart?.title}</h5>
                  <p class="card-text">Brand:{cart?.brand}</p>
                <p class="card-text">Price:{cart?.price}</p>
                <p class="card-text">Rating:{cart?.rating}</p>
                  <a
                    href="#"
                    class="btn btn-outline-primary"
                    onClick={() => {
                      navigate("/dashboard/viewitem", { state: { sta: cart,index } });
                    }}
                  >
                    ViewItem
                  </a>
                  <a
                    href="#"
                    class="btn btn-outline-primary"
                    onClick={()=>navigate("/dashboard/cart",{state:{cart:{cart}}})}
                    style={{ marginLeft: "40px" }}
                  >
                    AddToCart
                  </a>
                </div>
              </div>
            </>
        )
     })}
     </div>
    </>
  )
}

export default Cart
