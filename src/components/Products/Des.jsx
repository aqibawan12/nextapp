import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import App from "./ImgZoom.tsx";
import "./stylesDes.css";
import { useMediaQuery } from "react-responsive";
import InfoAdd from "./infoAdd";

import { BsPlus, BsDash } from "react-icons/bs";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const age = [
  { id: 1, age: "12-13 years" },
  { id: 2, age: "12-13 years" },
  { id: 3, age: "12-13 years" },
  { id: 4, age: "12-13 years" },
  { id: 5, age: "12-13 years" },
  { id: 6, age: "12-13 years" },
];

const ItemsContents = (props) => {
  const nums = props.image.filter((val) => val.index === props.index);
  const [count, setCount] = useState(1);
  // const [error, setError] = useState(1);
  let error = 12;

  let name = props.name;
  // let price = props.price;
  const navigate = useNavigate();
  const [pic, setPic] = useState(count);
  const [index, SetIndex] = useState(nums.length - 1);
  let to = nums.length - 1;

  const isTabletOrMobile = useMediaQuery({ query: "(max-width: 1300px)" });
  const isDesktop = useMediaQuery({ query: "(min-width: 1300px)" });
  function operation(val, id) {
    setPic(val);
  }

  useEffect(() => {
    const nims = nums.filter((val) => val.id === 0);
    nims.map((val) => setPic(val.imq));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function Swipes() {
    if (index < to) {
      SetIndex(index + 1);
    } else {
      SetIndex(0);
    }
    const nims = nums.filter((val) => val.id === index);
    nims.map((val) => setPic(val.imq));
  }

  function Swipes1() {
    if (index !== 0) {
      SetIndex(index - 1);
    } else {
      SetIndex(nums.length - 1);
    }
    const nims = nums.filter((val) => val.id === index);
    nims.map((val) => setPic(val.imq));
  }

  function navi() {
    navigate("/");
  }

  function SetItem() {
    setCount(count + 1);
  }
  function SetItem1() {
    if (count === 1) {
      setCount(1);
    } else {
      setCount(count - 1);
    }
  }

  function AddToCart(id) {
    props.onselect(count, id);
  }

  let k = " >";
  return (
    <>
      <div className='ProductNameTag'>
        <p>
          <span onClick={navi} style={{ fontSize: "22px", cursor: "pointer" }}>
            Home
          </span>
          <span style={{ fontSize: "12px", padding: "12px" }}>{k}</span>
          {name}
        </p>
      </div>

      <section className='section'>
        <div className='mediaQuery'>
          <div className='main1'>
            <div className='center1'>
              {nums.map((value, index) => (
                <div
                  onClick={() => {
                    operation(value.imq, value.id);
                  }}
                  className='imgs'
                >
                  <img
                    key={index}
                    className='imgS'
                    loading='lazy'
                    src={value.imq}
                    alt='44'
                  />
                </div>
              ))}
            </div>
            {isDesktop && (
              <div className='end1'>
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  minus odit quos explicabo mollitia cupiditate, eius
                  dignissimos iusto Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Inventore iure fuga ex dolor eligendi rerum
                  maiores consequuntur mollitia. Architecto nulla animi nostrum,
                  officiis quos illum id, corporis deleniti, at dolore
                  blanditiis iusto labore consequuntur numquam ipsam optio quasi
                  laborum! Et saepe hic eveniet expedita maxime sequi. Officia
                  natus voluptate totam delectus minus saepe inventore? Laborum
                  libero, ipsa non magni veniam voluptatum cumque dolores
                  expedita ut numquam vel fugit odio aspernatur. Tenetur sunt
                  cupiditate quas deserunt maxime ullam soluta consequatur
                  voluptas nihil. Alias atque optio porro ipsa, blanditiis quod,
                  fuga eligendi, fugit repudiandae dolorem praesentium
                  exercitationem magnam.
                </p>
              </div>
            )}
          </div>

          <div className='container'>
            <div className='slider'>
              <div className='slider__slides'>
                <div>
                  {isTabletOrMobile && (
                    <img
                      src={pic}
                      alt={props.index}
                      style={{
                        width: "100%",
                        height: "500px",
                        imageResolution: "1080dppx",
                        imageRendering: "pixelated",
                      }}
                    />
                  )}
                  {isDesktop && <App ima={pic} width='100%' height='800px' />}
                </div>
              </div>
              <div
                onClick={Swipes}
                id='nav-button--prev'
                className='slider__nav-button'
              ></div>
              <div
                onClick={Swipes1}
                id='nav-button--next'
                className='slider__nav-button'
              ></div>
            </div>
          </div>
        </div>

        <div className='main3'>
          <div className='upper'>
            <span>
              <h1 className='ProductTittle'>{name}</h1>
              <h3 className='productDes'>
                {props.price}
                <span>sold out </span>
                <span style={{ color: "black" }}> delivery</span>
              </h3>
            </span>
            <div className='ageCard'>
              {age.map((val) => (
                <InfoAdd key={val.id} age={val.age} id={val.id} />
              ))}
            </div>
          </div>
          <div className='addProduct'>
            <p>Quantity</p>
            <div className='counter'>
              <div className='dec'>
                <p onClick={SetItem1} className='sign'>
                  <BsDash />
                </p>
              </div>
              <div className='value'>
                <p>{count}</p>
              </div>
              <div className='dec'>
                <p onClick={SetItem} className='sign'>
                  <BsPlus />
                </p>
              </div>
            </div>
            <p>{error}</p>
            <input
              onClick={() => AddToCart(props.index)}
              className='btnSubmit'
              type='button'
              value='Add to Cart'
            />
            {isTabletOrMobile && (
              <div
                style={{
                  marginBottom: "-80px",
                  marginTop: "50px",
                  marginLeft: "1px",
                }}
                className='end1'
              >
                <h2>Description</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. A
                  minus odit quos explicabo mollitia cupiditate, eius
                  dignissimos iusto lorem
                </p>
              </div>
            )}
            <div
              style={{
                marginTop: 100,
                marginLeft: "-10px",
                marginBottom: "40px",
              }}
            >
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls='panel1a-content'
                  id='panel1a-header'
                >
                  <Typography>info</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemsContents;
// const [counted, setCounted] = useState();
// const [stock, setStock] = useState(props.stock);
// const [counted1, setCounted1] = useState(0);
// const key = props.data;
// function AddToCart(id) {
//   if (stock >= count) {
//     // const value = props.data.filter((val) => val.id === props.index);
//    key.map((val) => {
//       if (val.id === id) {
//       return { ...key, stockValue: val.stockValue + 1 };
//       }
//       return val;
//     });

//
//     setStock(stock - count);
//     setCounted(count);
//     setError("");

//   } else {
//     if (AddCart < props.stock) {
//       setError(`You can only add  ${stock} of this item to your cart.`);
//     } else {
//       setError(`All ${props.stock} ${props.name} are in your cart.`);
//     }

//   }
// console.log(key)
//   props.onselect(AddCart, props.index);
// }
