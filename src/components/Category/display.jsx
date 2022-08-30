import { Box, Card } from "@mui/material";
import React  from "react";
import { useNavigate } from "react-router-dom";
import images from "../Products/images";
const Items = (props) => {
 
  const data = props.data.filter((val) => val.category === props.value);
  let navigate = useNavigate()
  function operation(id) {
    const nums = images.filter((val) => val.index === id);
    const fur = nums.filter((val) => val.id === 0);

    return (
      <>
        {fur.map((val) => (
          <img className='pic_adjust' src={val.imq} alt='123' />
        ))}
      </>
    );
  }
function nav(id){
    navigate("/product/"+id)
}
  return (
    <>
      <p
        className='emptyCart1'
        style={{ borderBottom: "2px solid #d3d3d3", fontSize: "2.5em" }}
      >
        {props.value}
      </p>
      <div className='main-Pro'>
        {data.map((val) => (
          <Box
            key={val.id}
            style={{ marginTop: "79px" }}
            className='adjust'
            onClick={() => {
              nav(val.id)
            }}
          >
            <Card
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              {operation(val.id)}

              <span
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  height: "100px",
                }}
              >
                <h5>{val.name}</h5>
                <p style={{ marginTop: "-4px" }}>Rs {val.price}</p>
              </span>
            </Card>
          </Box>
        ))}
      </div>
    </>
  );
};

export default Items;
