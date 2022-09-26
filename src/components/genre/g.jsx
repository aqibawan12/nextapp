import { useState, useEffect } from "react";
import Fil from "./Filter";
import Pri from "./PriceFil";
import Cr from "./crumbs";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import { useLocation, useNavigate } from "react-router-dom";
import "./g.css";
const Filterion = [
  "Sort by",
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
      //eslint-disable-next-line
    };

    getUsers();
    //eslint-disable-next-line
  }, [newText]);
  let navigate = useNavigate();
  let [show, setShow] = useState(props.data);
  let [color, setColor] = useState([]);
  let [size, setSize] = useState([]);
  let [fab, setFab] = useState([]);
  let [season, setSeason] = useState([]);
  let [piece, setPiece] = useState([]); 
 let [pr1, setPr1] = useState([0, 100000]); 
  let [fi, setFi] = useState("");
  function operation(id) {
    navigate("/" + id);
  }
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
  function collFI(id) {
    setFi(id);
  }
  function collPr(id) {
    if (Array.isArray(id)) {
      setPr1(id);
    }
  }
  const data2 = () => {
    let arr = [];

    props.data1
      .filter((val) => newText === val.type)
      .map((value) => arr.push(value.name));
    let data = props.data.filter((item) => arr.includes(item.category));

    let updated = data;
    if (fab.length) {
      updated = updated.filter((item) => fab.includes(item.fab));
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

    if (pr1.length) {
      updated = updated.filter(
        (item) => item.price >= pr1[0] && item.price <= pr1[1]
      );
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
    //eslint-disable-next-line
  }, [fab, piece, color, season, size, fi, pr1, newText]);

  return (
    <>
      <div className='g'>
        <div className='gTd'>
          <h1 className='gTh1'>{newText}</h1>
        </div>
        <div className='con'>
          <div className='data'>
            {/* display categories related to given data name  */}
            {props.data1
              .filter((val) => newText === val.type)
              .map((val) => (
                <div className='dI' onClick={() => operation(val.name)}>
                  <img className='dImage' src={val.image} alt='12' />{" "}
                  <h4 className='dText'>{val.name}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* product display section */}
      <div className='conP'>
      <div className="Pdis"><ul  style={{border:'4px solid red',width:'100%',display:'flex',flexDirection:'row',flexWrap:'wrap'}}  >
{show.map((val,index) =>  
{
  if(index%3===0){
     return  <li key={index}  style={{border:'4px solid black' ,display:'flex',flexDirection:"column",  flex:'0 0 400px',minWidth:'800px'  }} >
    <img className='INfoImg' src={val.images[0]} alt='12' />
            <p className='Tittle01'> {val.name}.{index}</p>
            <p className='P0'>Rs {val.price}</p>
</li>
  }
  else{
    return  <li key={index}  style={{border:'4px solid black' ,display:'flex', flexDirection:"column"}} >
    <img className='INfoImg' src={val.images[0]} alt='12' />
            <p className='Tittle01'> {val.name}</p>
            <p className='P0'>Rs {val.price}</p>
</li>
  }
}

 )}</ul></div>
        <div className='filter'>
          <div className='sorting'>
            <h4 className='none'>Sort by</h4>
<span className="Fil">
            <Fil data={Filterion} name={"filterion"} re={collFI} /></span>
            <span className='display'>
              <p>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='17'
                  height='17'
                  viewBox='0 0 14 14'
                  fill='none'
                >
                  <rect x='8' y='8' width='6' height='6' fill='#C4C4C4'></rect>
                  <rect x='4' width='6' height='6' fill='#C4C4C4'></rect>
                  <rect y='8' width='6' height='6' fill='#C4C4C4'></rect>
                </svg>
              </p>
              <p>
                <svg
                  width='17'
                  height='17'
                  viewBox='0 0 20 20'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect width='8.57143' height='8.57143' fill='#C4C4C4'></rect>
                  <rect
                    y='11.4286'
                    width='8.57143'
                    height='8.57143'
                    fill='#C4C4C4'
                  ></rect>
                  <rect
                    x='11.4286'
                    y='11.4286'
                    width='8.57143'
                    height='8.57143'
                    fill='#C4C4C4'
                  ></rect>
                  <rect
                    x='11.4286'
                    width='8.57143'
                    height='8.57143'
                    fill='#C4C4C4'
                  ></rect>
                </svg>
              </p>
              <p>View All</p>
            </span>
          </div>{" "}
          <div className='filterPart'>
            <p className='none'>filters</p>
            <div className='FormCon1'>
              {" "}
              <Pri name={"Price"} re={collPr} />
            </div>

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
      </div>
    </>
  );
};

export default G;
