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
import Cart from "./components/./Cart/Cart.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
const App = () => {
  const [id, setId] = useState(0);
  const [bag, setBag] = useState(0);
  function operation(state, id) {
    let { totalItem } = state.item.reduce(
      (accum, current) => {
        let { stockValue } = current;
        accum.totalItem += stockValue;
        return accum;
      },
      {
        totalItem: 0,
      }
    );
    setBag(totalItem);

    return { ...state };
    //
  }

  // const items = JSON.parse(localStorage.getItem("items"));
  return (
    <Router>
     
      <Navbar badge={bag} />
      <Routes>
        {data.map((value) => (
          <Route
            path={"/Product/" + value.id}
            key={value.id}
            element={
              <Des
                data={data}
                name={value.nam}
                index={value.id}
                price={value.Price}
                image={image}
                stock={value.stock}
                stockValue={value.stockValue}
                onselect={operation}
              />
            }
          />
        ))}
        <Route path='/' element={<Home />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/Product' element={<Products />} />
        <Route path='/Category' element={<Category />} />
        <Route
          path='/Feature'
          element={<Feature data={data} image={image} />}
        />
        <Route path='/About' element={<About />} />
        <Route path='/Share' element={<Share />} />
        <Route path='/cart' element={<Cart data={data} id={id} />} />
      </Routes>
    </Router>
  );
};

export default App;
