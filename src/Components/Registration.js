import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

  const Registration = ({ setDisplayLR }) => {
  const [Name, setName] = useState();
  const [MobileNo, setMobileNo] = useState();
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Localstoragedata, setLocalstoragedata] = useState();
  useEffect(() => {
     let datalocal = JSON.parse(localStorage.getItem("Rgdata"));
    console.log("dara", datalocal);
    setLocalstoragedata(datalocal);
  }, []);
  const rgHandler = () => {
    let Rgdata = { Name, MobileNo, Email, Password };
    if (!Email && !Password && !Name && !MobileNo) {
      alert("Enter data");
    } else {
      if (!Localstoragedata?.length) {
        localStorage.setItem("Rgdata", JSON.stringify([Rgdata]));
      } else {
        localStorage.setItem(
          "Rgdata",
          JSON.stringify([...Localstoragedata, Rgdata])
        );
      }
      setEmail("");
      setMobileNo("");
      setName("");
      setPassword("");
      setDisplayLR(true);
      alert("Registrtion successfully");
    }
  };
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
        Registration
      </label>
      <Box
        component="form"
        sx={{
          "& > :not(style)": {
            width: "40ch",
            marginTop: "1px",
            marginLeft: "550px",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          value={Name}
          label="Name"
          variant="outlined"
          onChange={(e) => setName(e.target.value)}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="MobileNo"
          variant="outlined"
          value={MobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
          type="tel"
          style={{ width: "40ch", marginLeft: "550px", marginTop: "20px" }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Email"
          value={Email}
          type="Email"
          onChange={(e) => setEmail(e.target.value)}
          variant="outlined"
          style={{ width: "40ch", marginLeft: "550px", marginTop: "20px" }}
        />
      </Box>
      <Box>
        <TextField
          id="outlined-basic"
          label="Password"
          type="Password"
          value={Password}
          variant="outlined"
          onChange={(e) => setPassword(e.target.value)}
          style={{ width: "40ch", marginLeft: "550px", marginTop: "20px" }}
        />
      </Box>
      <Button
        variant="contained"
        onClick={() => rgHandler()}
        style={{ marginLeft: "660px", marginTop: "15px" }}
      >
        Registration
      </Button>
    </>
  );
};

export default Registration;
  