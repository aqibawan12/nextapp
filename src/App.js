import React from "react";
import Cstate from "./components/./cart-state/action.jsx";
import Signup from "./components/./signup/Signup";
import Navbar from "./components/./Navbar/Navbar";
import Nd from "./components/./Navbar/nd";
import G from "./components/./genre/g.jsx";
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

import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

const App = () => {
  const ref = collection(db, "users");
  const ref1 = collection(db, "cat");

  const [users, setUsers] = useState([]);
  const [cat, setCat] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const items = [];
      const data1 = await getDocs(ref);

      data1.forEach((val) => {
        items.push({ ...val.data() });
      }) 
      setUsers(items);
    };

    getUsers();
  }, []);
  useEffect(() => {
    const getUsers = async () => {
      const ite = [];
      const dat = await getDocs(ref1);
      dat.forEach((val) => {
        ite.push({ ...val.data() });
      });
      setCat(ite);
    };

    getUsers();
  }, []);

  let [pass, setPass] = useState(0);
  let [pass1, setPass1] = useState(0);
  let [eff, setEff] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEff(true);
    }, 6000);
  });

  function operation(id, count) {
    setPass(id);
    setPass1(count);
  }

  let [pluss, setPluss] = useState();
  let [minuss, setMinuss] = useState();
  let [clears, setClears] = useState();

  function plus(id) {
    setPluss(id);
  }
  function minus(id) {
    setMinuss(id);
  }
  function empty(id) {
    setClears(id);
  }
  useEffect(() => {
    operation();
    plus();
    minus();
  });

  function passing() {
    if (eff === true) {
      return (
        <Cstate
          data={users}
          id={pass1}
          count={pass}
          total={val}
          plus0={pluss}
          minus1={minuss}
          clear2={clears}
        />
      );
    }
  }

  let [value, setValue] = useState(0);
  let [state, setState] = useState([]);
  let [price, setPrice] = useState(0);
  function val(val, stat, pric) {
    setValue(val);
    setState(stat);
    setPrice(pric);
  }
  let [item, setItems] = useState();
  function setting(id) {
    setItems(id);
  }
 
  return (
    <Router>
      <Navbar badge={value} />
      <div style={{ marginBottom: "135px" }}>
        {" "}
        <Nd selection={setting} />
      </div>

      {passing()}
      <Routes>
        {users.map((value) => (
          <Route
            path={"/Product/" + value.id}
            key={value.id}
            element={
              <Des
                data={users}
                name={value.name}
                index={value.id}
                price={value.price}
                images={value.images}
                // stock={value.stock}
                // stockValue={value.stockValue}
                onselect={operation}
              />
            }
          />
        ))}
{/* <Items value={value.name} data={users} data1={cat} /> */}
        {cat.map((value, index) => (
          <Route
            path={"/" + value.name}
           
            element={<Items nam={value.name} dat={users} dat1={cat} />}
          />
        ))}

        <Route path='/' element={<Home data={users} data1={cat} />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route
          path='/Product'
          element={<Products data={users} data1={cat} />}
        />
        <Route path='/Category' element={<Category data={cat} />} />
        <Route path='/Feature' element={<Feature data={users} />} />
        <Route path='/About' element={<About />} />
        <Route path='/Share' element={<Share />} />
        {data.map((val) => (
          <Route
            path={"/genre/" + val.name}
            element={<G name={item} data={users} data1={cat} />}
          />
        ))}
        <Route
          path='/cart'
          element={
            <Cart
              data={state}
              id={value}
              plus={plus}
              minus={minus}
              clear={empty}
              total={price}
            />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
