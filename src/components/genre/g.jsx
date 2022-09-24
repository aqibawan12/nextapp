import { useState, useEffect } from "react";
import Fil from "./Filter";
import Pri from "./PriceFil";
import Cr from "./crumbs";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation } from "react-router-dom";
import "./g.css";
const Filterion = [
  "Feature",
  "Date New to Old",
  "Date Old to New",
  "Price High to low",
  "Price low  to High ",
  " ALPHABETICALLY, Z-A",
  " ALPHABETICALLY, A-Z",
];
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

  let [show, setShow] = useState(props.data);
  let [color, setColor] = useState([]);
  let [size, setSize] = useState([]);
  let [fab, setFab] = useState([]);
  let [season, setSeason] = useState([]);
  let [piece, setPiece] = useState([]);

  function coll(id) {
    setColor(id);
  }

  function collF(id) {
    setFab(id);
  }

  function collSi(id) {
    setSize(id);
  }

  function collSea(id) {
    setSeason(id);
  }
  function collP(id) {
    setPiece(id);
  }
  let [fi, setFi] = useState("");
  function collFI(id) {
    setFi(id);
  }
  let [pr,setPr]=useState('')
  function collPr(id) {
    setPr(id);
  }

  const data2 = () => {
    let updated = props.data;
    if (fab.length) {
      updated = updated.filter((item) => fab.includes(item.fab));
      console.log(updated);
    }
    if (piece.length) {
      updated = updated.filter((item) => piece.includes(item.piece));
    }
    if (color.length) {
      updated = updated.filter((item) => color.includes(item.color));
    }
    if (season.length) {
      updated = updated.filter((item) => season.includes(item.season));
    }
    if (size.length) {
      updated = updated.filter((item) => size.includes(item.size));
    }
    if (fi.length) {
      if (fi === Filterion[0]) {
        updated = updated.filter((val) => val.feature === true);
      }
      if (fi === Filterion[2]) {
        updated = updated.sort((a, b) => b.id - a.id);
      }
      if (fi === Filterion[1]) {
        updated = updated.sort((a, b) => a.id - b.id);
      }
      if (fi === Filterion[3]) {
        updated = updated.sort((a, b) => (a.price > b.price ? -1 : 1));
      }
      if (fi === Filterion[4]) {
        updated = [...updated].sort((a, b) => (a.price > b.price ? 1 : -1));
      }
      if (fi === Filterion[5]) {
        updated = updated.sort((a, b) => (a.name > b.name ? -1 : 1));
      }
      if (fi === Filterion[6]) {
        updated = [...updated].sort((a, b) => (a.name > b.name ? 1 : -1));
      }
    }

    setShow(updated);
  };

  useEffect(() => {
    data2();
  }, [fab, piece, color, season, size, fi]);

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
          {show.map((val) => (
            <div className='PdisIn'>
              <img className='INfoImg' src={val.images[0]} alt='' />
              <p className='Tittle01'> {val.name}</p>
              <p className='P0'>Rs {val.price}</p>
            </div>
          ))}
        </div>
        <div className='filter'>
          <h4>Sort by</h4>

          <Fil data={Filterion} name={"filterion"} re={collFI} />

          <p>filters</p>
          <Pri name={"Price"} re={collPr} />
          {users.map((val) => (
            <Cr data={val.season} name={"season"} re={collSea} />
          ))}
          {users.map((val) => (
            <Cr data={val.color} name={"val.color"} re={coll} />
          ))}
          {users.map((val) => (
            <Cr data={val.size} name={"size"} re={collSi} />
          ))}
          {users.map((val) => (
            <Cr data={val.fabrics} name={"fabrics"} re={collF} />
          ))}
          {users.map((val) => (
            <Cr data={val.piece} name={"piece"} re={collP} />
          ))}
        </div>
      </div>
    </>
  );
};

export default G;
