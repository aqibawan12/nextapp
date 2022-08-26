import React from "react";
import Items from "./Cart_i";
import { useNavigate } from "react-router-dom";
import "./cart.css";
const Cart = (props) => {
  let filter = props.data.filter((val) => val.stockValue > 0);
   
  let navigate = useNavigate();
 
 
  if (props.id === 10) {
    return (
      <>
        <div className='emptyCart'>
          <h1>Your cart is empty </h1>

          <input
            className='emptyBtn'
            type='button'
            value='Continue shopping'
            onClick={() => navigate("/")}
          />

          <h2>Have an account?</h2>

          <p>
            <label onClick={() => navigate("/login")}> Sign in </label>
            to checkout faster
          </p>
        </div>
      </>
    );
  } else {
    return (
      <>
        {" "}
        <p
          className='emptyCart'
          style={{ fontSize: "1rem", fontWeight: "bolder" }}
        >
          Shopping Cart
        </p>
        <div className=' CartPro' >
         
          {filter.map((val) => (
            <Items
              name={val.nam}
              id={val.id}
              price={val.Price}
              stock={val.stock}
              stockValue={val.stockValue}
            />
          ))}
        </div>
      </>
    );
  }
};

export default Cart;
