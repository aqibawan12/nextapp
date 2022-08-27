import React, { useReducer } from "react";
import Items from "./Cart_i";
import { useNavigate } from "react-router-dom";
import "./cart.css";
import reducer from "../../reducers";

const Cart = (props) => {
  const initialState = {
    item: props.data,
  };
  let filter = props.data.filter((val) => val.stockValue > 0);

  let navigate = useNavigate();
  const [state, dispatch] = [reducer, initialState];
  if (props.id === 0) {
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
        <p className='emptyCart1'>
          <span style={{ borderBottom: "2px solid #d3d3d3" }}>
            Shopping Cart
          </span>{" "}
        </p>
        <section className='cart'>
          <div className=' CartPro'>
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
          <div className='cartTo'>
            <p style={{ fontSize: "15px", color: "#4b4b4b" }}>Order Notes</p>
            <div className='textBox'>
              <textarea
                cols='40'
                rows='4'
                style={{
                  fontSize: "18px",
                  padding: "5px",
                  borderRadius: "4px",
                }}
              ></textarea>
            </div>
            <p style={{ fontSize: "12px" }}>
              PLEASE LEAVE SPECIAL INSTRUCTIONS ABOVE
            </p>
            <p className='brake'></p>
            <h2 className='subTotal'>
              Subtotal<span style={{ float: "right" }}> Rs 75000</span>
            </h2>
            <p
              style={{
                fontSize: "13px",
                color: "#141414",
                marginBottom: "20px",
              }}
            >
              Taxes and shipping calculated at checkout
            </p>

            <input
              className='cartBTN'
              type='button'
              value='Continue Shopping'
            />
            <input className='cartBTN' type='button' value='Checkout' />
          </div>
        </section>
      </>
    );
  }
};

export default Cart;
