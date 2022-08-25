import React from "react";
import Items from "./Cart_i";
const Cart = (props) => {
  let con = props.data.filter((val) => val.stockValue > 0);
  return (
    <>{con.map((val) =>
       
        <Items
        id={val.id}
        name={val.nam}
        price={val.price}
        stockValue={val.stockValue}
        stock={val.stock}
        
        
        
        />
      )}
    </>
  );
};

export default Cart;
