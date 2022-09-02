import React from "react";
import { useEffect, useReducer, useState ,useContext} from "react";
import reducer from "../../reducers";
import Cart from "../Cart/Cart";
 
const Action = (props) => {
    let id = props.id;
    let count = props.count
 
  const initialState = {
    item: props.data,
  };
 
// 
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    return dispatch({
      type: "Total",
    });
  }, [state.item]);

  useEffect(() => {
   
    return dispatch({
      type: "INCREMENT",
      payload: id,
      value: count,
    });
  }, [props.count]); 
useEffect(()=>{
  console.log(props.minus1) 
    return dispatch({
      type: "dcre",
      payload: props.minus1,
    });
  },[props.minus1])


  useEffect(()=>

  { 
    return dispatch({
      type: "incr",
      payload: props.plus0,
    });
  }
  ,[props.plus0])
  useEffect(()=> {
    return dispatch({
      type: "clear",
      payload: props.clear2,
    });
  },[props.clear2])
  useEffect(() => {
   props.total(state.totalItem,state.item,state.price)
  });

};

export default Action;
