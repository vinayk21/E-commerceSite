import "./App.css";
import Home from "./Components/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Homenavbar from "./Components/Homenavbar";
import Login from "./Components/Login";
import Registration from "./Components/Registration";
import { createContext, useEffect, useState } from "react";
import Dashboard from "./Components/Dashboard";
import Catagories from "./Components/Catagories";
import Viewitem from "./Components/Viewitem";
import Cart from "./Components/Cart";
export const UserContext = createContext();
function App() {
  const [isLogin, setisLogin] = useState(false);
  const [Value, setValue] = useState();
  let token = JSON.parse(localStorage.getItem("token"));
  console.log("token", token);
  useEffect(() => {
    setisLogin(token);
  }, [token, isLogin]); 

  const getdata = (xx,yy) => {
    console.log("xx",xx);
    console.log("yy",yy);
    if (!Value) {
      setValue(xx);
    } else {
      setValue([...Value, xx]);
    }
  };
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard getdata={getdata} />} />
        <Route
          path="/dashboard/viewitem"
          element={
            <UserContext.Provider value={Value}>
              <Viewitem />
            </UserContext.Provider>
          }
        />
        <Route path="/dashboard/catagories" element={<Catagories />} />
        <Route
          path="/dashboard/cart"
          element={
            <UserContext.Provider value={Value}>
              <Cart />
            </UserContext.Provider>
          }
        />
      </Routes>
    </>
  );
}

export default App;
