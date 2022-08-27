import React  from "react";
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
function plus(id,stV){
  
}
function minus(id){

}








  return (
    
    <div className='cartSection'>
      <div className='cartDetail'>
        <img
          className='image'
          src='https://cdn.shopify.com/s/files/1/2635/3244/products/WEB_0282_3e23347f-3d49-47fd-8d79-2fc362623cb2.jpg?v=1660902417'
          alt='12'
        />
        <div className='cartMid'>
          <div className='cartDes'>
            <h2   onClick={() => navigate("/Product/" + id)}>{name}</h2>
            <p>F3014SH-113-BLK</p>
            <p>Size: 12-13 Year</p>
          </div>
          <div className='items'>
            <div className='counter1'>
              <div className='dec'>
                <p className='sign' onClick={()=>plus(props.id)} >
                  <BsDash />
                </p>
              </div>
              <div className='value1'>
                <p>{stockValue}</p>
              </div>
              <div className='dec'>
                <p className='sign' onClick={()=>minus(props.id)}>
                  <BsPlus />
                </p>
              </div>
            </div>
            <p className='p'>Item Total</p>
          </div>
        </div>
      </div>
      <div className='CartEnd'>
        <div className='single'>
          <h3>{price}</h3>
        </div>
        <div className='remove'>
          <i>
            <RiDeleteBin6Line />
          </i>
        </div>
        <div className='total'>
          <h4>RS 5000,0</h4>
        </div>
      </div>
    </div>
  );
};

export default Cart_i;
