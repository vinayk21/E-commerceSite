import React, { useState } from "react";
import Login from "./Login";
import Registration from "./Registration";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const Homenavbar = () => {
  const [DisplayLR, setDisplayLR] = useState(true);
  const rgHandler =()=>{
    setDisplayLR(false);
  }
  const lHandler =() =>{
    setDisplayLR(true);
  }

  return (
    <>
      <div
        style={{
          height: "5vh",
          width: "auto",
          backgroundColor: "rgba(255, 210, 71, 0.1)",
          borderRadius: "3px",
        }}
      >
     { !DisplayLR ?  <Button
          variant="contained"
          size="small"
          onClick={()=>{lHandler()}}
          style={{ marginLeft: "1300px", marginTop: "5px" }}
        >
          Login
        </Button>:
        <Button
          variant="contained"
          size="small"
          onClick={()=>{rgHandler()}}
          style={{ marginLeft: "1300px", marginTop: "5px" }}>
          Registration
        </Button>}
      </div>
      {DisplayLR ? <Login setDisplayLR={setDisplayLR}/> : <Registration setDisplayLR={setDisplayLR} DisplayLR={DisplayLR}/>}
    </>
  );
};

export default Homenavbar;
