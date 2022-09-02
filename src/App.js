import React from "react";
import Cstate from "./components/./cart-state/action.jsx";
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
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "./firebase";
import { useEffect, useState } from "react";

const App = () => {
  const ref = collection(db, "users");
  const user = React.createContext();
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      const items = [];
      const data1 = await getDocs(ref);

      data1.forEach((val) => {
        items.push({ ...val.data() });
      });

      setUsers(items);
    };

    getUsers();
  }, []);

  let [pass, setPass] = useState(0);
  let [pass1, setPass1] = useState(0);
  let [eff, setEff] = useState(false);
  let [eff1, setEff1] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setEff(true);
    }, 4000);
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
    function operation(id, count) {
      setPass(id);
      setPass1(count);
    }
    function plus(id) {
      setPluss(id);
    }
    function minus(id) {
      setMinuss(id);
    }

    operation();
    plus();
    minus();
  });
  let [daata, setData] = useState([]);
  useEffect(() => {
  
 
   
  
  }, []); 
  let data = JSON.parse(localStorage.getItem("state"));
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
 
 useEffect(()=>{
  localStorage.setItem('state',JSON.stringify(state))
 })
  return (
    <Router>
      <div>
        <Navbar badge={value} />
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

        <Route path='/' element={<Home data={users} />} />
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
////localStorage

// const getdata = () => {
//   let lData = JSON.parse(localStorage.getItem("state1"));
//   // setStore(lData)
//   if (lData) {
//     return lData;
//   } else {
//     return [];
//   }
// };

// const [items1, setItems] = useState([]);
// let [d, sD] = useState([]);

// function storing(id, count) {
//   const data = users.filter((val) => val.id === id);
//   sD(data);
//   console.log(d)
//   const app = d.map((val) => {
//     if (val.id === id) {
//       return { ...val, stockValue: val.stockValue = +count };
//     }

//     return { ...val };
//   });
// setTimeout(() => {
//   sD(...d,app)
//  console.log(d)
// },1000);
//   setItems([...items1, data]);
// }
// // console.log(items1);
// useEffect(() => {
//   localStorage.setItem(`state1`, JSON.stringify(items1));
// }, [items1]);
