import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import Card from "@mui/material/Card";
import { Box } from "@mui/system";
import './signup.css'
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import validator from 'validator'

const Signup = (props) => {
  const navigate = useNavigate();
  const [value, setValues] = useState({
    Name: "",
    Email: "",
    Phone_Number: "",
    Password: "",
  });



  const [errorText1, setErrorText1] = useState();

  const [errorText2, setErrorText2] = useState();

  const [errorText3, setErrorText3] = useState();
  const [errorText4, setErrorText4] = useState();
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);
  const handleSubmission = () => {
    
  if(!value.Name){setErrorText1("please provide name");return;}setErrorText1("");
  if (!value.Email || !validator.isEmail(value.Email)) {
    setErrorText2("please provide valid Email");
    return;
  }
  setErrorText2("");
  if(!value.Phone_Number || !validator.isMobilePhone(value.Phone_Number))
  {setErrorText3("please provide valid_number");return;}setErrorText3("");
  if(!value.Password){setErrorText4("please provide Password");return;}setErrorText4("");
  if (validator.isStrongPassword(value.Password, {
    minLength: 8, minLowercase: 0,
    minUppercase: 0, minNumbers: 0, minSymbols:0 
  })) {
    setErrorText4('')
  } else {
    setErrorText4('Is Not Strong Password')
    return;
  };
  setSubmitButtonDisabled(true);

    createUserWithEmailAndPassword(auth, value.Email,value.Password)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
      
        const user = res.user;
        await updateProfile(user, {
          displayName: value.Name,
          photoURL:value.Phone_Number
          
        });
        localStorage.setItem("ls",JSON.stringify(res.user.providerData ))

        props.tru(true,value.Name,value.Email)
        navigate("/");
       
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorText4(err.message);
      });
  };
  const lS=JSON.parse(localStorage.getItem("loginState"))
 
  let [t,sT]=useState(lS?lS:false)
  if (t) {
    return <div onClick={navigate('/')}></div>
  } else {
    
 


  return (
   
    <> 
    
      <Box  className="fitting1"
        sx={{
         
          backgroundColor:' lightblue',

          width: "329px",
          height: "560px",
        
          boxShadow: "0px 0px 2px blue",
          
        }} 
      >
        <Card
          sx={{
            backgroundColor:' lightblue',

            width: "290px",
        
            margin: "0px 20px",
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
            <h1>Sign up</h1>
          </div>
          <div className='textbox'>
            
            <TextField
        autoComplete="disabled"
              required
              label='Name'
              type='text'
              helperText={errorText1}
              error={errorText1}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Name: event.target.value }))
              }
            ></TextField>
     
            <TextField
              required
              label='Email'
              type='email'
              autoComplete="disabled"
              helperText={errorText2}
              error={errorText2}
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Email: event.target.value }))
              }
            ></TextField>
            <TextField
             autoComplete="disabled"
              required
              label='Phone_Number'
              type='tel'
              helperText={errorText3}
              error={errorText3}
              onChange={(event) =>
                setValues((prev) => ({
                  ...prev,
                  Phone_Number: event.target.value,
                }))
              }
            ></TextField>
            <TextField
             autoComplete="disabled"
              required
              label='Password'
              type='password'
              helperText={errorText4}
              error={errorText4}
             
              onChange={(event) =>
                setValues((prev) => ({ ...prev, Password: event.target.value }))
              }
            
            ></TextField>
            <Button size='large' variant='contained' onClick={handleSubmission} disabled={submitButtonDisabled}>
              Button
            </Button>
            <Button
              
              color='success'
              size='large'
              // variant='contained'
              onClick={(()=>navigate("/login"))}
             
            >
              S<p style={{ textTransform: "lowercase" }}>ign up</p>
            </Button>
          </div>
        </Card>
      </Box>
    </>
  ); }
};

export default Signup;
