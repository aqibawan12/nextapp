import   { useState, useEffect } from "react";
import FIL from './Filter'
import Cr from './crumbs'
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from "react-router-dom";
import "./g.css";
const G = (props) => {
  let location = useLocation();
  let newText = location.pathname.replace("/genre/", "");

  const ref = collection(db, newText);
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
  }, [newText]);
  console.log(users);
  return (
    <>
      <div className='g'>
        <div className='gTd'>
          <h1 className='gTh1'>{newText}</h1>
        </div>
        <div className='con'>
          <div className='data'>
            {users.map((val) => (
              <div className='dI'>
                <img className='dImage' src={val.image} alt='12' />{" "}
                <h4 className='dText'>{val.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* product display section */}
      <div className='conP'>
        <div className='Pdis'>
          {props.data.map((val) => (
            <div className='PdisIn'>
              <img className='INfoImg' src={val.images[0]} alt='' />
              <p className='Tittle01'> {val.name}</p>
              <p className='P0'>Rs {val.price}</p>
            </div>
          ))}
        </div>
        <div className='filter'>
          <h4 >Sort by</h4>
          <FIL/>
          <p>filters</p>
          <Cr/>  <Cr/>  <Cr/>  <Cr/>
        </div>
      </div>
    </>
  );
};

export default G;
