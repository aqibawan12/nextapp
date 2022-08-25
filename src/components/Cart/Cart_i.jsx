import { Box, Card } from "@mui/material";
import React from "react";
import './cart.css'

const itemsContents = (props) => {

 
    let name1= props.name
    let id =props.stockValue;
  
  return (
    <>

      <Box className="adjust"  >
        <Card style={{ display:'flex',flexDirection:'column',justifyContent:'center'}}>
             
          <img
          className="pic_ayyyjust"
            src="https://via.placeholder.com/150/000000/FFFFFF/?text=itsolutionstuck.net"
            alt='123'
          /> 
       <span><h5 >{name1}</h5><p>{props.price}</p></span>
        </Card>
        
      </Box>     
   
    </>
  );
};

export default itemsContents;