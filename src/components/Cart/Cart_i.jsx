import React from "react";
import { useNavigate } from "react-router-dom";
import { BsPlus, BsDash } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart_i = (props) => {
  let name = props.name;
  let id = props.id;
  let price = props.price;
  //   let stock = props.stock;
  let navigate = useNavigate();
  let stockValue = props.stockValue;
  function plus(id) {
    props.plus(id);
  }
  function minus(id) {
    props.minus(id);
  }

  function clear(id) {
    props.clear(id);
  }
 
  //

let val =stockValue*price
  return (
   
    <div className='cartSection'>
      <div className='cartDetail'>
        <img
          className='image55'
          src=
  'https://cdn.shopify.com/s/files/1/2635/3244/products/WEB_0282_3e23347f-3d49-47fd-8d79-2fc362623cb2.jpg?v=1660902417'
          alt='12'
        /> 
        <div className='cartMid'>
          <div className='cartDes'>
            <div className="cart_i">
            <h2 onClick={() => navigate("/Product/" + id)}>{name}</h2>
            <span><p>F3014SH-113-BLK</p>
            <p>Size: 12-13 Year</p></span></div>
            <span className="price">   <h3>Rs {price}</h3></span>
           
          </div>
          <div className='items'>
            <div className="Bcounter">
            <div className='counter1'>
              <div className='dec'>
                <p className='sign' onClick={() => plus(props.id)}>
                  <BsDash />
                </p>
              </div>
              <div className='value1'>
                <p>{stockValue}</p>
              </div>
              <div className='dec'>
                <p className='sign' onClick={() => minus(props.id)}>
                  <BsPlus />
                </p>
              </div>
            </div>
            <div className='remove' onClick={() => clear(props.id)}>
          <i>
            <RiDeleteBin6Line />
          </i>
        </div>
            
            </div>
            <h2 className='itemTotal'>
             Item Total<span className="toV" style={{ float: "right" }}>Rs {val}</span>
              </h2>
          </div>
        </div>
      </div>
      {/* <div className='CartEnd'>
        <div className='single'>
       
        </div>
        <div className='remove' onClick={() => clear(props.id)}>
          <i>
            <RiDeleteBin6Line />
          </i>
        </div>
        <div className='total'>
          <h4>{val}</h4>
        </div>
      </div> */}
    </div>
  
  );
};

export default Cart_i;
