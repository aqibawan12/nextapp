import { useState, useEffect } from "react";
import Fil from "./../genre/Filter";
import Pri from "./../genre/PriceFil";
 
import {   useLocation, useNavigate } from "react-router-dom";

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
  let newText = location.pathname.replace("/Category/", "");

  let navigate = useNavigate();
  let [show, setShow] = useState(props.dat);
  
 
  
 
  let [piece, setPiece] = useState("");
  function operation(id, match) {
    
    setPiece(match);
    navigate("/Category/" + id);
  }
  

  let [fi, setFi] = useState("");
  function collFI(id) {
    setFi(id);
  }
  let [pr1, setPr1] = useState([0, 100000]);

  function collPr(id) {
    if (Array.isArray(id)) {
      setPr1(id);
    }
  }

  const data2 = () => {
    let updated = props.dat;
    let arr = [];
    let arr1 = [];

    if (piece.length) {
      let send = props.dat1.filter((val) => val.sub === piece);
      send.map((value) => arr1.push(value.sub));

      let data = props.dat.filter((item) => arr1.includes(item.sub));
    updated=data
    } else {
      props.dat1
        .filter((val) => newText === val.name)
        .map((value) => arr.push(value.name));
      let data = props.dat.filter((item) => arr.includes(item.category));
    updated=data
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
  }, [fi,piece,pr1,newText,show]);

  return (
    <>
        <div className='g'>
        <div className='gTd'>
          <h1 className='gTh1'>{newText} Display</h1>
        </div>
        <div className='con'>
          <div className='data'>
            {/* display sub categories related to given category */} 
            {props.dat1
              .filter((val) => newText === val.sub)
              .map((val) => (
                <div className='dI' onClick={() => operation(val.nam, val.sub)}>
                  <img className='dImage' src={val.imz} alt='12' />{" "}
                  <h4 className='dText'>{val.nam}</h4>
                </div>
              ))}
          </div>
        </div>
      </div>
      {/* product display section */}
      <div className='conP'>
      <div className='Pdis'>
          <ul  className="Pul1"
         
          >
            {show.map((val, index) => {
              if (index % 3 === 0) {
                return (
                  <li key={index} className='TwoD'>
                    
                    <img className='INfoImg' src={val.images[0]} alt='12' />
                    <p className='Tittle011'>
                      {" "}
                      {val.name}.{index}
                    </p>
                    <p className='P01'>Rs {val.price}</p>
                  </li>
                );
              } else {
                return (
                  <li key={index} className='Block'>
                    <img className="INfoImg1" src={val.images[0]} alt='12' />
                    <p className='Tittle011'> {val.name}</p>
                    <p className='P01'>Rs {val.price}</p>
                  </li>
                );
              }
            })}
          </ul>
        </div>
        <div className='filter'>
          <div className='sorting'>
            <h4 className='none'>Sort by</h4>
            <span className='Fil'>
              <Fil data={Filterion} name={"filterion"} re={collFI} />
            </span>
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
 
          </div>
        </div>
      </div>
    </>
  );
};

export default G;
