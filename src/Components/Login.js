import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dashboard from "./Dashboard";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
const Login = ({setDisplayLR}) => {
   const  [Email,setEmail] = useState();
   const  [Password,setPassword] = useState();
   const  [Localdata,setLocaldata] = useState();
   const navigate = useNavigate()
useEffect(()=>{
    let Rglocaldata =  JSON.parse(localStorage.getItem("Rgdata"))
     setLocaldata(Rglocaldata)
},[])
const lHandler = () =>{
   let checkRgdone = Localdata?.filter((ele)=>ele.Email===Email);

   if(!checkRgdone?.length){
    alert("Registrations first");
    setDisplayLR(false)
   }else{
    localStorage.setItem("token",true);
    alert("Login successfully")
    setEmail("")
    setPassword("")
    navigate("/dashboard")
   }
}
console.log(Localdata);
  return (
    <>
      <label
        style={{
          marginLeft: "700px",
          fontSize: "large",
          marginTop: "200px",
          color: "ghostwhite",
        }}
      >
        SignIn
      </label>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            width: "40ch",
            marginTop: "2px",
            marginLeft: "550px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Email"
          type="Email"
          value={Email}
          onChange={(e)=>setEmail(e.target.value)}
          variant="outlined"
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Password"
          type="Password"
          value={Password}
          onChange={(e)=>setPassword(e.target.value)}
          variant="outlined"
          style={{ width: "40ch", marginLeft: "550px", marginTop: "20px" }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={()=>lHandler()}
        style={{ marginLeft: "680px", marginTop: "15px" }}>
        Login
      </Button>
    </>
  );
};

export default Login;
