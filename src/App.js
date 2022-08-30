import React from "react";
import Signup from "./components/./signup/Signup";
import Navbar from "./components/./Navbar/Navbar";
import Home from "./components/Home";
import Login from "./components/./login/Login";
import Products from "./components/./Products/Products";
import Feature from "./components/./Feature/Feature";
import Category from "./components/./Category/Category";
import About from "./components/./About/About";
import Share from "./components/Share/Share.jsx";
import data from "./components/./Products/data";
import Des from "./components/./Products/Des.jsx";
import image from "./components/./Products/images";
import Items from "./components/Category/display";
import CatData from "./components/Category/cat";
import Cart from "./components/./Cart/Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  collection,
  addDoc,
  updateDoc,
  doc,
  getDocs,
} from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useReducer, useState } from "react";

import reducer from "./reducers";
const initialState = {
  item: data,
};

const App = () => {
  const usersCollectionRef = collection(db, "users");
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data() })));
    };

    getUsers();
  }, []);
  console.log(users);

  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    return dispatch({
      type: "Total",
    });
  }, [state.item]);

  function operation(count, id) {
    return dispatch({
      type: "INCREMENT",
      payload: id,
      value: count,
    });
  }
  function plus(id) {
    return dispatch({
      type: "dcre",
      payload: id,
    });
  }
  function minus(id) {
    return dispatch({
      type: "incr",
      payload: id,
    });
  }
  function empty(id) {
    return dispatch({
      type: "clear",
      payload: id,
    });
  }
  // const items = JSON.parse(localStorage.getItem("items"));
  return (
    <Router>
      <div>
        <Navbar badge={state.totalItem} />
      </div>

      <Routes>
        {users.map((value) => (
          <Route
            path={"/Product/" + value.id}
            key={value.id}
            element={
              <Des
                data={data}
                name={value.name}
                index={value.id}
                price={value.price}
                image={image}
                // stock={value.stock}
                // stockValue={value.stockValue}
                onselect={operation}
              />
            }
          />
        ))}

        {CatData.map((value) => (
          <Route
            path={"/" + value.name}
            key={value.id}
            element={<Items value={value.name} data={users} />}
          />
        ))}

        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Product' element={<Products data={users} />} />
        <Route path='/Category' element={<Category />} />
        <Route
          path='/Feature'
          element={<Feature data={users} image={image} />}
        />
        <Route path='/About' element={<About />} />
        <Route path='/Share' element={<Share />} />
        <Route
          path='/cart'
          element={
            <Cart
              data={state.item}
              id={state.totalItem}
              plus={plus}
              minus={minus}
              clear={empty}
              total={state.price}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
