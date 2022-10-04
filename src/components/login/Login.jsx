import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import "./login.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import validator from "validator";

const Login = (props) => {
  const navigate = useNavigate();
  const [value, setValues] = useState({
    Name: "",
    Email: "",
    Phone_Number: "",
    Password: "",
  }); const [errorText2, setErrorText2] = useState();
  const lS=JSON.parse(localStorage.getItem("loginState"))
 
  let [t,sT]=useState(lS?lS:false)
  const [errorText4, setErrorText4] = useState();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const HandleSubmission = () => {
    if (!value.Email || !validator.isEmail(value.Email)) {
      setErrorText2("please provide valid Email");
      return;
    }
    setErrorText2("");

    if (!value.Password) {
      setErrorText4("please provide Password");
      return;
    }
    setErrorText4("");
  
  
 
    
  
    setSubmitButtonDisabled(true);
    signInWithEmailAndPassword(auth, value.Email, value.Password)
      .then(async (res) => { 
         localStorage.setItem("ls",JSON.stringify(res.user.providerData ))
        setSubmitButtonDisabled(false);
       props.tru(true)
        navigate("/");
        console.log()
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorText4(err.message);
      });  
  };
if (t) {
  navigate('/')
} else {
  

  return (
    <>
      <Box
        sx={{
          position: "relative ",
          backgroundColor:' lightblue',
          width: "329px",
          height: "390px",

          boxShadow: "0px 0px 2px blue",
        }}
        className='fitting'
      >
        <Card
          sx={{
            backgroundColor:' lightblue',
            margin: "0px 15px",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              caretColor: "rgba(0,0,0,0)",
              display: "flex",
              justifyContent: "center",
              width: "250px",
              fontSize: "17px",
              color: "brown",
            }}
          >
            <h1>Sign in</h1>
          </div>
          <div className='textbox1'>
            <TextField
              required
              label='Email'
              type='email'
              helperText={errorText2}
              error={errorText2}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Email: event.target.value }))
              }
            ></TextField>
            <TextField
              required
              label='Password'
              type='password'
              helperText={errorText4}
              error={errorText4}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Password: event.target.value }))
              }
            ></TextField>
            <Button
              size='large'
              variant='contained'
              onClick={HandleSubmission}
              disabled={submitButtonDisabled}
            >
              Button
            </Button>{" "}
            <Button
              className='coloring'
              color='success'
              size='large'
              // variant='contained'
              onClick={() => navigate("/signup")}
            >
              S<p style={{ textTransform: "lowercase" }}>ign in</p>
            </Button>
          </div>
        </Card>
      </Box>
    </>
  );}
};

export default Login;
