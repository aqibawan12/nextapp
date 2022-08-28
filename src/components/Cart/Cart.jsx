import React from "react";
import Items from "./Cart_i";
import { useNavigate } from "react-router-dom";
import "./cart.css";
// import reducer from "../../reducers";

const Cart = (props) => {
  console.log(props.id);
  let filter = props.data.filter((val) => val.stockValue > 0);

  let navigate = useNavigate();

  function plus(id) {
    props.plus(id);
  }

  function minus(id) {
    props.minus(id);
  }
  function clear(id) {
    props.clear(id);
  }

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
          </span>
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
                plus={plus}
                minus={minus}
                clear={clear}
              />
            ))}
          </div>
          <div className='cartTo'>
            <div className="txtBx">
              {" "}
              <p style={{ fontSize: "15px", color: "#4b4b4b" }}>Order Notes</p>
              <textarea
                className='textBox'
                // cols='40'
                rows='4'
                style={{
                  resize: "vertical",
                }}
              ></textarea>
              <p style={{ fontSize: "12px" }}>
                PLEASE LEAVE SPECIAL INSTRUCTIONS ABOVE
              </p>
            </div>
            <p className='brake'></p>
            <div>
              <h2 className='subTotal'>
                Subtotal<span style={{ float: "right" }}>{props.total}</span>
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
              <div className='BTNSec'>
                <input
                  className='cartBTN'
                  type='button'
                  value='Continue Shopping'
                  onClick={() => navigate("/")}
                />
                <input className='cartBTN' type='button' value='Checkout' />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
};

export default Cart;
